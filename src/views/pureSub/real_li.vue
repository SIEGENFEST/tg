<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="2.2 纯液体" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        
                        虽然van der Waals方程、SRK方程、BWRS方程等等状态方程对于气液相都适用，但如果仅计算饱和液体的摩尔体积，使用较简单的方程往往更精确方便。因为这部分内容课程中使用较少，所以此处仅简略介绍。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="2.2.1 饱和液体状态方程" md-description ="" :md-done.sync="second">
                <div>
                    <h3>Rackett方程</h3>
                    <p>
                        <math>V^{SL}=V_CZ_C^{\left(1-T_r\right)^{2/7}}</math>
                        特点：<br>
                        1. 可应用于强极性物质；<br>
                        2. 对于缔合液体，如醇类、羧酸类和腈类不适用；<br>
                        3. 对于量子效应很强的流体，如氦、氢等不适用。
                    </p>
                    <h3>Yamada-Gunn式</h3>
                    <p>
                        <math>V^{SL}=V^RZ_{cr}^{\phi\left(T_r，T_r^R\right)}</math>
                        其中：
                        <math>Z_{cr}=0.29056-0.08775\omega</math>
                        <math>\phi\left(T_r，T_r^R\right)=\left(1-T_r\right)^{2/7}-\left(1-T_r^R\right)^{2/7}</math>
                        <math inline=1>V^R</math>是在参比温度<math inline=1>T_r^R</math>下的液体摩尔体积。<br>
                        方程计算精度较高，尤其对于非极性饱和液体。
                    </p>
                    <h3>童景山式</h3>
                    <p>
                        <math>V^{SL}=\frac{RT_C}{P_C}exp\left\{-\left(1.2310+0.8777\zeta\right)\left[1+\left(1-T_r\right)^{2/7}\right]\right\}</math>
                        其中<math inline=1>\zeta</math>是物质的构型因子。<br>
                        方程精度较高，适用范围也较广。<br><br>
                    </p>
                    <p>
                        <strong>
                            例题：<br>
                            应用以下方程计算150℃下乙硫醇饱和液体的摩尔体积。已知实验值为<math inline=1>95.0cm^3\cdot mol^{-1}</math><br>
                            1. Rackett方程；2. Yamada-Gunn；3. 童景山式。<br>
                        </strong>
                        乙硫醇物性：<br>
                            <math inline=1>p_c=5.49\times10^3kPa\left(54.2atm\right)，T_c=499K，V_c=207cm^3\cdot mol^{-1}</math><br>
                            <math inline=1>\omega=0.190，\zeta=0.0892</math><br>
                        解答：<br>
                            1. <math>T_r=\frac{150+273.15}{499}=0.848,\;Z_c=\frac{54.2\times207}{82.06\times499}=0.274</math>
                            <math>V^{SL}=207\times\left(0.274\right)^{\left(1-0.848\right)^{2/7}}cm^3\cdot mol^{-1}=97.218cm^3\cdot mol^{-1}</math>
                            <math>\mathrm{误差}=\frac{97.218-95.0}{95.0}\times100\%=2.34\%</math>
                            2. 
                            <math>V^R=\frac1{0.839}\times62.134=74.057cm^3\cdot mol^{-1},\;Z_{cr}=0.2905-0.08775\times0.190=0.274</math>
                            <math>\phi\left(T_r,T_r^R\right)=\left(1-0.848\right)^{2/7}-\left(1-\frac{20+273.16}{419}\right)^{2/7}=-0.193</math>
                            <math>V^{SL}=74.057\times\left(0.274\right)^{-0.193}=95.078cm^3\cdot mol^{-1}</math>
                            <math>\mathrm{误差}=\frac{95.078-95.0}{95.0}\times100\%=0.08\%</math>
                            3.
                            <math>V^{SL}=\frac{82.06\times499}{54.2}exp\left\{-\left(1.2310+0.08775\times0.0892\right)\times\left[1+\left(1-0.848\right)^{2/7}\right]\right\}=94.99cm^3\cdot mol^{-1}</math>
                            <math>\mathrm{误差}=\frac{94.99-95.0}{95.0}\times100\%=-0.01\%</math>
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="2.2.2 压缩液体状态方程 " md-description ="" :md-done.sync="third">
                <div>
                    <h3>Tait方程</h3>
                    <p>
                        <math  class="ms">V=V_0-D\ln\frac{p+E}{p_0+E}</math>
                        其中<math inline=1>V_0,\;p_0</math>是给定温度下，该液体在参比态时的压力和摩尔体积。<br>
                        该方程是描述高压液体行为的最好的经验状态方程。
                    </p>
                    <h3>Thomson-Brobst-Hankinson方程</h3>
                    <p>
                        <math  class="ms">V=V_S\left( 1-C \ln \frac {p+B}{p^s+B}\right)</math>
                    </p>
                    <h3>Chuch-Prausnitz方程</h3>
                    <p>
                        <math>\rho=\rho^s\left[1+\frac{9Z_CD\left(p-p^s\right)}{p_c}\right]</math>
                        其中：
                        <math inline=1>\rho^s,\;p^s</math>分别是饱和态下的密度和压力；p是系统压力，<math inline=1  class="ms">D=D(\omega,T_r)</math>：
                        <math class="ms">D=\left(1-0.89\omega\right)\left[exp\left(6.9547\right)-76.2853T_r+191.3060T_r^2-203.5472T_r^3+82.7631T_r^4\right]</math>
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="2.2.3 普遍化方程" md-description ="" :md-done.sync="fourth">
                <div>
                    <p>
                        基于对比态原理，Lydersen等提出了估算液体体积的普遍化方法，可用于任何液体。<br>
                        定义对比密度：
                        <math>\rho_r=\frac\rho{\rho_c}=\frac{V_c}V</math>
                        根据对比温度和对比压力可以读出对比密度：<br>
                        <img src="../../../public/img/pure/rl1.png" alt="" class="piclarge">
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('fourth','fourth')">OK</md-button>
            </md-step>
            </md-steppers>
            
    </div>
</template>

<script >
    import Math from "@/components/Math";
    import Vue from 'vue';
    export default Vue.extend({
        components: {Math},
        name: "",
        data: () => ({
            active: 'first',
            first: false,
            second: false,
            third: false,
            fourth: false,
            fifth: false,
            k: 0,
            r: 0,
            s1: false,
            s2: false,
            
        }),
        methods: {
            setDone(id, index) {
                this[id] = true;
                if (index) {
                    this.active = index
                }
            },
            judge:function(t){
                this[t]=1;
            },
            show:function(t){
               this[t]=true;
            },
            
            hide:function(t){
                this[t]=false;
            },
        }
    })
 </script>

 <style lang="scss" scoped>
    .md-steppers {
        max-width: 700px;
        font-size: 15px;
        line-height: 27px;
        font-family: sans-serif;
        text-align: justify;
    }
    h3{
        font-size: 16.5px;
        color:rgb(32, 8, 165);
    }
    .lar{
        font-size: 15.5px;
        color:rgb(34, 5, 202);
    }
    .ms{
        font-size: 13px;
    }
    .pic{
        max-width:300px;
    }
    .piclarge{
        max-width: 450px;
    }
    .em{
        color: rgb(219, 22, 22);
    }
    .ri{
        color: rgb(13, 167, 13);
    }
    .wr{
        color: red;
    }
    .sma{
        font-size: 10px;
        color: grey;
    }
</style>

