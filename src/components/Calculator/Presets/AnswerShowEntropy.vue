<script lang="ts">
  import {Component, Prop} from "vue-property-decorator";
  import AnswerShow from "@/components/Calculator/AnswerShow.vue";

  @Component({name: 'AnswerShowEntropy', mixins: [AnswerShow]})
  export default class AnswerShowEntropy extends AnswerShow {
    @Prop({default: 1, type: Number}) init_idx!: number;
    @Prop({default: 'Entropy', type: String}) title!: string;
    @Prop({default: () => (['kJ/(mol·K)', 'J/(mol·K)', 'mJ/(mol·K)'])}) units!: Array<string>;
    @Prop({default: 'S=', type: String}) prefixFormula!: string
  }
</script>
