<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical md-linear>
            <md-step id="first" md-label="Intro" md-description="From ideal gas to real gas"
                     :md-done.sync="first">
                <p><strong>Introduction of EOS in Virial type</strong></p>
                <p>
                    The EOS of ideal gas :
                    <Math>pV=RT</Math>
                    For real gas, EOS can be represented analytically as a function of p:<br>
                    <math>pV=RT(1+B'p+C'p^2+D'p^3...)</math>
                    It can also be represented analytically as a function of V:
                    <math>pV=RT(1+\frac{B}{V}+\frac{C}{V^2}+\frac{D}{V^3}...)</math>
                    where B,C,B',C' etc., are constants for a given temperature and a given chemical species.
                </p>
                <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
            </md-step>

            <md-step id="second" md-label="About parameters" :md-error="secondStepError"
                     :md-done.sync="second">
                <p>
                    For a given gas the virial coefficients are functions of temperature only.<br>
                    <math>B'=\frac{B}{RT}</math>
                    <math>C'=\frac{C-B^2}{(RT)^2}</math>
                    <math>D'=\frac{D-3BC+2B^3}{(RT)^3}</math>
                </p>
                <p class="italic"><strong>Question:</strong>
                    <br>The virial coefficients is related with pressure p?
                </p>
                <md-button class="md-raised md-primary" @click="setError()">Yes</md-button>
                <md-button class="md-raised md-primary" @click="setDone('second', 'third')">No</md-button>
            </md-step>

            <md-step id="third" md-label="A useful simplified equation —— Berthelot's equation"
                     :md-done.sync="third" md-description="Widely used in engineering">
                <p>

                    In engineering, the most common form is <strong>truncated Virial EOS</strong>, which is proposed by
                    Berthelot in 1907:
                    <math>Z=\frac{pV}{RT}=1+\frac{Bp}{RT}</math>
                    The relationship of second virial coefficient B, temperature T, pressure p:
                    <math>B=\frac{9}{128}\frac{RT_{c}}{p_{c}}\left(1-6\frac{T_{c}^2}{T^2}\right)</math>

                    And the corresponding form:
                    <math>Z=1+\frac{9}{128}\left(1-\frac{6}{T_{r}^2 }\right)\frac{P_{r}}{T_{r}}</math>

                    As a rule of thumb, Berthelot's equation only works for <strong>nonpolar or weakly polar compounds
                    with simple structures for gases and vapors at low
                    to moderate pressures</strong>.

                </p>
            </md-step>
        </md-steppers>

        <audio preload ref="wrong">
            <source src="../../public/audio/30fen.mp3" type="audio/mp3">
            您的浏览器不支持 audio 元素。
        </audio>
        <audio preload ref="right">
            <source src="../../public/audio/bang.mp3" type="audio/mp3">
            您的浏览器不支持 audio 元素。
        </audio>
    </div>
</template>

<script>
  import Math from "@/components/Math";

  export default {
    components: {Math},
    name: 'VirialEOS',
    data: () => ({
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null
    }),
    methods: {
      setDone(id, index) {
        if (id === 'second')
          this.$refs.right.play();
        this[id] = true;
        this.secondStepError = null;
        if (index) {
          this.active = index
        }
      },
      setError() {
        this.$refs.wrong.play();
        this.secondStepError = 'Think again,friends?'
      }
    }
  }
</script>

<style lang="scss" scoped>
    .md-steppers {
        font-size: 15px;
        font-family: sans-serif;
        text-align: justify;
    }
</style>
