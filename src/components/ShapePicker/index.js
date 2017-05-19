// @flow
import React from 'react';
import { select } from 'd3';
import { Circle } from './Shapes';

export default class ShapePicker extends React.Component {
  targetDiv: HTMLElement
  svg: HTMLElement

  componentDidMount (): void {
    this.svg = select(this.targetDiv).append('svg');

    this.init();
  }

  init = (): void => {
    const circle = new Circle();
    const circleHolder = this.svg.append('g');
    if (circleHolder != null){
      circleHolder
        .attr('style', { color: 'red', backgroundColor: 'red' })
        .call(circle);
    }
  }

  render () {
    return (
      <div ref={ref => this.targetDiv = ref} />
    )
  }
}
