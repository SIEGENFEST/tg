<template>
    <div>
        <md-toolbar class="md-accent" v-if="toolbar">
            <h3 class="md-title">An error occurred. Please recheck your input.</h3>
            <md-button @click="toolbar=false">Close</md-button>
        </md-toolbar>
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
                    <label>Equation</label>
                    <md-select v-model="equationType">
                        <md-option v-for="(equ,notation) in equ_A" :value="notation">{{equ}}</md-option>
                    </md-select>
                </md-field>
            </md-card-content>
        </md-card>
        <!--计算-->
        <div>
            <!--输入计算参数-->
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                    <div class="md-title" v-if="calculateTarget !== 'plot'">{{notation_word[calculateTarget]}}
                        calculator
                    </div>
                    <div class="md-title" v-else>{{notation_word[calculateTarget]}}</div>
                </md-card-header>
                <md-card-content>
                    <!--根据计算目标和方程显示输入参数-->
                    <div>
                        <div class="md-layout md-gutter" v-if="calculateTarget === 'gamma'">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Molar fraction of component 1</label>
                                    <MathJ class="md-prefix" inline="true">x_1=</MathJ>
                                    <md-input v-model.number="parameters.x1" type="text"/>
                                </md-field>
                            </div>
                        </div>
                        <div v-else>
                            <div class="md-caption">Plot target</div>
                            <md-radio v-model="plot_target" value="gamma">
                                <MathJ inline="true" formula="\gamma"/>
                            </md-radio>
                            <md-radio v-model="plot_target" value="lngamma">
                                <MathJ inline="true" formula="\ln \gamma"/>
                            </md-radio>
                        </div>
                    </div>

                    <div v-if="equationType === 'sh' || equationType === 'sh_w'">
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field class="md-layout-item">
                                    <label>Substance 1</label>
                                    <md-select v-model="sh_substance_1">
                                        <md-option v-for="(id,name) in sh_properties.idx" :value="id">{{name}}
                                        </md-option>
                                    </md-select>
                                </md-field>
                            </div>
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field class="md-layout-item">
                                    <label>Substance 2</label>
                                    <md-select v-model="sh_substance_2">
                                        <md-option v-for="(id,name) in sh_properties.idx" :value="id">{{name}}
                                        </md-option>
                                    </md-select>
                                </md-field>
                            </div>
                        </div>
                    </div>
                    <div v-if="equationType === 'sh'">
                        <StatusInputTemperature class="md-layout md-gutter" v-model="parameters.sh.T"/>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Solubility parameter of component 1</label>
                                    <MathJ class="md-prefix" inline="true">\delta^*_1=</MathJ>
                                    <md-input v-model.number="parameters.sh.delta_1" type="text"/>
                                    <MathJ class="md-suffix" inline="true">\small{\mathrm{(J\cdot
                                        cm^{-3})^\frac{1}{2}}}
                                    </MathJ>
                                </md-field>
                            </div>
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Solubility parameter of component 2</label>
                                    <MathJ class="md-prefix" inline="true">\delta^*_2=</MathJ>
                                    <md-input v-model.number="parameters.sh.delta_2" type="text"/>
                                    <MathJ class="md-suffix" inline="true">\small{\mathrm{(J\cdot
                                        cm^{-3})^\frac{1}{2}}}
                                    </MathJ>
                                </md-field>
                            </div>
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Molar volume of component 1</label>
                                    <MathJ class="md-prefix" inline="true">V_1=</MathJ>
                                    <md-input v-model.number="parameters.sh.Volume_1" type="text"/>
                                    <MathJ class="md-suffix" inline="true">\small{\mathrm{cm^3/mol}}</MathJ>
                                </md-field>
                            </div>
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Molar volume of component 2</label>
                                    <MathJ class="md-prefix" inline="true">V_2=</MathJ>
                                    <md-input v-model.number="parameters.sh.Volume_2" type="text"/>
                                    <MathJ class="md-suffix" inline="true">\small{\mathrm{cm^3/mol}}</MathJ>
                                </md-field>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="equationType === 'vl' || equationType === 'm' || equationType === 'sh_w'">
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Parameter 1</label>
                                    <MathJ class="md-prefix" inline="true" formula="A_{12}="/>
                                    <md-input v-model.number="parameters.wohl.A12" type="text"/>
                                </md-field>
                            </div>
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Parameter 2</label>
                                    <MathJ class="md-prefix" inline="true" formula="A_{21}="/>
                                    <md-input v-model.number="parameters.wohl.A21" type="text"/>
                                </md-field>
                            </div>
                        </div>
                        <div v-if="equationType === 'sh_w'">
                            <div class="md-layout md-gutter">
                                <div class="md-layout-item md-small-size-100">
                                    <md-field>
                                        <label>Molar volume of component 1</label>
                                        <MathJ class="md-prefix" inline="true">V_1=</MathJ>
                                        <md-input v-model.number="parameters.sh.Volume_1" type="text"/>
                                    </md-field>
                                </div>
                            </div>
                            <div class="md-layout md-gutter">
                                <div class="md-layout-item md-small-size-100">
                                    <md-field>
                                        <label>Molar volume of component 2</label>
                                        <MathJ class="md-prefix" inline="true">V_2=</MathJ>
                                        <md-input v-model.number="parameters.sh.Volume_2" type="text"/>
                                    </md-field>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="equationType === 'sym'" class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label>Parameter</label>
                                <MathJ class="md-prefix" inline="true">A_{12}=A_{21}=</MathJ>
                                <md-input v-model.number="parameters.wohl.A12" type="text"/>
                            </md-field>
                        </div>
                    </div>
                    <div v-else-if="equationType === 'fh'">
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Number of polymer chain segments</label>
                                    <MathJ class="md-prefix" inline="true" formula="m="/>
                                    <md-input v-model.number="parameters.fh.nodes" type="text"/>
                                </md-field>
                            </div>
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Mixing parameter</label>
                                    <MathJ class="md-prefix" inline="true" formula="\chi="/>
                                    <md-input v-model.number="parameters.fh.chi" type="text"/>
                                </md-field>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Parameter 1</label>
                                    <MathJ class="md-prefix" inline="true" formula="\Lambda_{12}="/>
                                    <md-input v-model.number="parameters.wilson.Lambda_12" type="text"/>
                                </md-field>
                            </div>
                        </div>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Parameter 2</label>
                                    <MathJ class="md-prefix" inline="true" formula="\Lambda_{21}="/>
                                    <md-input v-model.number="parameters.wilson.Lambda_21" type="text"/>
                                </md-field>
                            </div>
                        </div>
                    </div>

                    <!--检查输入错误-->
                    <div v-if="calculateTarget === 'gamma' && result[calculateTarget] !== undefined ">
                        <span v-if="result.error" class="md-error">
                          <md-icon>warning</md-icon>
                          Please recheck your input.
                        </span>

                        <!--使用AnswerShow组件显示答案，包括自动适应的单位-->
                        <div v-else>
                            <span v-if="calculateTarget==='gamma'">
                            <AnswerShow :result="result[calculateTarget].gamma_1"
                                        :precision="precision"
                                        title="Activity Coefficient" :units="['']" :init_idx="0"
                                        prefix-formula="\gamma_1="/>
                            <AnswerShow :result="result[calculateTarget].gamma_2"
                                        :precision="precision"
                                        :units="['']" :init_idx="0"
                                        prefix-formula="\gamma_2="/>
                            <AnswerShow :result="result[calculateTarget].lngamma_1"
                                        :precision="precision"
                                        :units="['']"
                                        :init_idx="0"
                                        prefix-formula="\ln \gamma_1="/>
                            <AnswerShow :result="result[calculateTarget].lngamma_2"
                                        :precision="precision" :units="['']"
                                        :init_idx="0"
                                        prefix-formula="\ln \gamma_2="/>
                            </span>
                        </div>
                    </div>
                </md-card-content>
                <!--根据当前的计算目标调用相应的计算函数-->
                <md-card-actions>
                    <md-button v-if="calculateTarget === 'gamma'" class="md-primary" @click="calculate()">Calculate!
                    </md-button>
                    <md-button v-else class="md-primary" @click="draw()">PLOT!</md-button>
                </md-card-actions>
            </md-card>
        </div>
        <div v-if="calculateTarget === 'plot'" ref="svg_container" :style="svgSize"></div>
    </div>
</template>

<script lang="ts">
  import MathJ from "@/components/Math.vue"
  import Solution from "@/lib/Solution"
  import SH from "@/json/data_solubility_parameter.json";
  import {checkResult} from "@/lib/Equations";
  import {Vue, Component, Watch} from "vue-property-decorator";
  import StatusInputTemperature from "@/components/Calculator/Presets/StatusInputTemperature.vue";
  import AnswerShow from "@/components/Calculator/AnswerShow.vue";
  import NumberStepper from "@/components/Calculator/NumberStepper.vue";
  import EChartsUtils from "@/lib/EChartsUtils";

  declare type CalculateTargetEnum = 'gamma' | 'plot'

  @Component({
    name: 'Mixture_Calculator',
    components: {NumberStepper, AnswerShow, StatusInputTemperature, MathJ}
  })
  export default class MixtureCalculator extends Vue {
    calculateTarget?: CalculateTargetEnum = 'gamma';
    equationType?: string = 'sh';
    precision = 5;
    sh_properties: any = undefined;
    sh_substance_1 = -1;
    sh_substance_2 = -1;
    parameters = {
      x1: 0,
      sh: {Volume_1: 0, Volume_2: 0, delta_1: 0, delta_2: 0, T: 0},
      wohl: {A12: 0, A21: 0},
      fh: {nodes: 0, chi: 0},
      wilson: {Lambda_12: 0, Lambda_21: 0}
    };
    notation_word = {
      gamma: 'Activity Coefficient',
      plot: 'Activity Coefficient - Plot'
    };
    equ_A = Solution.equ;
    result: { gamma?: { lngamma_1: number, lngamma_2: number, gamma_1: number, gamma_2: number }, error: boolean } = {
      gamma: undefined, error: false
    };
    toolbar: boolean = false;
    plot_target: string = 'gamma';

    beforeMount() {
      this.sh_properties = SH;
    }

    get svgSize() {
      return EChartsUtils.svgSize;
    }

    calculate() {
      this.result.gamma = Solution.gamma(this.equationType, this.parameters);
      this.result.error = !(checkResult(this.result.gamma.gamma_1) && checkResult(this.result.gamma.gamma_2));
    }

    checkPlot() {
      this.parameters.x1 = 0;
      this.calculate();
      if (this.result.error) {
        this.toolbar = true;
        return false
      }
      return true;
    }

    generateData(N: number) {
      let step = 1 / N;
      let result = [];
      for (let i = 0; i <= N; i++) {
        this.parameters.x1 = i * step;
        this.calculate();
        if (this.plot_target === "gamma") {
          result.push([this.parameters.x1, this.result.gamma.gamma_1, this.result.gamma.gamma_2])
        } else {
          result.push([this.parameters.x1, this.result.gamma.lngamma_1, this.result.gamma.lngamma_2])
        }
      }
      return result;
    }

    draw() {
      if (this.checkPlot()) {
        EChartsUtils.plot(this.$refs.svg_container as any, this.plot_target, this.generateData(100));
      }
    }

    // @Watch("parameters.sh.Volume_1")
    // @Watch("parameters.sh.delta_1")
    // parameter_change_1() {
    //   this.sh_substance_1 = -1;
    // }
    //
    // @Watch("parameters.sh.Volume_2")
    // @Watch("parameters.sh.delta_2")
    // parameter_change_2() {
    //   this.sh_substance_2 = -1;
    // }

    @Watch("sh_substance_1")
    @Watch("sh_substance_2")
    substance_change() {
      let data: any = undefined;
      if (this.sh_substance_1 !== -1) {
        data = this.sh_properties.substances[this.sh_substance_1];
        this.parameters.sh.Volume_1 = data.V;
        this.parameters.sh.delta_1 = data.delta;
      }
      if (this.sh_substance_2 !== -1) {
        data = this.sh_properties.substances[this.sh_substance_2];
        this.parameters.sh.Volume_2 = data.V;
        this.parameters.sh.delta_2 = data.delta;
      }
    }
  }
  ;
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
