const gridConfig ={
    xValues: 20,
    yValues: 20,
    gridWidth: 1,
    paddingRatio: 0.1,
    strokeWidth: 1,
    fontSize: 18
}

const shapes = {
    circle: { x: 1, borderRadius: 0.5 }
}

class GridLayout {
    constructor ({ e, shapes }) {
        this.config = gridConfig

        this.e = e
        this.canvasElement = document.createElement('CANVAS')

        this.e.appendChild(this.canvasElement)
        this.c = this.canvasElement.getContext('2d')

        this.shapeConfigs = {}
        this.shapes = shapes || {}
        this.init()
        window.onresize = () => {
            this.init()
        }
        this.canvasElement.addEventListener('click', this.handleClick.bind(this))
    }

    init () {
        Object.keys(this.shapeConfigs).forEach(shapeType => {
            // this will cache variables like circle radius, square width, etc.
            this.shapeConfigs[shapeType] = {}
        })

        const { widthOfElement, heightOfElement } = this.getWidthHeightOfElement(this.e)

        this.layoutUnitSize = this.getSizeOfLayoutUnit({
            widthOfElement,
            heightOfElement
        })

        const { width, height } = this.getWidthHeightOfCanvas({
            widthOfElement,
            heightOfElement,
            layoutUnitSize: this.layoutUnitSize
        })

        this.setOnCanvas({ width, height })

        // start fresh
        this.c.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height)
        
        this.setFontSize()
        this.drawShapes()
        this.config.gridActive && this.drawGrid()
    }

    resetCanvasStyles () {
        this.c.fillStyle = 'black'
    }

    setShapes (newShapes) {
        this.shapes = newShapes
        this.init()
    }

    handleClick (e) {
        const elemLeft = this.canvasElement.offsetLeft
        const elemTop = this.canvasElement.offsetTop
        
        const xPos = e.pageX - elemLeft
        const yPos = e.pageY - elemTop

        const x = Math.ceil(xPos / this.layoutUnitSize)
        const y = Math.ceil(yPos / this.layoutUnitSize)

        if (this.activeElement) { // reset a previously active element
            const { x, y } = this.activeElement
            this.shapes[x][y].active = false
            this.drawShape(x, y)
            this.activeElement = null
        }

        if (this.shapes[x] && this.shapes[x][y]) {
            this.activeElement = { x, y }
            this.shapes[x][y].active = true
            this.drawShape(x, y)
        }
    }

    setFontSize () {
        this.c.font = `${this.config.fontSize}px sans-serif`
    }

    drawShapes () {
        Object.keys(this.shapes).forEach(x => Object.keys(this.shapes[x]).forEach(y => this.drawShape(x, y)))
    }

    getWidthHeightOfElement (e) {
        const widthOfElement = e.clientWidth
        const heightOfElement = e.clientHeight
        return { widthOfElement, heightOfElement }
    }

    // Calculates the width of each square on the grid
    getSizeOfLayoutUnit ({ widthOfElement, heightOfElement }) {
        let layoutUnitSize = Math.floor(widthOfElement / this.config.xValues)
        const spaceTakenVertically = layoutUnitSize * this.config.yValues
        if (spaceTakenVertically > heightOfElement) {
            layoutUnitSize = Math.floor(heightOfElement / this.config.yValues)
        }
        return layoutUnitSize
    }

    getWidthHeightOfCanvas ({ widthOfElement, heightOfElement, layoutUnitSize }) {
        return {
            width: layoutUnitSize * this.config.xValues,
            height: layoutUnitSize * this.config.yValues
        }
    }

    setOnCanvas (properties) {
        Object.keys(properties).forEach(property => this.c.canvas[property] = properties[property])
    }

    // only executes once after the grid is initialized, gets cached in drawShape
    getCircleRadius (shape) {
        const diameter = 
            (shapes[shape.type].x * this.layoutUnitSize) - (this.layoutUnitSize * this.config.paddingRatio)
        return Math.floor(diameter / 2)
    }

    drawShape (x, y) {
        const shape = this.shapes[x][y]
        this.c.lineWidth = this.config.strokeWidth

        if (!this.shapeConfigs[shape.type]) {
            this.shapeConfigs[shape.type] = {}
        }

        const position = {
            x: ((x - 1) * this.layoutUnitSize) + (0.5 * this.layoutUnitSize),
            y: ((y - 1) * this.layoutUnitSize) + (0.5 * this.layoutUnitSize)
        }

        switch (shape.type) {
            case 'circle':
                this.drawCircle(position, shape)
                break
        }
    }

    drawText (text, position, maxWidth) {
        const width = this.c.measureText(text).width
        const height = this.config.fontSize
        this.c.fillText(text, position.x - (width / 2), position.y + (height / 4), maxWidth)
    }

    addShape (shape) {
        this.shapes[shape.x] = this.shapes[shape.x] || {}
        this.shapes[shape.x][shape.y] = shape
        this.drawShape(shape)
    }

    drawCircle (position, shape) {
        let radius
        if (this.shapeConfigs[shape.type].radius != null) {
            radius = this.shapeConfigs[shape.type].radius
        } else {
            this.shapeConfigs[shape.type].radius = radius = this.getCircleRadius(shape)
        }
        this.c.beginPath()
        // c.arc(xCenter, yCenter, radius, begin arch, end arch)
        this.c.arc(position.x, position.y, radius, 0, 2 * Math.PI)
        this.c.stroke()
        if (shape.active) {
            this.c.fillStyle = '#01579B'
            this.c.fill()
            this.c.fillStyle = 'white'
        } else {
            this.c.fillStyle = 'white'
            this.c.fill()
            this.resetCanvasStyles()
        }
        shape.name && this.drawText(shape.name, position, radius * 2)
        if (shape.active) {
            this.resetCanvasStyles()
        }
    }

    drawGrid () {
        const halfOfGridwidth = this.config.gridWidth / 2

        const verticalWidth = this.config.gridWidth
        const verticalHeight =  this.canvasElement.height
        for (let x = 1; x <= this.config.xValues; x++) {
            const width = verticalWidth
            const height = verticalHeight
            let startX
            // if first vertical line
            if (x === 1 ) {
                startX = 0
            // if last verical line
            } else if (x === this.config.xValues) {
                startX = (x * this.layoutUnitSize) - width
                this.c.fillRect(startX, 0, width, height)
                startX = ((x - 1) * this.layoutUnitSize) - halfOfGridwidth
            // any other vertical line
            } else {
                startX = ((x - 1) * this.layoutUnitSize) - halfOfGridwidth
            }
            this.c.fillRect(startX, 0, width, height)
        }

        const horizontalWidth = this.canvasElement.width
        const horizontalHeight = this.config.gridWidth
        for (let y = 1; y <= this.config.yValues; y++) {
            const width = horizontalWidth
            const height = horizontalHeight
            let startY
            // if first horizontal line
            if (y === 1 ) {
                startY = 0
            // if last horizontal line
            } else if (y === this.config.yValues) {
                startY = (y * this.layoutUnitSize) - height
                this.c.fillRect(0, startY, width, height)
                startY = ((y - 1) * this.layoutUnitSize) - halfOfGridwidth
            // any other horizontal line
            } else {
                startY = ((y - 1) * this.layoutUnitSize) - halfOfGridwidth
            }
            this.c.fillRect(0, startY, width, height)
        }
        this.config.gridActive = true
    }

    addColumn (end) {
        if (end) {
            this.config.xValues++
            this.init()
        } else {
            this.config.xValues++
            const newShapes = {}
            Object.keys(this.shapes).forEach(x => {
                Object.keys(this.shapes[x]).forEach(y => {
                    this.shapes[x][y].x++
                })
                newShapes[Number(x) + 1] = this.shapes[x]
            })
            this.shapes = newShapes
            this.init()
        }
    }

    addRow (end) {
        if (end) {
            this.config.yValues++
            this.init()
        } else {
            this.config.yValues++
            const newShapes = {}
            Object.keys(this.shapes).forEach(x => {
                newShapes[x] = {}
                Object.keys(this.shapes[x]).forEach(y => {
                    newShapes[x][Number(y) + 1] = Object.assign({}, this.shapes[x][y], {
                        y: this.shapes[x][y].y + 1
                    })
                })
            })
            this.shapes = newShapes
            this.init()
        }
    }
}

export default GridLayout