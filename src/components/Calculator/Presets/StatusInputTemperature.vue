<script lang="ts">

  import Component from "vue-class-component";
  import {Prop, Vue} from "vue-property-decorator";
  import StatusInput from "@/components/Calculator/StatusInput.vue";


  @Component({name: "StatusInputTemperature", mixins: [StatusInput]})
  export default class StatusInputTemperature extends Vue {
    @Prop({default: 'Temperature', type: String}) title?: string;
    @Prop({
      default: () => ({
        'K': 1,
        '℃': (v: number, rev = false) => v + 2 * (rev as any - .5) * 273.15,
        '℉': (v: number, rev = false) => rev ? ((v - 273.15) * (5 / 9) + 32) : ((9 / 5) * (v - 32) + 273.15)
      })
    }) units?: { [key: string]: number };
    @Prop({default: "K", type: String}) defaultUnit ?: string;
    @Prop({default: 'T=', type: String}) prefixFormula?: string

  }
</script>
