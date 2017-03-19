const gridConfig ={
    xValues: 20,
    yValues: 10,
    gridWidth: 3,
    paddingRatio: 0.2,
    strokeWidth: 3
}

const shapes = {
    circle: { x: 1, borderRadius: 0.5 }
}

class GridLayout {
    constructor ({ e }) {
        this.e = e
        this.canvasElement = document.createElement('CANVAS')

        this.e.appendChild(this.canvasElement)
        this.c = this.canvasElement.getContext('2d')

        this.init()
    }

    init () {
        this.config = gridConfig

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
        this.c.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
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
        const size = {
            x: shapes[shape.type].x * this.layoutUnitSize
        }
        return Math.floor(size.x / 2) - (this.layoutUnitSize * (this.config.paddingRatio / 2))
    }

    drawShape (shape) {
        this.c.lineWidth = this.config.strokeWidth

        if (!this[shape.type]) {
            this[shape.type] = {}
        }
        const position = {
            x: ((shape.x - 1) * this.layoutUnitSize) + (0.5 * this.layoutUnitSize),
            y: ((shape.y - 1) * this.layoutUnitSize) + (0.5 * this.layoutUnitSize)
        }

        switch (shape.type) {
            case 'circle':
                let radius
                if (this[shape.type].radius != null) {
                    radius = this[shape.type].radius
                } else {
                    this[shape.type].radius = radius = this.getCircleRadius(shape)
                }
                this.c.beginPath()
                // c.arc(xCenter, yCenter, radius, begin arch, end arch)
                this.c.arc(position.x, position.y, radius, 0, 2 * Math.PI)
                this.c.stroke()
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
    }
}

export default GridLayout