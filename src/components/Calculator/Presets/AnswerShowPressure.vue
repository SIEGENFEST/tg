<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import AnswerShow from "@/components/Calculator/AnswerShow.vue";

  @Component({name: 'AnswerShowPressure', mixins: [AnswerShow]})
  export default class AnswerShowPressure extends Vue {
    @Prop({default: 5, type: Number}) init_idx!: number;
    @Prop({default: 'Pressure', type: String}) title!: string;
    @Prop({default: () => (['PPa', 'TPa', 'GPa', 'MPa', 'kPa', 'Pa', 'mPa', 'uPa', 'nPa'])}) units?: Array<string>;
    @Prop({default: 'p=', type: String}) prefixFormula!: string
  }
</script>
