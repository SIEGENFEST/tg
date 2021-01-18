<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="Example 1 伯努利方程的推导" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        在管道中选取控制体，将其视为开放系统。于是我们可以从热力学第一定律出发，通过项的简化推导伯努利方程。<br>
                        请从以下瞬时非简单系统的热力学第一定律方程中，点击选择你认为可以简化的项：
                    </p>
                    <div>
                    <button :md-ripple="false" class="bu2" @click="show('s1'),hide('h1')" v-show="h1"><math inline=1>\frac{d\underline E}{dt} </math></button>
                    <button :md-ripple="false" class="bu"><span v-show="s1">0</span><math inline=1>=</math></button>
                    <button class="bu" :md-ripple="false" @click="show('s2'),hide('h2')" v-show="h2"><math inline=1>{\dot Q}_\sigma </math></button>
                    <button :md-ripple="false" class="bu"><span v-show="h2"><math inline=1>+</math></span></button>
                    <button class="bu" :md-ripple="false" @click="show('s3'),hide('h3')" v-show="h3"><math inline=1>{\dot W}_\sigma </math></button>
                    <button :md-ripple="false" class="bu"><span v-show="h3"><math inline=1>+</math></span></button>
                    <button class="bu" :md-ripple="false" @click="judge('r1') "><math inline=1 :class="{wr:r1}">(E_{PEi}+E_{KEi}+H_i) </math></button>
                    <button class="bu" :md-ripple="false" @click="hide('h4'), show('s4')" v-show="h4"><math inline=1>{\dot n}_i </math></button>
                    <button :md-ripple="false" class="bu"><math inline=1>-</math></button>
                    <button class="bu" :md-ripple="false" @click="judge('r2') "><math inline=1 :class="{wr:r2}">(E_{PEo}+E_{KEo}+H_o) </math></button>
                    <button class="bu" :md-ripple="false" @click="hide('h4'), show('s4')" v-show="h4"><math inline=1>{\dot n}_o </math></button><br><br>
                    <md-button class="md-primary" @click="show('s5'),show('s1'),hide('h5'),hide('h1'),hide('h2'),hide('h3'),hide('h4'),hide('h5')" v-show="h5&&(s1&&s2&&s3&&s4)===false">不懂，看答案</md-button><br>
                </div>
                    <p v-show="s1">
                        伯努利方程适用于稳定流动，所以控制体内能量不随时间变化，因此有<math inline=1 class="ri">\frac{d\underline E}{dt}=0</math>
                    </p>
                    <p v-show="s2||s5">
                        控制体为刚性壁面，系统体积不发生变化，<math inline=1 class="ri">{\dot W}_\sigma=0 </math>
                    </p>
                    <p v-show="s3||s5">
                        管道流动中，环境与系统的热交换可以忽略，<math inline=1 class="ri">{\dot Q}_\sigma=0 </math>
                    </p>
                    <p v-show="s4||s5">
                        伯努利方程适用于稳定流动，所以控制体内不积累物质，即<math inline=1 class="ri">{\dot n}_i={\dot n}_o</math>
                    </p>

                    <p v-show="s1&&s2&&s3&&s4||s5">
                        于是我们得到上式。<br><br>
                        式中:
                        <math>H_i=U_i+p_iV_i，E_{PEi}=gh_i，E_{KEi}=\frac{v_i^2}2</math>
                        <math>H_o=U_o+p_oV_o，E_{PEo}=gh_o，E_{KEo}=\frac{v_o^2}2</math>
                        假设摩擦可以忽略，即进出控制体的流体内能不变；并且令V=1/ρ，就得到伯努利方程：
                        <math>\frac{v_1^2}2+gh_1+\frac{p_1}{\rho_1}=\frac{v_2^2}2+gh_2+\frac{p_2}{\rho_2}=constant</math>
                    </p>
                </div>
                <br><md-button class="md-raised md-primary" @click="setDone('first','second')">Next Example</md-button>
            </md-step>
            <md-step id="second" md-label="Example 2 化工过程中的简化" md-description ="" :md-done.sync="second">
                <div>
                    <p>
                        写出稳定流动系统热力学第一定律的一般形式，并针对化工生产过程中， 流体流经透平、泵、换热器的情况进行适当的简化。
                    </p>
                    <p>
                        答案：<br>
                        对于稳定流动系统，热力学第一定律表达式为：
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="" md-description ="" :md-done.sync="third">

                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="" md-description ="" :md-done.sync="fourth">

                <md-button class="md-raised md-primary" @click="setDone('fourth','fifth')">OK</md-button>
            </md-step>
            <md-step id="fifth" md-label="" md-description ="" :md-done.sync="fifth">

                <md-button class="md-raised md-primary" @click="setDone('fifth','fifth')">OK</md-button>
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
            k1: 0,
            r1: 0,
            r2: 0,
            s1: false,
            s2: false,
            s3: false,
            s4: false,
            s5: false,
            h1: true,
            h2: true,
            h3: true,
            h4: true,
            h5: true,
            
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
        max-width: 800px;
        font-size: 15px;
        line-height: 25px;
        font-family: sans-serif;
        text-align: justify;
    }
    .pic{
        max-width:300px;
    }
    .piclarge{
        max-width: 500px;
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
    .bu{
        border: 0px;
        color: grey;
        background-color: transparent;
        height: 18px;
        font-size: 15px;
        float: left;
        width: auto;
    }
    .bu2{
        border: 0px;
        color: grey;
        background-color: transparent;
        height: 18px;
        font-size: 18px;
        float: left;
        width: auto;
    }
</style>

