<template>
  <div>
    <p><strong>What you need to know in order to learn this chapter:</strong></p>
    <md-tabs @md-changed="active=$event">
      <md-tab id="first" md-label="Postulate">
        <div class="md-title">Thermodynamics Postulate I</div>
        <p>For closed simple systems with given internal restrains, there exist stable equilibrium states (SES) which
          can be characterized completely by two independently variable properties in addition to the masses of the
          particular chemical species initially charged.
          <br>
          <Math formula="\underline{Y}=f_{Y}(X_1,X_2,N_1,N_2,\cdots,N_n)"/>
        </p>
      </md-tab>

      <md-tab id="second" md-label="Compressibility Factor">
        <p>A useful auxiliary thermodynamic property is defined by the equation:<br>
          <Math formula="Z=\frac{pV}{RT}"/>

          This dimensionless ratio is called the compressibility factor.
        </p>

      </md-tab>

      <md-tab id="third" md-label="Outline">
        <img src="../../public/img/OutlineOfEOS.jpg" alt="OutlineOfEOS"/>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
  import Math from "@/components/Math";

  export default {
    components: {Math},
    name: "IntroEOS",
    data: () => ({
      active: null
    })
  }
</script>

<style lang="scss" scoped>
  .md-tabs {
    font-size: 15px;
    font-family: sans-serif;
    text-align: justify;
  }

</style>
