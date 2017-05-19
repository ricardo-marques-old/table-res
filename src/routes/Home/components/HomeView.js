import React from 'react'
import canvasHandler from './canvasHandler'
import './HomeView.scss'
import ShapePicker from 'components/ShapePicker'

class HomeView extends React.Component {
  render () {
    return (
      <div>
        <ShapePicker />
      </div>
    );
  }
}

export default HomeView
