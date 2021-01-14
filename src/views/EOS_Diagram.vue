<template>
    <div>
        <div>
            <md-card class="md-size-50 md-small-size-100 md-elevation-0">
                <md-card-content class="md-layout">
                    <md-label>Choose a function</md-label>
                    <md-field class="md-layout-item md-small-size-50">
                        <md-select v-model="diagram_equation">
                            <md-option value='ig'>Ideal gas</md-option>
                            <md-option value="vdw">van der Waals</md-option>
                        </md-select>
                    </md-field>
                    <div class="md-helper-text"><b>y Axis</b>: p(MPa); <b>x Axis</b>: V(L)</div>
                    <!--                <md-field class="md-small-size-50">-->
                    <!--                    <label>Temperature</label>-->
                    <!--                    <md-input v-model="diagram_status.T"></md-input>-->
                    <!--                    <span class="md-helper-text">For better effect, set a temperature near Tc</span>-->
                    <!--                </md-field>-->
                </md-card-content>
                <div style="padding: 15px">
                    <md-label>Temperature(K)</md-label>
                    <VueSlider :min="critical.Tc-20" :max="critical.Tc- -40" v-model="diagram_status.T" @change="draw"/>
                </div>
                <md-card-actions>
                    <md-button class="md-primary" @click="draw()">Plot!
                    </md-button>
                </md-card-actions>
            </md-card>
        </div>
        <div>
            <md-card class="md-size-50 md-small-size-100 md-elevation-0"
                     v-if="diagram_equation !== 'ig'">
                <md-card-content class="md-layout" style="padding: 0">
                    <span class="md-helper-text">For better effect, set a temperature near Tc</span>
                    <md-field class="md-small-size-50">
                        <label>Critical Temperature(K)</label>
                        <md-input v-model="critical.Tc"/>
                    </md-field>
                    <md-field class="md-small-size-50">
                        <label>Critical Pressure(bar)</label>
                        <md-input v-model="critical.pc"/>
                    </md-field>
                    <md-field class="md-small-size-50">
                        <label>Critical Volume(L)</label>
                        <md-input v-model="critical.Vc"/>
                    </md-field>
                    <!--                    <md-field v-if="diagram_equation === 'srk' || diagram_equation === 'pr' ">-->
                    <!--                        <label>Acentric factor</label>-->
                    <!--                        <md-input v-model="omega"></md-input>-->
                    <!--                    </md-field>-->
                </md-card-content>
            </md-card>
        </div>
        <div id="svg-container">
        </div>
    </div>
</template>

<script lang="ts">
  import * as d3 from 'd3'
  import d3Utils from '../lib/D3Utils'
  import {R, UnitScale} from '@/lib/Constants'
  import Vue from 'vue'
  import EOS from '../lib/EOS'
  import Component from 'vue-class-component'
  import VueSlider from 'vue-slider-component'
  import 'vue-slider-component/theme/antd.css'


  @Component({name: "PhaseDiagram", components: {VueSlider}})
  export default class PhaseDiagram extends Vue {
    length = 500;
    diagram_equation = 'vdw';
    diagram_status = {T: 370};
    critical = {Tc: '380', pc: '4', Vc: '1'};
    omega: '0';

    mounted() {
      this.draw()
    }

    calculateVb() {
      let pc = Number.parseFloat(this.critical.pc) * UnitScale.bar;
      let Vc = Number.parseFloat(this.critical.Vc) * UnitScale.dm3;
      let Tc = Number.parseFloat(this.critical.Tc);
      let Zc = pc * Vc / R / Tc;
      let Vhi: number, Vlo: number;
      let Vrange: Array<number>;
      switch (this.diagram_equation) {
        case 'ig':
          Vlo = 100 * UnitScale.cm3;
          Vhi = 900 * UnitScale.cm3;
          Vrange = d3.range(Vlo, Vhi, (Vhi - Vlo) / this.length);
          break;
        case 'vdw' :
          Vhi = 8 * Vc;
          Vlo = 1 / 8 / Zc * 2 * Vc;
          Vrange = d3.range(Vlo, Vhi, (Vhi - Vlo) / this.length);
          break;
        // case 'rk' :
        //     Vlo = 0.00864 * Vc / Zc * 1.5;
        //     Vrange = d3.range(Vlo, Vhi, (Vhi - Vlo) / this.length)
        //     break;
        // case 'srk':
        //     Vlo = 0.07780 * Vc / Zc * 1.5
        //     Vrange = d3.range(Vlo, Vhi, (Vhi - Vlo) / this.length)
        //     break;
      }
      return Vrange;
    };

    calculatep(V: number) {
      let critical = {
        pc: Number.parseFloat(this.critical.pc) * UnitScale.bar,
        Tc: Number.parseFloat(this.critical.Tc)
      };
      let T = this.diagram_status.T;
      let p: number;
      switch (this.diagram_equation) {
        case 'ig':
          p = EOS.Ideal_p({T, V});
          break;
        case 'vdw':
          p = EOS.vdW_p({T, V}, critical).p;
          break;
      }
      return p;
    }

    draw() {
      d3.select('#svg-container').html('');
      let {margin, svgSize: {width, height}} = d3Utils.defaultOption;
      height *= 1.3;
      const svg = d3Utils.createSvgElement("#svg-container", width, height + margin);
      //以下生成数据
      let Vrange = this.calculateVb();
      //const T = this.T //degC
      const prange = Vrange.map(V => this.calculatep(V) / UnitScale.MPa);
      Vrange = Vrange.map(V => V / UnitScale.dm3);

      //绘制横轴
      const xScale = d3.scaleLinear().domain([d3.min(Vrange)!!, d3.max(Vrange)!!]).range([margin, width - margin]);
      const xAxis = d3.axisBottom(xScale);
      svg.append('g').attr('class', 'x-axis').attr('transform', `translate(0,${height})`)
        .call(xAxis);
      //绘制纵轴
      const yScale = d3.scaleLinear().domain([d3.max(prange)!!, d3.min(prange)!!]).range([0, height]);
      const yAxis = d3.axisLeft(yScale);
      svg.append("g").attr("class", 'y-axis')
        .attr('transform', `translate(${margin},0)`)
        .call(yAxis);
      //绘制图线

      let data = Vrange.map((V, key) => {
        return {V, p: prange[key]}
      });
      let line = d3.line<{ V: number, p: number }>()
        .x(d => xScale(d.V)).y(d => yScale(d.p));
      d3Utils.plotLine(line, svg, data);
    }

  };


</script>

<style lang="scss" scoped>
    .md-app {
        min-height: 350px;
        border: 1px solid rgba(#000, .12);
    }

    // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }

    .md-card {
        width: 320px;
        margin: 10px;
        display: inline-block;
        vertical-align: top;
    }
</style>
