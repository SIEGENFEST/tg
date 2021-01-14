<template>
    <div>
        <md-steppers md-vertical :md-active-step.sync="active">
            <md-step id="first" md-label="criterion for gas-liquid equilibrium" :md-done.sync="first">
                <p>For P phases and C components, the criterion for gas-liquid equilibrium
                    is equal temperature, equal pressure, and equal chemical potential (in another word, the futility is
                    equal).
                </p>
                <math>
                    T^{\alpha}=T^{\beta}=\dots=T^{P}\\
                    p^{\alpha}=p^{\beta}=\dots=p^{P}\\
                    \mu_1^{\alpha}=\mu_1^{\beta}=\dots=\mu_1^{P}\\
                    \vdots\\
                    \mu_i^{\alpha}=\mu_i^{\beta}=\dots=\mu_i^{P}\\
                    \vdots\\
                    \mu_C^{\alpha}=\mu_C^{\beta}=\dots=\mu_C^{P}\\
                </math>
                <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
            </md-step>

            <md-step id="second" md-label="Basic equation for miscibility system"
                     md-description="EOS method & activity coefficient method" :md-done.sync="second">
                <p>components i:</p>
                <math>i=1,2,\dots,C</math>
                <hr>
                <p>
                    (1)EOS Method
                </p>
                <math>
                    \hat{f_i}^V=\hat{f_i}^L\\
                    py_i\hat{\phi_i}^V=px_i\hat{\phi_i}^L\\
                    y_i\hat{\phi_i}^V=x_i\hat{\phi_i^L}
                </math>
                <p>
                    PS:<br>
                    1. The calculation of gas/liquid fugacity coefficient depends on the EOS and mixing rules<br>
                    2. The same equation of state and mixed rules need to be applied
                </p>
                <hr>
                <p>
                    (2)Activity Coefficient Method
                </p>
                <Math>
                    \hat{f_i}^V=py_i\hat{\phi_i}^V\\
                    \hat{f_i}^L=f_i^0x_i\gamma_i^L\\
                    py_i\hat{\phi_i}^V=p_i^{sat}\phi_i^{sat}x_i\gamma_iexp\int_{p_i^{sat}}^{p}\frac{V_i^L}{RT}dp
                </Math>
                <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
            </md-step>

            <md-step id="third" md-label="Vapor-liquid phase equilibrium in a mutually soluble system at low pressure"
                     :md-done.sync="third">
                <math>
                    py_i=p_i^{sat}x_i\gamma_i
                </math>
                <md-button class="md-raised md-primary" @click="setDone('third', 'forth')">Continue</md-button>
            </md-step>

            <md-step id="forth" md-label="Calculation example" md-description="Conditions: Low pressure "
                     :md-done.sync="forth">
                <p>
                    The benzene(1)-cyclohexane(2) system is formed at 77.6℃ with a total pressure of 101.33kPa.
                    The vapor pressures of pure benzene and pure cyclohexane at this temperature are known to be
                    <math inline="true">p_1^{sat}= 99.3kpa</math>
                    and
                    <math inline="true">p_2^{sat}= 98.0kpa</math>
                    , respectively.
                    <br>
                <hr>
                <strong>Question:</strong>
                <br>
                Calculate the activity coefficients of benzene and cyclohexane via the regular solution theory (SH
                equation) was used.
                Calculate and draw the curves of equilibrium pressure and composition of liquid phase,
                and the curves of equilibrium pressure of and composition of vapor phase at 77.6℃.
                <hr>
                <P>
                    <strong>Solution:</strong><br>
                    SH equation:
                    <math>
                        \phi_{1}=\frac{x_1V_1}{x_1V_1+x_2V_2}\\
                        \phi_{2}=\frac{x_2V_2}{x_1V_1+x_2V_2}\\
                        ln\gamma_1=\frac{V_1(\delta_1-\delta_2)^2}{RT}\phi_2^2\\
                        ln\gamma_2=\frac{V_2(\delta_1-\delta_2)^2}{RT}\phi_1^2
                    </math>
                    Relative parameters:
                    <math>
                        \delta_{1}=18.74(J\cdot cm^{-3})^{\frac{1}{2}}\\
                        \delta_{2}=16.78(J\cdot cm^{-3})^{\frac{1}{2}}\\
                        V_1=89.4(cm^3\cdot mol^{-1})\\
                        V_2=108.7(cm^3\cdot mol^{-1})
                    </math>
                    We get the relationship of activity coefficient and composition:

                    <math>
                        \gamma_1=\gamma_1(x_1)\\
                        \gamma_2=\gamma_2(x_1)
                    </math>
                    Draw the curve:
                    <img src="../../public/img/EXhuoduxishu.png" alt="EXhuoduxishu"/>
                    Assuming that:<br>
                    1. The vapor phase is an ideal gas<br>
                    2. Saturated vapor of pure liquid is an ideal gas<br>
                    3. Pressure has little effect on molar volume
                    <br>
                    Thus,
                    <math>py_i=p_i^{sat}x_i\gamma_i

                    </math>
                    Let's put the activity coefficient in this equation:
                    <math>
                        p=py_1+py_2=p_1^{sat}x_1\gamma_1+p_2^{sat}x_2\gamma_2\\
                        y_1=\frac{p_1^{sat}x_1\gamma_1}{p}
                    </math>
                    Draw the curve:
                    <img src="../../public/img/PhaseGraphExample.png" alt="PhaseGraphExample"/>
                </P>
            </md-step>
        </md-steppers>
    </div>
</template>

<script>
  import Math from "@/components/Math";

  export default {
    components: {Math},
    name: "PhaseEquilibriumExample",
    data: () => ({
      active: null
    }),
    methods: {
      setDone(id, index) {
        this[id] = true;
        if (index) {
          this.active = index
        }
      },
    }
  }
</script>

<style scoped>
    * {
        font-family: sans-serif;
        text-align: justify;
    }
</style>