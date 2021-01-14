<template>
  <span v-if="inline" class="math-content" ref="mathJaxEl" v-html="rendered">
    <slot></slot>
  </span>
  <div v-else class="math-content" ref="mathJaxEl" v-html="rendered">
    <slot></slot>
  </div>
</template>

<script lang="ts">

  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {Prop, Watch} from "vue-property-decorator";


  /**
   * 使用方法
   *<Math :inline="false" :formula="'a^2+\\frac{1}{2}b^2=c^3'"></Math>
   * @param inline 设定公式是否显示为行内模式，默认值为false
   * @param formula 设定公式内容，注意双引号内部有单引号包裹，
   *                并且斜杠需要被转义（输入双斜杠）
   * 作为替代方案也可以在<Math></Math>内部输入公式。如果同时采用两种输入方式，
   * 以formula中给出的为优先。
   *
   * 如果需要输入百分号%的话，在formula中输入时请输入\\%，在标签内部中输入%%
   * **/

  @Component({name: "Math"})
  export default class Math extends Vue {
    @Prop({default: false}) inline?: boolean;
    @Prop({default: ''}) formula?: string;
    formula__ = '';
    rendered = '';

    static get katex(): any {
      return (window as any).katex
    }

    updated() {
      this.renderMathJax()
    }

    mounted() {
      /*this.$watch(() => this.$slots.default?.[0].text, () => {
        this.renderMathJax()
        console.log(this.$slots.default?.[0].text)
      })
      this.$watch(() => Math.katex, () => this.renderMathJax());*/
      this.updateFormula__()
    }

    @Watch('formula')
    updateFormula__() {
      if (this.formula == '') {
        let txt = this.$slots.default?.[0].text || '';
        txt = txt.replace('%%', '\\%25');
        this.formula__ = decodeURI(txt || '')
      } else {
        this.formula__ = decodeURI(this.formula || "")
      }
      this.renderMathJax()
    }

    async sleep(time: number) {
      return new Promise((resolve, reject) => setTimeout(resolve, time))
    }

    @Watch("inline")
    @Watch('formula__')
    async renderMathJax() {
      if (Math.katex) {
        this.rendered = Math.katex.renderToString((this.formula__ || ''), {
          throwOnError: true,
          displayMode: !this.inline,
        })
      } else {
        await this.sleep(500);
        await this.renderMathJax()
      }
    }
  }
</script>

<style scoped>
    span {
        font-family: "Times New Roman", serif;
    }
</style>
