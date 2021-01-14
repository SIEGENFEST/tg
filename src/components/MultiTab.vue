<template>
  <div>
    <md-radio v-for="title in titles" v-model="radioPage" :value="title">
      {{title}}
    </md-radio>
    <div v-for="title in titles" v-if="title===radioPage">
      <slot :name="title"/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {Prop} from "vue-property-decorator";

  /**
   * @param titles 传入一个数组，分别是不同单选框的标题
   * 在标签内部放入<template v-slot:title>，title为该页面对应的标题，
   * 在template标签内部放入页面内容
   *
   * 在整个页面的template标签上加入命名空间声明：
   * <template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
   *  ...
   * </template>
   * 用法示例
   * <MultiTab :titles="['a','b']">
   *    <template v-slot:a>
   *      aaa
   *    </template>
   *    <template v-slot:b>
   *      bbb
   *    </template>
   * </MultiTab>
   *
   * */
  @Component({name: "MultiTab"})
  export default class MultiTab extends Vue {
    @Prop({default: () => []}) titles;
    radioPage = ''
  }
</script>

<style scoped>

</style>
