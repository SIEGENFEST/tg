<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical md-linear>

            <md-step id="first" md-label="EOS of the ideal gas" md-description="the simplest EOS"
                     :md-done.sync="first">

                <p style="font-size: large"><b> 1. EOS of the ideal gas</b></p>
                <p>Boyle's Law:
                    <math formula="V\propto \frac{1}{p}"/>
                </p>
                <p>Gay-Lussac's Law:
                    <math formula="V\propto T"/>
                </p>
                <p>Charles's Law:
                    <math formula="p\propto T"/>
                </p>
                <p>
                    <math formula="\Rightarrow pV=RT"/>
                </p>
                <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
            </md-step>

            <md-step id="second" md-label="EOS of the ideal gas" md-description="the simplest EOS"
                     :md-error="secondStepError"
                     :md-done.sync="second">

                <p>Three variables:
                    <math formula=" p, V, T"/>
                    Once we get two of them, we can determine another.<br/>
                    But notice! This equation is only suitable when
                    <span style="color: #FF0000 ; "><Math inline="true" formula="p\rightarrow0"></Math></span>,
                    where we can treat gas as "ideal gas" (the interaction of which can be ignored). If p is too high,
                    considerable error can be caused.
                </p>
                <p>Q: For a certain gas, when the temperature is 27 <span>&#x2103;</span>, the pressure is 3 MPa, then
                    when the temperature is 127 <span>&#x2103;</span>, what is the pressure? </p>
                <md-button class="md-raised md-primary" @click="setDone('second', 'third')">4 MPa</md-button>
                <md-button class="md-raised md-primary" @click="setError('second')">18.8 MPa</md-button>
            </md-step>

            <md-step id="third" md-label="van der waals EOS" md-description="the simplest cubic EOS"
                     :md-done.sync="third">
                <b><span style="font-size: large; ">2. van der waals EOS</span></b>
                <p>Considering the interaction between molecules:
                    <math formula="p \Rightarrow p+\frac{a}{V^2}"/>
                <p>Considering the molecular volume:
                    <math formula="V \Rightarrow V-b"/>
                </p>
                <p>So we get
                    <math formula="p=\frac{RT}{V-b}-\frac{a}{V^2}"/>
                </p>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">Go on!</md-button>
            </md-step>

            <md-step id="fourth" md-label="van der waals EOS" md-description="the simplest cubic EOS"
                     :md-done.sync="fourth">
                <p>When we set
                    <math formula="p \rightarrow 0\quad(V \rightarrow \infty)"/>
                </p>
                <p>
                    <math formula="pV=\frac{RT}{1-b/V}-\frac{a}{V} \rightarrow RT"/>
                </p>
                <p>Then it degenerates into the ideal gas equation.</p>
                <p>When
                    <math inline="true" formula="p"/>
                    increases, the interaction between gas molecules <b>cannot be ignored</b>, and van der waals
                    EOS
                    shows
                    more accuracy. This equation is a cubic equation of
                    <math inline="true" formula="V"/>
                    , which has at most three roots when
                    <math inline="true" formula="p,T"/>
                    are given .
                </p>
                <md-button class="md-raised md-primary" @click="setDone('fourth','fifth')">Go on!</md-button>

            </md-step>

            <md-step id="fifth" md-label="van der waals EOS" md-description="the simplest cubic EOS"
                     :md-error="fifthStepError" :md-done.sync="fifth">
                <p>Define
                    <math inline="true" formula="T_c"/>
                    and
                    <math inline="true" formula="p_c"/>
                    : the temperature and pressure of the fluid at the "critical state", when the three roots coincide.
                    <br/>So we get:
                    <math formula="V^3-3V_c V^2+3V_c^2 V-V_c^3=0"/>
                    <math formula="V^3-\frac{bp_c+RT_c}{p_c} V^2+\frac{a}{p_c}V -\frac{ab}{p_c} =0"/>
                </p>
                <p>The corresponding coefficients are identical:</p>
                <math formula="a=\frac{27}{64}\frac{RT_c^2}{p_c}"/>
                <math formula="b=\frac{1}{8} \frac{RT_c}{p_c}"/>
                <math formula=" Z_c=\frac{p_c V_c}{RT_c}\equiv3/8={\rm const}"/>
                <p>However, experiments show that for different gas
                    <math inline="true" formula="Z_c"/>
                    also varies, ranging from 0.23 to 0.29. Moreover,
                    results derived from this equation can also deviate from true value. It seems that van der waals EOS
                    remains to be improved.
                </p>
                <p>Q: How many roots of volume can we get from vdw EOS at most, when
                    <math inline="true" formula="p,T"/>
                    are given?
                </p>
                <md-button class="md-raised md-primary" @click="setDone('fifth','sixth')">3</md-button>
                <md-button class="md-raised md-primary" @click="setError('fifth')">4</md-button>
            </md-step>

            <md-step id="sixth" md-label="RK EOS" md-description="improved cubic EOS"
                     :md-done.sync="sixth">
                <p>Considering the influence of
                    <math inline="true" formula="T"/>
                    when calculating pressure, further correction is made to the volume:
                </p>
                <math formula="\frac{a}{V} \Rightarrow \frac{a}{T^{0.5}V(V+b)}"/>
                <p>We get</p>
                <math formula="pV=\frac{RT}{V-b}-\frac{a}{T^{0.5}V(V+b)}"/>
                <md-button class="md-raised md-primary" @click="setDone('sixth','seventh')">Go on!</md-button>
            </md-step>

            <md-step id="seventh" md-label="RK EOS" md-description="improved cubic EOS"
                     :md-error="seventhStepError" :md-done.sync="seventh">
                <p>Here, as analyzed before, we can get</p>
                <math formula="a=0.42748 \frac{R^2 T_c^{2.5}}{p_c}"/>
                <math formula="b=0.08664 \frac{RT_c}{p_c}"/>
                <math formula="Z_c=\frac{p_c V_c}{RT_c}\equiv1/3={\rm const}"/>
                <p>In engineering applications, RK EOS emerges as more accurate especially for gases.</p>
                <p>Compared with vdw EOS, its
                    <math inline="true" formula="Z_c"/>
                    is closer to 0.23~0.29, error still remains. We have instead to introduce a
                    parameter which can describe matter-specific properties.
                </p>
                <p>Q: Next, how might we further improve the accuracy of cubic EOS?</p>
                <md-button class="md-raised md-primary" @click="setDone('seventh','eighth')">Through T</md-button>
                <md-button class="md-raised md-primary" @click="setError('seventh')">Through p</md-button>
            </md-step>

            <md-step id="eighth" md-label="SRK EOS" md-description="Soave modified" :md-done.sync="eighth">
                <p>In the RK equation, the function of
                    <math inline="true" formula="a(T)"/>
                    still appears too simple.
                    But the temperature function is essential for calculating saturated vapor pressures, therefore a
                    prime target of modification.
                </p>
                <p>The most important milestone is the SRK equation proposed by Soave. Given,
                    <math formula="a=a_c\cdot\alpha(T)"/>
                    <math formula="\alpha(T)=(1+m(1-T_r^{0.5}))^2"/>
                    <math formula="m=0.480+1.574\omega-0.176\omega^2"/>
                    where
                    <math inline="true" formula="a_c"/>
                    is the value of the parameter a at the critical point.
                    <math inline="true" formula="\alpha(T)"/>
                    takes into account the effects of temperature and physical properties.
                </p>
                <p>We get:
                    <math formula="p=\frac{RT}{V-b}-\frac{a(T)}{V(V+b)}"/>
                    And the corresponding form:
                    <math formula="Z^3-Z^2+(A-B-B^2)Z-AB=0"/>
                    <math formula="A=\frac{a(T)p}{R^{2}T^{2}}"/>
                    <math formula="B=\frac{bp}{RT}"/>
                </p>
                <md-button class="md-raised md-primary" @click="setDone('eighth', 'ninth')">Continue</md-button>
            </md-step>

            <md-step id="ninth" md-label="SRK EOS" md-description="Soave modified" :md-error="ninthStepError"
                     :md-done.sync="ninth">
                <p>Here, as analyzed before, we can get:
                    <math formula="a=a_c\cdot\alpha(T)"/>
                    <math formula="a_c=0.42748\frac{(RT_c)^2}{p_c}"/>
                    <math formula="\alpha(T)=(1+m(1-T_r^{0.5}))^2"/>
                    <math formula="m=0.480+1.574\omega-0.176\omega^2"/>
                    <math formula="b=0.08664\frac{RT_c}{p_c}"/>
                    <math formula="Z_c=\frac{p_cV_c}{RT_c}\equiv1/3={\rm const}"/>
                </p>
                <p>Due to the introduction of a more precise temperature function,
                    the SRK equation has a greatly improved level of accuracy, and has become the first cubic type of
                    state equation widely accepted
                    and used by the engineering community.
                    But
                    <math inline="true">Z_c</math>
                    still remains
                    <math inline="true">1/3</math>
                    . We still attempt to improve.
                </p>
                <p>Q: Which of the following substances has an acentric factor of 0?</p>
                <md-button class="md-raised md-primary" @click="setDone('ninth', 'tenth')">Ar gas</md-button>
                <md-button class="md-raised md-primary" @click="setError('ninth')">Water at 0K</md-button>
            </md-step>

            <md-step id="tenth" md-label="Peng-Robinson EOS" md-description="Improved gravitational term"
                     :md-done.sync="tenth">
                <p>When the appropriate temperature function
                    <math inline="true" formula="a"/>
                    is sufficiently accurate to predict the saturated vapor
                    pressure,
                    the accuracy of the equation still needs to be improved.
                    The simplest idea is to change the function of the gravitational term to improve the accuracy of the
                    prediction.
                </p>
                <p>The typical one is the Peng-Robinson equation.
                    It considers that the critical compression factor of the RK state equation is overestimated,
                    so
                    <math inline="true" formula="b(V-b)"/>
                    is added to the denominator of the gravitational term. The critical compression factor is
                    reduced to 0.307, which is closer to the actual gas.
                </p>
                <p>We get:
                    <math formula="p=\frac{RT}{V-b}-\frac{a(T)}{V(V+b)+b(V-b)}"/>
                    And the corresponding form:
                    <math formula="\begin{aligned}&Z^3-(1-B)Z^2+(A-2B-3B^2)Z\\&-(AB-B^2-B^3)=0\end{aligned}"/>
                    <math formula="A=\frac{a(T)p}{R^{2}T^{2}}"/>
                    <math formula="B=\frac{bp}{RT}"/>
                </p>
                <md-button class="md-raised md-primary" @click="setDone('tenth', 'eleventh')">Continue</md-button>
            </md-step>

            <md-step id="eleventh" md-label="Peng-Robinson EOS" md-description="Improved gravitational term"
                     :md-done.sync="eleventh">
                <p>Here, as analyzed before, we can get:
                    <math formula="a=a_c\cdot\alpha(T)"/>
                    <math formula="a_c=0.42724\frac{(RT_c)^2}{p_c}"/>
                    <math formula="\alpha(T)=(1+k(1-T_r^{0.5}))^2"/>
                    <math formula="k=0.37646+1.54226\omega-0.26992\omega^2"/>
                    <math formula="b=0.0778\frac{RT_c}{p_c}"/>
                    <math formula="Z_c=\frac{p_cV_c}{RT_c}\equiv0.307={\rm const}"/>
                </p>
                <p>The cubic equation of state has its own inherent flaws, mainly due to the unreasonable repulsive
                    term. Existing corrections mainly focus on the gravitational term, whereas new roads toward
                    perfection
                    should start from reforming the repulsive term.

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
    name: "EOS-ID-VDW-RK",
    data: () => ({
      active: 'first',
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seventh: false,
      eighth: false,
      ninth: false,
      tenth: false,
      eleventh: false,
      secondStepError: null,
      fifthStepError: null,
      seventhStepError: null,
      ninthStepError: null,
      errorMsg: 'False! Please think again!'
    }),
    methods: {
      setDone(id, index) {
        if (id === 'second' || id === 'fifth' || id === 'seventh' || id === 'ninth')
          this.$refs.right.play();
        this[id] = true;

        this.secondStepError = null;

        this.fifthStepError = null;

        this.seventhStepError = null;

        this.ninthStepError = null;
        if (index) {
          this.active = index
        }
      }
      ,
      setError(id) {
        this.$refs.wrong.play();
        switch (id) {
          case 'second':
            this.secondStepError = this.errorMsg;
            break;
          case 'fifth':
            this.fifthStepError = this.errorMsg;
            break;
          case 'seventh':
            this.seventhStepError = this.errorMsg;
            break;
          case 'ninth':
            this.ninthStepError = this.errorMsg;
            break;
        }
      }
    }
  }
</script>


<style scoped>
    * {
        font-family: sans-serif;
        text-align: justify;
    }
</style>