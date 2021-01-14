import * as d3 from 'd3'
import {Line, ScaleLinear, Selection} from "d3";
import {BaseType} from "d3";

export default {
  defaultOption: {
    svgSize: {
      width: document.body.clientWidth - 30,
      height: document.body.clientWidth - 30
    },
    margin: 30,
    plotLine: {
      strokeWidth: 3,
      strokeColor: 'orange'
    }
  },
  createSvgElement(selector: string, width: number, height: number) {
    return d3.select(selector)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
  },
  plotLine<TDatum, GElement extends BaseType, OldDatum>(
      line: Line<TDatum>,
      targetSVG: Selection<GElement, OldDatum, HTMLElement, any>,
      data: TDatum[],
      options?: {
        transform?: { x_offset: number, y_offset: number },
        strokeWidth?: number,
        strokeColor?: string
      }) {
    targetSVG.append('g').append('path').attr('d', line(data)!!)
        .attr('fill', 'none')
        .attr('transform', `translate(${options?.transform?.x_offset || 0},${options?.transform?.y_offset || 0})`)
        .attr("stroke-width", options?.strokeWidth || this.defaultOption.plotLine.strokeWidth)
        .attr('stroke', options?.strokeColor || this.defaultOption.plotLine.strokeColor)
  }
  
}
