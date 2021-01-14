<script lang="ts">

  import Component from "vue-class-component";
  import {Prop, Vue} from "vue-property-decorator";
  import StatusInput from "@/components/Calculator/StatusInput.vue";


  @Component({name: "StatusInputVolume", mixins: [StatusInput]})
  export default class StatusInputVolume extends Vue {
    @Prop({default: 'Volume', type: String}) title?: string;
    @Prop({
      default: () => ({
        'm^3/mol': 1,
        'dm^3/mol': 1e-3,
        'cm^3/mol': 1e-6,
        'mm^3/mol': 1e-9,
      })
    }) units?: { [key: string]: number };
    @Prop({default: "dm^3/mol", type: String}) defaultUnit ?: string;
    @Prop({default: 'V=', type: String}) prefixFormula?: string

  }

</script>
