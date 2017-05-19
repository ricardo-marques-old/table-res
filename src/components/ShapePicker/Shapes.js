// @flow
import { arc } from 'd3';

type circleConfig = {
  innerRadius?: number,
  outerRadius?: number,
  startAngle?:  number,
  endAngle?:    number
};

const defaultCircle = {
   innerRadius: 0, outerRadius: 100, startAngle: 0, endAngle: Math.PI / 2
}

export class Circle {
  constructor (opts: circleConfig = defaultCircle) {
    return arc(opts);
  }
}
