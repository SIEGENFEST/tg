<template>
    <div>
        <div class="md-subhead">{{title}}</div>
        <Math :inline="true" :formula="prefixFormula"/>
        <Math :inline="true"
              :formula="ResponsiveUnits.tex"/>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import MathJ from "../Math.vue";
  import {ResponsiveUnits} from '@/lib/Constants';

  @Component({
    name: "AnswerShow",
    components: {Math: MathJ}
  })
  export default class AnswerShow extends Vue {
    @Prop({default: '', type: String}) title!: string;
    @Prop({default: '', type: String}) prefixFormula!: string;
    @Prop({default: 5, type: Number}) precision!: number;
    @Prop({default: 0, type: Number}) result!: number;
    @Prop({default: () => (['P', 'T', 'G', 'M', 'k', '', 'm', 'u', 'n'])}) units!: Array<string>;
    @Prop({default: '', type: String}) suffix!: string;
    @Prop({default: 5, type: Number}) init_idx!: number;

    get ResponsiveUnits() {
      const unitList = this.units;
      let idx = this.init_idx;
      let num = this.result;
      let du = Math.floor(Math.log10(Math.abs(num)) / 3);
      du = du > idx ? idx : idx - du >= unitList.length ? idx - unitList.length + 1 : du;

      let s = (num / Math.pow(1e3, du)).toPrecision(this.precision);
      if (Math.abs(num) > Number.EPSILON) {
        let reg = /[eE]([+\-]\d+?)$/;
        if (s.search(/0\.0{2,}/) > -1)
          s = Number(s).toExponential(this.precision - 1);
        s = s.replace(reg, substring =>
          `\\times 10^{${Number(substring.match(reg)[1])}}`
        );
      }
      return {
        num: num / Math.pow(1e3, du),
        unit: unitList[idx - du],
        tex: `${s}{\\rm \\; ${unitList[idx - du]}${this.suffix}}`
      }
    }
  }
</script>

<style scoped>

</style>
