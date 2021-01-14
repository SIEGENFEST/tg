<template>
  <div>
    <md-empty-state
      md-icon="../../public/img/svg/favicon.svg"
      md-label="Home page"
      md-description="Click the Maxwell monster to open the menu!"
      ref="elem"
    >
    </md-empty-state>
  </div>
</template>

<script lang="ts">

  import {Component, Vue as VueComponent} from "vue-property-decorator";

  @Component({})
  export default class Home extends VueComponent {
    mounted() {
      ((this.$refs['elem'] as VueComponent).$children[0].$el as HTMLElement).onclick = () => {
        this.$root.$emit('pop-menu')
      }
    }
  }
</script>

<style scoped>

</style>
