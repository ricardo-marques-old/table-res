import GridLayout from 'lib/GridLayout'

export default function (element) {
    const c = new GridLayout({
        e: element
    })
    c.addShape({
        id: 250,
        name: '250',
        type: 'circle',
        sits: 4,
        taken: false,
        x: 7,
        y: 1
    })
    c.drawGrid()
}