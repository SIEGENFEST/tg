<template>
  <div>
    <p class="large">
      HOME PAGE
    </p>
    <p class="pa">
      Click the Maxwell monster to open the menu!
    </p>
    <object style="border:0px" data="./test.html" width="8000px" height="6000px"></object>
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
  .large{
    font-size: 25px;
    text-align: center;
  }
  .pa{
    font-size: 17px;
    text-align: center;
  }
  .piclarge{
    text-align: center;
    max-width: 450px;
  }
</style>
