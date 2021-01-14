<template>
    <div>
        <md-card>
            <md-card-header>
                <div class="md-title"><span
                        style="color: cornflowerblue">Calculation of H & S </span></div>
            </md-card-header>

            <md-card-content>
                In the previous section, we have learned how to calculate
                <math :inline="true">\small p,V,T</math>
                values using different equations of state.
                We know that for a process, <span style="color: cornflowerblue; font-weight: bold">H and S </span>are
                also important thermodynamic quantities that need to be considered. Now we can use the existing
                knowledge of EOS, basic
                thermodynamic relations and some mathematical derivations to calculate the entropy and enthalpy
                properties!
            </md-card-content>

            <md-card-actions>
                <router-link to="./eos/eos-intro">
                    <md-button class="md-primary">Review EOS</md-button>
                </router-link>

            </md-card-actions>
        </md-card>

        <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                    <div class="md-title"><span style="color: cornflowerblue">Basic Knowledge</span></div>
                    <div class="md-subhead">Prelecture before calculation</div>
                </md-card-header>

                <md-card-content>
                    In order to be able to learn in this section, we need the knowledge background:<br>
                    <br>
                    <span style="text-align: center;font-size: large">1、Basic thermodynamic relations</span>
                    <math>dU=TdS-pdV</math>
                    <math>dH=TdS+Vdp</math>
                    <math>dG=-SdT+Vdp</math>
                    <math>dA=-SdT-pdV</math>
                    <span style="text-align: center;font-size: large">2、Maxwell relation</span>
                    <math>\small
                        [\frac{∂}{∂Y} (\frac{∂F(X,Y)}{∂X})]_X=[\frac{∂}{∂X} (\frac{∂F(X,Y)}{∂Y})]_Y
                    </math>
                    <br>
                    <span style="text-align: center;font-size: large">3、characteristics of ideal gas</span>
                    <math>dH^{IG}=C_p^{IG} dT</math>
                    <math>dS^{IG}=\frac{C_p^{IG}}{T}dT-\frac{R}{p}dp</math>
                    <span>Now let’s begin again!</span>

                </md-card-content>
            </md-ripple>
        </md-card>

        <md-card>
            <md-card-header>
                <div class="md-title" style="color: #46A3FF">Mathematical derivation</div>
                <div class="md-subhead">How we get H?</div>
            </md-card-header>

            <md-card-content>
                For practical reasons, we should choose the independent variables that are convenient to measure:
                temperature T and pressure p.
                The enthalpy can be expressed as:
                <Math>H=F(T,p)</Math>
                <Math>dH=(\frac{∂H}{∂T})_p dT+(\frac{∂H}{∂p})_T dp</Math>
                Among them,
                <Math>(\frac{∂H}{∂T})_p=C_p</Math>
                According to the basic thermodynamic relationship and Maxwell relationship,
                <Math>\small (\frac{∂H}{∂p})_T=T(\frac{∂S}{∂p})_T+V=-T(\frac{∂V}{∂T})_p+V</Math>
                So,
                <Math>dH=CpdT+[-T(\frac{∂V}{∂T}）_p+V]dp</Math>
            </md-card-content>
        </md-card>

        <md-card>
            <md-card-header>
                <div class="md-title" style="color: #46A3FF">Mathematical derivation</div>
                <div class="md-subhead">How we get S?</div>
            </md-card-header>

            <md-card-content>
                Similarly, entropy can be expressed as:
                <Math>S=S(T,p)</Math>
                <Math>dS=(\frac{∂S}{∂T})_p dT+(\frac{∂S}{∂p})_T dp</Math>
                According to the basic thermodynamic relationship and Maxwell relationship,
                <Math>(\frac{∂S}{∂T})_p=Cp/T</Math>
                <Math>(\frac{∂S}{∂p})_T=-(\frac{∂V}{∂T})_p</Math>
                So,
                <Math>dS=\frac{Cp}{T}dT-(\frac{∂V}{∂T})_p dp</Math>
                <hr>
                <br>
                It can be found that, theoretically, when the isobaric heat capacity data, the integral upper and lower
                limits, and the state equation have been determined, the entropy of the entropy in any state can be
                calculated.
            </md-card-content>
        </md-card>

        <md-card>
            <md-card-header>
                <div class="md-title" style="color: #46A3FF">Mathematical derivation</div>
                <div class="md-subhead">Construction & Integral</div>
            </md-card-header>

            <md-card-content>
                We choose the ideal gas as the starting point for integration and define:
                Residual Properties：The difference between actual and the ideal-gas values of the thermodynamic
                properties M at the same temperature and pressure. We denote it as
                <Math inline="true">\small M^R</Math>
                ，where M is residue property of
                any thermodynamic property.
                To calculate the enthalpy and entropy changes in the states
                <Math inline="true">\small T_1, p_1 to T_2, p_2</Math>
                , you can construct a
                process like this:
                <br>
                <img src="\img\HS_Cal.png"/>
                <br>
                Note that
                <Math inline="true">\small -\Delta H_1, -\Delta S_1, \Delta H_2, \Delta S_2</Math>
                are the differences between the actual gas and the ideal gas, which can be obtained by integrating
                <Math inline="true">\small H ^ R, S ^ R</Math>
                :
                <Math>H^R=H-H^{IG}</Math>
                <Math>\small
                    \begin{aligned}
                    dH^R&=[(\frac{\partial H}{\partial p})_T-(\frac{\partial H^{IG}}{\partial p})_T]dp\\
                    &=(\frac{\partial H}{\partial p})_T dp
                    \end{aligned}
                </Math>
                <Math>
                    \small
                    \begin{aligned}
                    \int_{H_0^R}^{H^R}dH^R &= \int_{p_0}^{p} (\frac{\partial H}{\partial p})_T\, dp\\
                    &=\int_{p_0}^{p} [V-T(\partial V/\partial T)_p] \, dp
                    \end{aligned}
                </Math>
                <Math>\small dS^R=[(\frac{\partial S}{\partial p})_T-(\frac{\partial S^{IG}{\partial p})_T]dp</Math>
                <Math>\small
                    \begin{aligned}
                    \int_{S_0^R}^{S^R} dS^R &= \int_{p_0}^{p} (\frac{\partial (S-S^{IG})}{\partial p})_T \, dp\\
                    &=\int_{p_0}^{p} [\frac{R}{p}-(\frac{\partial V}{\partial T})_p] \, dp
                    \end{aligned}
                </Math>
            </md-card-content>
        </md-card>

        <md-card>
            <md-card-header>
                <div class="md-title" style="color: #46A3FF">Result</div>
                <div class="md-subhead">Finally we get the formula</div>
            </md-card-header>

            <md-card-content>
                So we get
                <math inline="true">\small \Delta H_1, \Delta H_2 & \Delta S_1, \Delta S_2.</math>
                For
                <math inline="true">\Delta H^{IG} , \Delta S^{IG}</math>
                ，It can be directly substituted into the entropy calculation formula of ideal gas.
                In the end, we can get:
                <Math>\small
                    \begin{aligned}
                    \Delta H_{p,T}&=H_{p_0,T_0}^{IG}+\int_{T_0}^{T} Cp^{IG}\,dT \\
                    &+\int_{p_0}^{p} [V-T(\frac{\partial V}{\partial T})_p]\, dp
                    \end{aligned}

                </Math>
                <Math>\small
                    \begin{aligned}
                    \Delta S_{p,T}&=S_{p_0,T_0}^{IG}+\int_{T_0}^{T} \frac{C_p^{IG}}{T}\,dT -Rln(\frac{p}{p_0})\\
                    &+\int_{p_0}^{p} [\frac{R}{p}-T(\frac{\partial V}{\partial T})_p]\, dp
                    \end{aligned}
                </Math>

            </md-card-content>
        </md-card>
    </div>
</template>

<style lang="scss" scoped>
    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }
</style>

<script>
    import Math from "@/components/Math";

    export default {
        components: {Math},
        name: 'Entropy & Enthalpy'
    }
</script>
