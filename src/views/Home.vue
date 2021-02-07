<template>
  <div>
    <img ref="elem" src="../../public/img/favicon.png" alt="" class="piclarge"><br>
    <p class="large">
      HOME PAGE
    </p>
    <p class="pa">
      Click the Maxwell monster to open the menu!
    </p>
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
