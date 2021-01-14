<script lang="ts">
  import {Component, Prop} from "vue-property-decorator";
  import AnswerShow from "@/components/Calculator/AnswerShow.vue";

  @Component({name: 'AnswerShowEnthalpy', mixins: [AnswerShow]})
  export default class AnswerShowEnthalpy extends AnswerShow {
    @Prop({default: 1, type: Number}) init_idx!: number;
    @Prop({default: 'Enthalpy', type: String}) title!: string;
    @Prop({default: () => (['kJ/mol', 'J/mol', 'mJ/mol'])}) units!: Array<string>;
    @Prop({default: 'H=', type: String}) prefixFormula!: string
  }
</script>
