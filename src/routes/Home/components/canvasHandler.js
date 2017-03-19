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
        x: 3,
        y: 5
    })
    c.addShape({
        id: 251,
        name: '251',
        type: 'circle',
        sits: 4,
        x: 5,
        y: 9
    })
    c.addShape({
        id: 1,
        name: '1',
        type: 'circle',
        sits: 4,
        x: 8,
        y: 10
    })
    c.drawGrid()
    setTimeout(() => {
        c.addRow()
    }, 1000)
}
