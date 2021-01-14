<template>
  <div class="status-input">
    <div class="md-layout-item md-small-size-50">
      <md-field>
        <label>{{title}} </label>
        <span class="md-prefix" v-if="prefixFormula"><Math :inline="true" :formula="prefixFormula"/></span>
        <md-input v-model="value_prefix" type="text" step="any"/>
      </md-field>
    </div>
    <div class="md-layout-item md-small-size-50">
      <md-field class="md-layout-item md-small-size-100">
        <label>Unit</label>
        <md-select v-model="unit_idx">
          <md-option v-for="(num,name) in units" :value="name">{{name}}</md-option>
        </md-select>
      </md-field>
    </div>
  </div>
</template>

<script lang="ts">
  import {Model, Prop, Vue, Watch} from "vue-property-decorator";
  import Component, {mixins} from "vue-class-component";
  import Math from "@/components/Math.vue";

  @Component({
    name: "StatusInput",
    components: {Math}
  })
  export default class StatusInput extends Vue {
    @Prop({default: '', type: String}) title?: string;
    @Prop({default: () => ({})}) units?: { [key: string]: number | Function };
    @Prop({default: undefined, type: String}) defaultUnit?: string;
    @Prop({default: '', type: String}) prefixFormula?: string;
    value_prefix = 0; //抛去单位的数字部分
    unit_idx = '';//单位（字符串
    @Prop({default: '0'}) __value?: number | string; //用于双向绑定 v-bind:__value.sync的属性

    get value() {
      const unit = this.units?.[this.unit_idx];
      switch (typeof unit) {
        case undefined:
        case "undefined":
          return this.value_prefix;
        case "number":
          return this.value_prefix * (unit as number);
        case "function":
          return (unit as (number, boolean?) => number)(this.value_prefix)
      }
    }

    @Watch('__value')//用于双向绑定，在prop被设置时更新
    setValue(v_: number) {
      let v = v_ == undefined ? Number.parseFloat(this.__value as string) : v_;
      const unit = this.units?.[this.unit_idx];
      switch (typeof unit) {
        case undefined:
        case "undefined":
          this.value_prefix = v;
          break;
        case "number":
          this.value_prefix = v / (unit as number);
          break;
        case "function":
          this.value_prefix = (unit as (number, rev?: boolean) => number)(this.value_prefix, true)
      }
    }

    mounted() {
      this.unit_idx = this.unit_idx || this.defaultUnit || this.unit_idx
    }

    @Watch("unit_idx")
    unitChanged(newVal, oldVal) {
//在考虑要不要在变更单位的时候维持数值不变
    }

    @Watch('value_prefix')
    @Watch("unit_idx")
    change() {
      this.$emit('input', this.value);
      this.$emit('update:__value', this.value)
    }
  }


</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  .status-input {
    display: flex;
  }
</style>
