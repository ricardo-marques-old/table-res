import GridLayout from 'lib/GridLayout'

export default function (element) {
    const c = new GridLayout({
        e: element,
        shapes: {
            3: {
                5: {
                    id: 250,
                    name: '250',
                    type: 'circle',
                    sits: 4,
                    takenBy: {
                        name: 'Ricardo Marques',
                        timestamp: new Date(),
                        guests: 2
                    }
                }
            },
            5: {
                9: {
                    id: 251,
                    name: '251',
                    type: 'circle',
                    sits: 4
                }
            }
        },
        callbacks: {
            shapeClick: ({ shape, x, y }) => {
                console.log('shape clicked', shape)
                console.log('x', x)
                console.log('y', y)
            }
        }
    })
    c.drawGrid()
}
