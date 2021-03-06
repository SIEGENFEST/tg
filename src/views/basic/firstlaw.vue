<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="1.2.1 热力学第一定律" md-description ="" :md-done.sync="first">
                <p>
                    热力学第一定律是关于能量转化的定律，它表明不同形式的能量存在传递与转换，而总能量守恒。本部分将简要介绍运用于封闭系统与开放系统的热力学第一定律，并介绍不同情况下方程的变化。相关例题可以见First Law-Examples部分。
                </p>
                
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="1.2.1.1 封闭系统中热力学第一定律" md-description ="" :md-done.sync="second">
                <div>
                    <h3>描述</h3>
                    <p>
                        封闭系统的能量变化等于其从环境中吸收或放出的热加上其对环境施加或获得的功的和。本质是封闭系统能量守恒。<br>
                        数学描述：
                        <math>△ \underline E=Q+W</math>
                        微分形式：
                        <math>d \underline E=\delta Q +\delta W</math>
                    </p>
                    <md-button class="md-primary" @click="show('s2')">something interesting</md-button>
                    <div v-show="s2">
                        <p>
                            做功W的计算。<br>
                            想象一个水平的无摩擦活塞，截面积为A，内部气体压力为p，外部压力p'小于p；放开固定物，活塞开始运动，直至因距离s外的另一个固定物而静止；整个过程气体体积变化为V。<br><br>
                            由结论可以知道，系统（气体加活塞）对环境做的功应该用外部压力计算，为p'V。但是内部气体作用于活塞的力为pA，运动距离为s，做功W=pAs=pV，为什么和结论不同？<br><br>
                            为方便考虑，假设活塞有质量m。气体在推动活塞的过程中，做功确实为pV；但是这些功一部分转化为活塞的动能，仅有p'V的功作用于外界。理想情况下，假设活塞的动能不会散失到环境中，也没有熵增；于是活塞撞到固定物后会因为弹性碰撞而一直来回运动。结果系统（气体加活塞）对环境做功p'V，而气体对外（活塞加环境）做功pV。<br>
                            一般题目中，活塞都没有质量。相当于活塞停下来，能量返回了气体中，因此气体对外做功p'V。

                        </p>
                        <md-button class="md-primary sma" @click="hide('s2')">so easy, close</md-button><br>
                        <br>
                    </div>
                    <h3>推导</h3>
                    <p>
                        对于一个封闭系统，由热力学第三基本假设及热Q的定义：
                        <math>\underline E_A-\underline E_B=-W^a_{A\rightarrow B}</math>
                        <math>Q= E_{final}-E_{initial}-W</math>
                        于是得到封闭系统的热力学第一定律：
                        <math class="em">△E=\underline E_B-\underline E_A=Q+W</math><br>
                        而对于系统和环境组成的新的孤立系统，根据热力学第二基本假设可知，该孤立系统必然存在唯一一个稳定状态。因此系统和环境的能量变化之和为0，即：
                        <math>△ \underline E_{system}=-△ \underline E_{surroundings}</math>
                        根据牛顿第三定律有：
                        <math>W_{system}=-W_{surroundings}</math>
                        于是得到：
                        <math>Q_{system}=-Q_{surroundings}</math>
                    </p>

                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="1.2.1.2 开放系统中热力学第一定律" md-description ="" :md-done.sync="third">
                <div>
                    <p>
                        假想一个如图所示的开放系统σ：<br><br>
                        <img src="../../../public/img/basic/firstlaw_open.png" alt="" class="piclarge"><br><br>
                        其中大部分边界为刚性绝热边界（图中加厚部分），其余一部分边界允许热量交换，一部分边界允许体积改变做功，一部分边界允许物质的进出。假设进入系统的物质的量为<math inline=1>\delta n_{in}</math>。<br><br>
                        系统σ为开放系统，而系统<math inline=1>(σ+\delta n_{in})</math>为封闭系统。但系统σ与系统<math inline=1>\delta n_{in}</math>本来彼此分离、互不相干，强行将其视为一个系统的代价，就是需要环境以压力<math inline=1>p_{in}</math>对<math inline=1>\delta n_{in}</math>做<math inline=1>p_{in}V_{in}</math>的体积功，将其推入系统。<br>
                        于是我们得到对于封闭系统<math inline=1>(σ+\delta n_{in})</math>的能量变化方程：
                        <math>d\underline E_{\sigma+\delta n_{in}}=\delta Q_{\sigma} +\delta W_{\sigma} +p_{in}V_{in}\delta n_{in}</math>
                        而对于开放系统<math inline=1>\sigma</math>可以得到方程：
                        <math>d\underline E=d\underline E_{\sigma+\delta n_{in}}+\delta n_{in}E_{in}=\delta Q_{\sigma} +\delta W_{\sigma} +(p_{in}V_{in}+E_{in})\delta n_{in}</math>
                        考虑有多种物料进出系统，得到如下所示的开放系统热力学第一定律方程：<br>
                        微分形式：
                        <math class="em">d\underline E=\delta Q_{\sigma} +\delta W_{\sigma} +\sum_{in}(p_{in}V_{in}+E_{in})\delta n_{in}-\sum_{out}(p_{out}V_{out}+E_{out})\delta n_{out}</math>
                        积分形式：
                        <math class="em">△\underline E=Q_{\sigma} +W_{\sigma} +\sum_{in}\int(p_{in}V_{in}+E_{in})\delta n_{in}-\sum_{out}\int(p_{out}V_{out}+E_{out})\delta n_{out}</math>
                        
                    </p>
                </div>

                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="1.2.1.3 不同情况下方程的变化" md-description ="" :md-done.sync="fourth">
                <div>

                    <p>
                        一般而言，能量可以划分为动能、势能和内能。而在热力学中，内能主要考虑分子动能（与温度相关）和分子间作用（与分子间距离相关）。<br><br>
                        <strong>对于简单系统：</strong><br><br>
                        没有外场，系统没有动能；可以做出简化：
                        <math>\underline E=\underline U,\;E_{in}=U_{in},\;E_{out}=U_{out}</math>
                        得到简单开放系统的热力学第一定律方程：
                        <math class="inam, em">d\underline U=\delta Q_{\sigma}+\delta W_{\sigma}+ \sum_{in}H_{in}\delta n_{in}-\sum_{out}H_{out}\delta n_{out}</math><br>

                        <strong>对于复杂系统：</strong><br><br>
                        可能存在外场，即可能存在势能；系统可能有动能；因此系统能量由动能、势能和内能组成：
                        <math>\underline E=\underline E_{KE}+\underline E_{PE}+\underline U</math>
                        <math>d \underline E=d\underline E_{KE}+d\underline E_{PE}+d\underline U</math>
                        其中<math inline=1>\underline E_{KE}</math>表示系统动能，<math inline=1>\underline E_{PE}</math>表示系统势能。于是得到复杂开放系统的热力学第一定律方程：
                        <math class="inma, em">d\underline E_{KE}+d\underline E_{PE}+d\underline U=\delta Q_{\sigma}+\delta W_{\sigma}+\sum_{in}(H_{in}+gz_{in}+\frac{v^2_{in}}2)\delta n_{in}-\sum_{out}(H_{out}+gz_{out}+\frac{v^2_{out}}2)\delta n_{out}</math><br>

                        <strong>对于唯一进料、唯一出料的复杂系统稳态瞬时过程：</strong><br><br>
                        稳态表示系统中物料量和能量不随时间改变，因此有：
                        <math class="inma">\frac{d\underline E}{dt}=0,\;\frac{dN}{dt}=0</math>
                        令<math inline=1>\frac{\delta n}{dt}=\dot n</math>，得到<math inline=1>\dot n_{in}=\dot n_{out}</math>；代入复杂系统的能量守恒方程得到：
                        <math class="inma, em">\dot Q_{\sigma}+\dot W_{\sigma}=(△H_{SS}+△PE_{SS}+△KE_{SS})\dot n</math>
                        其中，<math inline=1 class="inma">△H_{SS}=H_{out}-H_{in},\;△PE_{SS}=g(z_{out}-z_{in}),\;△KE_{SS}=\frac12(v^2_{out}-v^2_{in})</math><br>
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
        max-width: 830px;
        font-size: 15px;
        line-height: 25px;
        font-family: sans-serif;
        text-align: justify;
    }
    h3{
        font-size: 16.5px;
        color:rgb(32, 8, 165);
    }
    .pic{
        max-width:300px;
    }
    .piclarge{
        max-width: 400px;
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
    .inma{
        font-size: 13px;
    }
</style>

