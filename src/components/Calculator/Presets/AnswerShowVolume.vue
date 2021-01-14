<script lang="ts">
  import {Component, Prop} from "vue-property-decorator";
  import AnswerShow from "@/components/Calculator/AnswerShow.vue";

  @Component({name: 'AnswerShowVolume', mixins: [AnswerShow]})
  export default class AnswerShowVolume extends AnswerShow {
    @Prop({default: 0, type: Number}) init_idx!: number;
    @Prop({default: 'Volume', type: String}) title!: string;
    @Prop({default: () => (['m^3/mol', 'dm^3/mol', 'cm^3/mol', 'mm^3/mol'])}) units!: Array<string>;
    @Prop({default: 'V=', type: String}) prefixFormula!: string
  }
</script>
