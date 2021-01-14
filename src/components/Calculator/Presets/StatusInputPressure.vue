<script lang="ts">

  import Component from "vue-class-component";
  import {Prop, Vue} from "vue-property-decorator";
  import StatusInput from "@/components/Calculator/StatusInput.vue";


  @Component({name: "StatusInputPressure", mixins: [StatusInput]})
  export default class StatusInputPressure extends Vue {
    @Prop({default: 'Pressure', type: String}) title?: string;
    @Prop({
      default: () => ({
        Pa: 1,
        kPa: 1e3,
        MPa: 1e6,
        atm: 101325,
        bar: 1e5,
        torr: 133.322
      })
    }) units?: { [key: string]: number };
    @Prop({default : "kPa" , type : String}) defaultUnit ? : string;
    @Prop({default: 'p=', type: String}) prefixFormula?: string
  }
</script>
