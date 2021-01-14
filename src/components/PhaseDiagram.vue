<template>
  <div>
    <div id="svg-container">

    </div>
    <div>
      <VueSlider :min="0" :max="70" v-model="T" @change="draw"/>
    </div>
  </div>
</template>

<script lang="ts">
  import * as d3 from 'd3'
  import d3Utils from '../lib/D3Utils'
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Equations from '../lib/Equations'
  import {AntoineParameters} from '@/lib/Constants'
  import VueSlider from 'vue-slider-component'
  import 'vue-slider-component/theme/antd.css'

  @Component({name: "PhaseDiagram", components: {VueSlider}})
  export default class PhaseDiagram extends Vue {
    T = 25;

    mounted() {
      this.draw()
    }

    draw() {
      d3.select('#svg-container').html('');
      let {margin, svgSize: {width, height}} = d3Utils.defaultOption;
      height *= 1.3;
      const svg = d3Utils.createSvgElement("#svg-container", width, height + margin);
      const xScale = d3.scaleLinear().domain([0, 1]).range([margin, width - margin]);
      const xAxis = d3.axisBottom(xScale);
      svg.append('g').attr('class', 'x-axis').attr('transform', `translate(0,${height})`)
          .call(xAxis);
      //完成横轴绘制
      //以下生成数据
      let length = 100;
      const zBRange = d3.range(0, 1, 1 / length);
      const T = this.T; //degC
      const {water, ethanol} = AntoineParameters;
      let p_sat_A = Equations.AntoineEquation(T, water[0], water[1], water[2]);
      let p_sat_B = Equations.AntoineEquation(T, ethanol[0], ethanol[1], ethanol[2]);
      const pA = zBRange.map(xb => (1 - xb) * p_sat_A);
      const pB = zBRange.map(xb => xb * p_sat_B);
      const p = zBRange.map((_, key) => pA[key] + pB[key]);
      const yb = zBRange.map((z, key) => p_sat_B * z / p[key]);
      //绘制纵轴
      const yScale = d3.scaleLinear().domain([d3.max(p)!!, d3.min(p)!!]).range([0, height]);
      const yAxis = d3.axisLeft(yScale);
      svg.append("g").attr("class", 'y-axis')
          .attr('transform', `translate(${margin},0)`)
          .call(yAxis);
      //绘制液相线

      let data = zBRange.map((z, key) => {
        return {z, p: p[key]}
      });
      let line = d3.line<{ z: number, p: number }>()
          .x(d => xScale(d.z)).y(d => yScale(d.p));
      d3Utils.plotLine(line, svg, data);
      //绘制气相线
      data = zBRange.map((z, key) => {
        return {z: yb[key], p: p[key]}
      });
      line = d3.line<{ z: number, p: number }>()
          .x(d => xScale(d.z)).y(d => yScale(d.p));
      d3Utils.plotLine(line, svg, data, {strokeColor: 'blue'})
    }
  }
</script>

<style scoped>

</style>
