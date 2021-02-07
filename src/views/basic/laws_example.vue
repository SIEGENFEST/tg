<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="Example 1 伯努利方程的推导" md-description ="" :md-done.sync="first">
                <div>
                    <h3>从热力学第一定律推导伯努利方程</h3>
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
                <div>
                    <p v-show="s1">
                        伯努利方程适用于稳定流动，所以控制体内能量不随时间变化，因此有<math inline=1 class="ri">\frac{d\underline E}{dt}=0</math>
                    </p>
                    <p v-show="s2||s5">
                        管道流动中，环境与系统的热交换可以忽略，<math inline=1 class="ri">{\dot Q}_\sigma=0 </math>
                    </p>
                    <p v-show="s3||s5">
                        控制体为刚性壁面，系统体积不发生变化，<math inline=1 class="ri">{\dot W}_\sigma=0 </math>
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
                </div></div>
                <br><md-button class="md-raised md-primary" @click="setDone('first','second')">Next Example</md-button>
            </md-step>
            <md-step id="second" md-label="Example 2 化工过程中的简化" md-description ="" :md-done.sync="second">
                <div>
                    <h3>
                        写出稳定流动系统热力学第一定律的一般形式，并针对化工生产过程中， 流体流经透平、泵、换热器的情况进行适当的简化。
                    </h3>
                    <p>                        
                        对于稳定流动系统，控制体内热力学第一定律表达式为：<br>
                        <math>{\dot Q}_\sigma+{\dot W}_\sigma=(\bigtriangleup H_{SS} +\bigtriangleup PE_{SS}+\bigtriangleup KE_{SS})\dot n</math>
                        而对于单位质量流体：
                        <math>Q+W=\bigtriangleup H+\frac12 \bigtriangleup u^2+g\bigtriangleup z</math>
                    </p>
                    <div>
                        <p>
                            <strong>1. 透平机、泵、压缩机等设备：</strong><br>
                            请从以下热力学第一定律方程中，点击选择你认为可以简化的项：
                        </p>
                        <button class="bu" @click="show('s8'),hide('h8')" v-show="h8"><math inline=1>Q+</math></button>
                        <button class="bu" @click="judge('r4')"><math inline=1 :class="{wr:r4}">W</math></button>
                        <button class="bu"><math inline=1>=</math></button>
                        <button class="bu" @click="judge('r5')"><math inline=1 :class="{wr:r5}">△H</math></button>
                        <button class="bu" @click="show('s6'),hide('h6')" v-show="h6"><math inline=1>+\frac12 △u^2</math></button>
                        <button class="bu" @click="show('s7'),hide('h7')" v-show="h7"><math inline=1>+g△z</math></button><br>
                        <md-button class="md-primary" @click="show('s6'),show('s7'),show('s8'),show('s9'),hide('h6'),hide('h7'),hide('h8'),hide('h10')" v-show="h10&&(s6&&s7&&s8)===false">不懂，看答案</md-button><br>
                        <div >
                            <p v-show="s6&&s7">
                                数量级上，动能项、势能项与焓变相比可以忽略，即<math inline=1 class="ri">\frac12 △u^2\approx 0,\;g△z\approx 0</math>
                            </p>
                            <p v-show="s8"> 
                                流体经过设备的时间很短；相比于设备对流体做的功W，流体与设备的换热量可以忽略不计，因此有<math inline=1 class="ri">Q\approx 0</math>
                            </p>
                            <p v-show="s9||s6&&s7&&s8">
                                于是我们得到上式，即设备对流体的做功量等于流体的焓变。
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>
                            <br><strong>2.换热器：</strong><br>
                            与上一部分相似，动能项和势能项可以忽略不计；换热器对流体做功W=0。因此方程简化为：
                            <math>W=△H</math>
                            即设备与流体的换热量等于流体的焓变。
                        </p>
                    </div>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">Next Example</md-button>
            </md-step>
            <md-step id="third" md-label="Example 3" md-description ="活塞连通两个系统" :md-done.sync="third">
                <div>
                    <p>
                        如图所示，两个封闭的绝热容器由一个活塞连接。容器A充满了压力为2bar、温度为300K的氦气，容器B充满了压力为1bar、温度为300K的氦气。活塞由铆钉固定。当固定栓拔出时，因为两个容器之间存在压力差，活塞会发生移动，假设活塞与壁面存在一定的摩擦力，问：<br>
                        <strong>
                            1. 如果活塞为金属材质，且不与空气换热，试求两个容器最终的温度。<br>
                            2. 如果活塞为绝热材质，试求两个容器最终的温度。
                        </strong><br>
                        <img src="../../../public/img/basic/first_exam3.png" alt="" class="piclarge">
                    </p>
                    <md-button class="md-primary" @click="show('s10')">See Answer</md-button>
                    <p v-show="s10">
                        解析：<br>
                        将A容器内的气体和B容器内的气体视为复合系统(A+B)，由封闭系统热力学第一定律得到方程：
                        <math>△\underline E_{A+B}=Q_{A+B}+W_{A+B}</math>
                        由于系统(A+B)是绝热系统，且不对外做功（刚性壁面）。于是有：
                        <math>Q_{A+B}=0,\;W_{A+B}=0</math>
                        代入上式得：
                        <math>△\underline E_{A+B}=△\underline E_A+△\underline E_B=0</math>
                        又由于A、B都为简单系统，所以:
                        <math >△\underline E_A=△\underline U_A,\;△\underline E_B=△\underline U_B</math>
                        容器内压力较低，氦气可以视为理想气体。于是得到:
                        <math>△\underline U_A=N_A△U_A=N_AC_V(T_{A,f}-T_{A,i}),\;△\underline U_B=N_B△U_B=N_BC_V(T_{B,f}-T_{B,i})</math>
                        带回上式得到：
                        <math class="em">N_AC_V(T_{A,f}-T_{A,i})=-N_BC_V(T_{B,f}-T_{B,i})</math>
                        <br>
                        1. 当活塞为金属材质时：<br>
                        认为AB之间完全导热，即:
                        <math>T_{A,f}=T_{B,f}=T_f</math>
                        代入上式得：
                        <math>T_f=\frac{N_AT_{A,i}+N_BT_{B,i}}{N_A+N_B}=300K</math>
                        <br>
                        2. 当活塞绝热时：<br>
                        A系统膨胀对外做功，温度下降；B系统受外界做功，温度上升。具体的温度变化由活塞摩擦力的分布决定。以下考虑极端情况：<br>
                        (1) A系统处的活塞没有摩擦：<br>
                        A系统的封闭系统第一定律方程：
                        <math>d\underline U_A=\delta Q_A+\delta W_A</math>
                        因为没有摩擦，所以<math inline=1>\delta  Q_A=0</math>，于是有：
                        <math>d\underline U_A=-P_Ad\underline V_A=N_AC_VdT_A</math>
                        对理想气体方程pV=nRT两端微分得到：
                        <math> \underline V_AdP_A+p_Ad\underline V_A=N_ARdT_A</math>
                        联立以上两式得到：
                        <math>\frac{T_{A,f}}{T_{A,i}}=(\left\frac{P_{A,f}}{P_{A,i}}\right)^{\fracR{C_V+R}}</math>
                        平衡时AB压力相等；(A+B)系统总体积不变，物质的量不变。于是我们解得：
                        <math>T_{A,f}=267K,\;T_{B,f}=366K</math><br>
                        (2) B系统处的活塞没有摩擦：<br>
                        同理，得到：
                        <math>T_{A,f}=273K,\;T_{B,f}=354K</math>
                    </p>
                    <md-button class="md-primary" @click="hide('s10')" v-show="s10">Close Answer</md-button>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="Example 4" md-description ="储罐放水" :md-done.sync="fourth">
                <div>
                    <p>
                        如图所示，右侧储水罐体积<math inline=1>V=4m^3</math>，含有<math inline=1>V=2m^3</math>的不可压缩液体，上方为1bar，280K的气体。储罐通过管道与左侧空气罐连通，空气罐内充满100bar，300K的空气。阀门1、2都处于关闭状态。<br>
                        打开阀门1，当右侧储罐内压力达到5bar时，打开阀门2使水以<math inline=1>u=0.2m^3/s</math>的速度流出，并保持储罐内5bar的气体压力。气体可视为理想，恒压热容为20.9J/(mol·K)。问：<br>
                        <strong>
                            1. 储罐压力刚达到5bar时空气温度为多少？<br>
                            2. 储罐中液体刚排空时空气温度为多少？<br>
                        </strong>
                    </p>
                    <img src="../../../public/img/basic/first_exam4.png" alt="" class="piclarge"><br>
                    <md-button class="md-primary" @click="show('s11')">See Answer</md-button>
                    <p v-show="s11">
                        解析：<br>
                        <strong>1. 恒容加压过程</strong><br>
                        将储罐中液体上方空气视为简单开放系统。简单开放系统的热力学第一定律方程：
                        <math>d\underline U=\delta Q_{\sigma}+\delta W_{\sigma}+H_{in}\delta n_{in}-H_{out}\delta n_{out}</math>
                        系统绝热，<math inline=1>\delta Q_{\sigma}=0</math>；恒容，<math inline=1>\delta W_{\sigma}=0</math>；无出料，<math inline=1>\delta n_{out}=0</math>；对广度U微分得到：
                        <math>d\underline U=d(NU)=UdN+NdU</math>
                        于是得到简化的方程：
                        <math>NdU+UdN=H_{in}\delta n_{in}=H_{in}dN</math>
                        积分并结合理想气体状态方程得到：
                        <math class="em">\frac{H_{in}-U_i}{H_{in}-U}=\fracN{N_i}=\frac{T_iP}{P_iT}</math>
                        以<math inline=1>T_0</math>为参考态：
                        <math>H_{in}=C_p(T_{in}-T_0)+H_0,\;U=C_V(T-T_0)+U_0,\;C_p=C_V+R</math>
                        带回上式，解得T=382K。<br><br>

                        <strong>2. 恒压放水过程</strong><br>
                        依然将储罐中液体上方空气视为简单开放系统。<br>
                        系统绝热，<math inline=1>\delta Q_{\sigma}=0</math>；无出料，<math inline=1>\delta n_{out}=0</math>；恒压，对做功进行微分：
                        <math>\delta W_{\sigma}=-pd\underline V=-pNdV-pVdN</math>
                        于是得到简化的方程：
                        <math>UdN+NdU=-pNdV-pVdN+H_{in}dN</math>
                        积分，且由H=U+pV得到：
                        <math>\frac{H_{in}-H_i}{H_{in}-H}=\fracN{N_i}=\frac{T_{in}-T_i}{T_{in}-T}</math>
                        注意，其中<math inline=1>T_i=382K</math><br>
                        代入数据后得到T=336K。
                    </p>
                    <md-button class="md-primary" @click="hide('s11')" v-show="s11">Close Answer</md-button>
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
            k1: 0,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0,
            r5: 0,
            s1: false,
            s2: false,
            s3: false,
            s4: false,
            s5: false,
            s6: false,
            s7: false,
            s8: false,
            s9: false,
            s10:false,
            s11:false,
            h1: true,
            h2: true,
            h3: true,
            h4: true,
            h5: true,
            h6: true,
            h7: true,
            h8: true,
            h9: true,
            h10: true,
            
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
    h3{
        font-size: 16.5px;
        color:rgb(32, 8, 165);
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
    .bu{
        border: 0px;
        color: grey;
        background-color: transparent;
        height: 18px;
        font-size: 15px;
        float: left;
        width: auto;
        cursor: pointer;
    }
    .bu2{
        border: 0px;
        color: grey;
        background-color: transparent;
        height: 18px;
        font-size: 18px;
        float: left;
        width: auto;
        cursor: pointer;
    }
</style>

