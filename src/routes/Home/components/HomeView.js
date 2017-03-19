import React from 'react'
import canvasHandler from './canvasHandler'
import './HomeView.scss'

class HomeView extends React.Component {
    componentDidMount () {
        const element = document.getElementById('canvas')
        setTimeout(() => canvasHandler(element))
    }

    render () {
        return <div id='canvas' />
    }
}

export default HomeView
