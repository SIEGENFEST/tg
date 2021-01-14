<template>
    <div>
        <!--顶端的总输入（计算目标、类型等）-->
        <md-card class="md-layout-item md-size-50 md-small-size-100 md-elevation-0">
            <md-card-content class="md-layout" style="padding: 0">
                <md-field class="md-layout-item md-small-size-50">
                    <label>Calculate Target</label>
                    <md-select v-model="calculateTarget">
                        <md-option v-for="(word,notation) in notation_word" :value="notation">{{word}}</md-option>
                    </md-select>
                </md-field>
                <NumberStepper title="Precision" :value.sync="precision" :min="1" :max="10"
                               class="md-layout-item md-small-size-50"/>
                <md-field class="md-layout-item">
                    <!--计算方程类型-->
                    <label>Equation</label>
                    <md-select v-if="calculateTarget === 'p'||calculateTarget === 'V'" v-model="equationType">
                        <md-option v-for="(equ,notation) in equ_pV" :value="notation">{{equ}}</md-option>
                    </md-select>
                    <md-select v-else-if="calculateTarget === 'T'" v-model="equationType">
                        <md-option v-for="(equ,notation) in equ_T" :value="notation">{{equ}}</md-option>
                    </md-select>
                    <md-select v-else-if="calculateTarget === 'F'" v-model="equationType">
                        <md-option v-for="(equ,notation) in equ_F" :value="notation">{{equ}}</md-option>
                    </md-select>
                    <md-select v-else v-model="equationType">
                        <md-option v-for="(equ,notation) in equ_r" :value="notation">{{equ}}</md-option>
                    </md-select>
                </md-field>
            </md-card-content>
        </md-card>
        <!--计算-->
        <div>
            <!--输入计算参数-->
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                    <div class="md-title">{{notation_word[calculateTarget]}} calculator</div>
                </md-card-header>
                <md-card-content>
                    <!--根据计算目标显示输入参数-->
                    <StatusInputPressure v-if="calculateTarget !== 'p'" class="md-layout md-gutter"
                                         v-model="parameters.p"/>
                    <StatusInputVolume v-if="calculateTarget === 'p' || calculateTarget === 'T'"
                                       class="md-layout md-gutter" v-model="parameters.V"/>
                    <StatusInputTemperature v-if="calculateTarget !== 'T'" class="md-layout md-gutter"
                                            v-model="parameters.T"/>
                    <!--检查输入错误-->
                    <div v-if="result[calculateTarget] !== undefined">
                        <div
                                v-if="calculateTarget !== 'r' && (result[calculateTarget] <=  0 || Number.isNaN(result[calculateTarget]))"
                                class="md-error">
                            <md-icon>warning</md-icon>
                            Please recheck your input.
                        </div>
                        <!--使用AnswerShow组件显示答案，包括自动适应的单位-->
                        <div v-else>
                            <AnswerShowPressure v-if="calculateTarget==='p'" :result="result[calculateTarget]"
                                                :precision="precision"/>
                            <AnswerShowVolume v-if="calculateTarget==='V'" :result="result[calculateTarget]"
                                              :precision="precision"/>
                            <AnswerShow v-if="calculateTarget==='T'" :result="result[calculateTarget]"
                                        :precision="precision"
                                        title="Temperature" :units="['']" :init_idx="0" suffix="K" prefix-formula="T="/>
                            <AnswerShow v-if="calculateTarget==='phi'" :result="result[calculateTarget]"
                                        :precision="precision"
                                        title="Fugacity Coefficient" :units="['']" :init_idx="0"
                                        prefix-formula="\phi="/>
                            <span v-if="calculateTarget==='r'">
                                <AnswerShowEnthalpy :result="result.r.HR" :precision="precision"
                                                    title="Residual Enthalpy"
                                                    prefix-formula="H_\mathrm{R}="/>
                                <AnswerShowEntropy :result="result.r.SR" :precision="precision" title="Residual Entropy"
                                                   prefix-formula="S_\mathrm{R}="/>
                            </span>
                        </div>
                    </div>
                </md-card-content>
                <!--根据当前的计算目标调用相应的计算函数-->
                <md-card-actions>
                    <md-button class="md-primary" @click="calculate()">Calculate!
                    </md-button>
                </md-card-actions>
            </md-card>
            <!--输入额外参数-->
            <div v-if="equationType && equationType !== 'ig'">
                <md-card class="md-layout-item md-size-50 md-small-size-100">
                    <md-card-header>
                        <div class="md-title">Substance properties</div>
                    </md-card-header>

                    <md-card-content>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field class="md-layout-item">
                                    <label>Substance</label>
                                    <md-select v-model="substance">
                                        <md-option v-for="(id,name) in pure_properties.idx" :value="id">{{name}}
                                        </md-option>
                                    </md-select>
                                </md-field>
                            </div>
                        </div>
                        <StatusInputPressure class="md-layout md-gutter"
                                             prefix-formula="p_c=" title="Critical Pressure"
                                             :__value.sync="critical.pc"/>
                        <StatusInputTemperature class="md-layout md-gutter"
                                                prefix-formula="T_c=" title="Critical Temperature"
                                                :__value.sync="critical.Tc"/>

                        <div class="md-layout md-gutter" v-if="equationType ==='srk' || equationType === 'pr'">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Acentric factor</label>
                                    <span class="md-prefix"><MathJ :inline="true">\omega=</MathJ></span>
                                    <md-input v-model.number="omega" type="text"/>
                                </md-field>
                            </div>
                        </div>
                        <div class="md-layout md-gutter" v-if="calculateTarget === 'r'">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Initial value of Z</label>
                                    <span class="md-prefix"><MathJ :inline="true">Z_0=</MathJ></span>
                                    <md-input v-model.number="parameters.Z0" type="text"/>
                                </md-field>
                            </div>
                        </div>
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import MathJ from "@/components/Math.vue"
  import EOS from "@/lib/EOS"
  import Fugacity from "@/lib/Fugacity";
  import Properties from "@/lib/Properties";
  import PureData from "@/json/data_pure.json";
  import {Vue, Component, Watch} from "vue-property-decorator";
  import StatusInputPressure from "@/components/Calculator/Presets/StatusInputPressure.vue";
  import StatusInputVolume from "@/components/Calculator/Presets/StatusInputVolume.vue";
  import StatusInputTemperature from "@/components/Calculator/Presets/StatusInputTemperature.vue";
  import AnswerShow from "@/components/Calculator/AnswerShow.vue";
  import AnswerShowPressure from "@/components/Calculator/Presets/AnswerShowPressure.vue";
  import AnswerShowVolume from "@/components/Calculator/Presets/AnswerShowVolume.vue";
  import AnswerShowEnthalpy from "@/components/Calculator/Presets/AnswerShowEnthalpy.vue";
  import AnswerShowEntropy from "@/components/Calculator/Presets/AnswerShowEntropy.vue";
  import NumberStepper from "@/components/Calculator/NumberStepper.vue";
  import {UnitScale} from "@/lib/Constants";

  declare type CalculateTargetEnum = 'p' | 'V' | 'T' | 'phi' | 'r'

  @Component({
    name: 'EOS_Calculator',
    components: {
      NumberStepper,
      StatusInputPressure,
      StatusInputVolume,
      StatusInputTemperature,
      AnswerShow,
      AnswerShowPressure,
      AnswerShowVolume,
      AnswerShowEnthalpy,
      AnswerShowEntropy,
      MathJ
    }
  })
  export default class EOSCalculator extends Vue {
    calculateTarget?: CalculateTargetEnum = 'p';
    equationType?: string = 'ig';
    precision = 5;
    parameters = {p: 0, V: 0, T: 0, Z0: 0};
    critical = {pc: 0, Tc: 0};
    omega = 0;
    pure_properties: any = undefined;
    substance = -1;
    notation_word = {
      p: 'Pressure',
      V: 'Volume',
      T: 'Temperature',
      phi: 'Fugacity Coefficient',
      r: 'Residue Properties'
    };
    equ_pV = EOS.equ_pV;
    equ_T = EOS.equ_T;
    equ_F = Fugacity.equ;
    equ_r = Properties.equ;
    result: { p?: number, V?: number, T?: number, phi?: number, gamma?: number, r?: { HR: number, SR: number } } = {
      p: undefined, V: undefined, T: undefined, phi: undefined, gamma: undefined, r: undefined
    };

    beforeMount() {
      this.pure_properties = PureData;
    }

    calculate() {
      ({
        p: () => {
          let state = {V: this.parameters.V, T: this.parameters.T};
          this.result.p = EOS.p(this.equationType, state, this.critical, this.omega);
        },
        V: () => {
          let state = {p: this.parameters.p, T: this.parameters.T};
          this.result.V = EOS.V(this.equationType, state, this.critical, this.omega);
        },
        T: () => {
          let state = {p: this.parameters.p, V: this.parameters.V};
          this.result.T = EOS.T(this.equationType, state, this.critical);
        },
        phi: () => {
          let state = {p: this.parameters.p, T: this.parameters.T};
          this.result.phi = Fugacity.phi(this.equationType, state, this.critical, this.omega);
        },
        r: () => {
          let state = {p: this.parameters.p, T: this.parameters.T};
          this.result.r = Properties.r(this.equationType, state, this.critical, this.parameters.Z0);
        }
      })[this.calculateTarget].call(this)
    }

    @Watch("calculateTarget")
    calculateTarget_change() {
      switch (this.calculateTarget) {
        case 'phi':
          this.equationType = 'pr';
          break;
        case "r":
          this.equationType = 'rk';
          break;
        default:
          this.equationType = 'ig';
      }
    }

    @Watch("substance")
    substance_change() {
      if (this.substance !== -1) {
        let data = this.pure_properties.substances[this.substance];
        this.critical.pc = Math.round(Number.parseFloat(data.pc) * UnitScale.MPa);
        this.critical.Tc = data.Tc;
        this.omega = data.omega;
      }
    }

    // @Watch("critical", {deep: true})
    // @Watch("omega")
    // parameter_change() {
    //   this.substance = -1;
    // }
  }

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
