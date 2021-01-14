<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical md-linear>
            <md-step id="first" md-label="Starting from Chemical Potential" md-description=""
                     :md-done.sync="first">
                <p>For close system with pure substance:</p>
                <p>
                    <Math>dG=d\mu=-SdT+Vdp</Math>
                    where G-Molar Gibbs free energy,
                    <math inline="true">\mu</math>
                    -Chemical potential, S-molar entropy,
                    V-Molar volume, T-temperature, p-pressure.
                </p>
                <p>
                    At constant temperature:
                    <math>dG=Vdp\Rightarrow\int_{G_{0}}^{G} \, dG=\int_{p_{0}}^{p}V\,dp</math>
                    <math>\begin {aligned}
                        &\Rightarrow G-G_{0}=\int_{p_{0}}^{p}V\,dp\\
                        &\Rightarrow\mu-\mu_{0}=\int_{p_{0}}^{p}V\,dp
                    \end{aligned}</math>
                    <math inline="true">G_{0}</math>
                    and
                    <math inline="true">\mu_{0}</math>
                    are molar Gibbs free energy and chemical potential at
                    <math inline="true">p_{0}</math>
                    .
                </p>
                <p>
                    For real gas,
                    <math inline="true">pV=RT</math>
                    , We can get
                    <math inline="true">\mu=\mu_{0}+RTln\frac{p}{p_{0}}</math>
                </p>
                <p>
                    where
                    <math inline="true">\mu</math>
                    -Chemical potential of gas at T and p
                </p>
                <p>
                    Reference state or standard state:
                    <math inline="true">\mu_{0}</math>
                    -Chemical potential of gas at T and
                    <math inline="true">p_{0}</math>
                </p>
                <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
            </md-step>

            <md-step id="second" md-label="Definition of Fugacity"
                     :md-done.sync="second">
                <p>
                    For real gas, Berlin type virial EOS: <math inline="true">Z=\frac{pV}{RT}=1+B^{'}p+C^{'}p^{2}+D^{'}p^{3}+...</math>
                    <math>\begin{aligned}\Rightarrow \mu&=\mu_{0}+RT\int_{p_{0}}^{p}(\frac{1}{p}+B^{'}+C^{'}p\\
                        &+D^{'}p^{2}+...)\,dp\end{aligned}</math>
                    <math>\begin{aligned}\Rightarrow \mu&=\mu_{0}+RT[ln\frac{p}{p_{0}}+B^{'}(p-p_{0})\\
                        &+\frac{1}{2}C^{'}(p^{2}-p_{0}^{2})+\frac{1}{3}D^{'}(p^{3}-p_{0}^{3})\\
                        &+...]\end{aligned}</math>
                    For reference state or standard state:  <math inline="true">p_{0}</math>=1 atm or 1 bar
                    <math>\begin{aligned}\Rightarrow \mu&=\mu_{0}+RT(lnp+B^{'}p+\frac{1}{2}C^{'}p^{2}\\
                        &+\frac{1}{3}D^{'}p^{3}+...)\end{aligned}</math>
                    Gilbert Newton Lewis proposed <math inline="true">(lnp+B^{'}p+\frac{1}{2}C^{'}p^{2}+\frac{1}{3}D^{'}p^{3}+...)</math> as <math inline="true">lnf</math>,
                    so we get:<math>\mu=\mu_{0}+RTlnf</math>
                    where <math inline="true">f</math>-Fugacity
                </p>
                <p>
                    If <math inline="true">p\rightarrow0</math> the real gas approaches the ideal gas, then <math inline="true">f\rightarrow p</math><br>
                    If <math inline="true">p\rightarrow p_{0}</math> all gases at 1 atm or 1 bar can be treated as ideal gases,
                    then <math inline="true">f\rightarrow p_{0}=1</math>atm or bar, thus <math inline="true">\mu=\mu_{0}</math>

                </p>
                <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
            </md-step>

            <md-step id="third" md-label="Definition of Fugacity Coefficient"
                     :md-done.sync="third" >
                <p>
                    We define Fugacity Coefficient: <math>\phi\equiv\frac{f}{p}</math>
                    Discussion:<br>
                    For ideal gas: <math inline="true">\phi=1</math>,<math inline="true">f=p</math><br>
                    For real gas:<math inline="true">\phi\ne1</math>,<math inline="true">1-\phi</math> represents the deviation from ideal gas.
                </p>
            </md-step>
        </md-steppers>
    </div>
</template>

<script>
    import Math from "@/components/Math";

    export default {
        components: {Math},
        name: 'Fugacity_theory',
        data: () => ({
            active: 'first',
            first: false,
            second: false,
            third: false,
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

<style lang="scss" scoped>
    .md-steppers {
        font-size: 15px;
        font-family: sans-serif;
        text-align: justify;
    }
</style>
