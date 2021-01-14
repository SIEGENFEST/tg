<template>
  <md-field>
    <label>{{title}} </label>
    <md-button class="btn-sub md-icon-button md-dense md-primary" @click="localValue--" :disabled="value-1<min">
      <md-icon>remove</md-icon>
    </md-button>
    <md-input v-model="value" type="text" step="any"/>
    <md-button class="btn-add md-icon-button md-dense md-primary" @click="localValue++" :disabled="value+1>max">
      <md-icon>add</md-icon>
    </md-button>
  </md-field>
</template>

<script lang="ts">
  import 'reflect-metadata'
  import {Component, Model, Prop, PropSync, Vue} from "vue-property-decorator";

  @Component({name: 'NumberStepper'})
  export default class NumberStepper extends Vue {
    @PropSync('value') localValue!: number;
    @Model('input') readonly value!: number;

    @Prop({default: ''}) title?: string;
    @Prop({default: 0}) min?: number;
    @Prop({default: 10}) max?: number;
  }
</script>

<style scoped>
  .btn-add {
    right: -1em;
  }

  .btn-sub {
    left: 0;
  }
</style>
