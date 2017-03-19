const gridConfig ={
    xValues: 20,
    yValues: 10,
    gridWidth: 3,
    paddingRatio: 0.1
}

const shapes = {
    circle: { x: 1, y: 1, borderRadius: 0.5 }
}

class GridLayout {
    constructor ({ e }) {
        console.log('e', e)
        const canvasElement = document.createElement('CANVAS')
        e.appendChild(canvasElement)
        this.c = canvasElement.getContext('2d')
        this.config = gridConfig

        const { widthOfElement, heightOfElement } = this.getWidthHeightOfElement(e)

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

        console.log('this', this)
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

    drawShape (shape) {
        console.log('new shape', shape)
        const position = {
            x: ((shape.x - 1) * this.layoutUnitSize) + (0.5 * this.layoutUnitSize),
            y: ((shape.y - 1) * this.layoutUnitSize) + (0.5 * this.layoutUnitSize)
        }
        const size = {
            x: shapes[shape.type].x * this.layoutUnitSize,
            y: shapes[shape.type].y * this.layoutUnitSize
        }

        switch (shape.type) {
            case 'circle':
                this.c.beginPath()
                // c.arc(xCenter, yCenter, radius, begin arch, end arch)
                this.c.arc(position.x, position.y, Math.floor(size.x / 2), 0, 2 * Math.PI)
                this.c.stroke()
        }
    }
}

export default GridLayout