<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="2.1.1 多参数状态方程" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        理想气体方程表明，一定温度下，pV乘积为定值。<br>
                        而实际气体会偏离理想气体方程，需要进行对状态方程修正。根据梅尔（J.Mayer）集团理论，在考虑气体分子间作用力之后，可以用“维里系数”来表示p-V-T关系。应用统计力学方法，导出的维里方程能赋予维里系数以明确的物理意义，例如方程中<math inline =1>\frac BV</math>项表征双分子相互作用，<math inline =1>\frac C{V^2}</math>项表征三分子相互作用等。<br>
                        通过修正维里参数，衍生出许多气体状态方程。此处简要介绍其中的Berthelot维里方程和BB方程、BWR方程。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="2.1.1.1 维里方程" md-description ="" :md-done.sync="second">
                <div>
                    <p>
                        考虑用p的幂级数来表示气体状态方程，得到维里方程：
                        <math>pV=a+bp+cp^2+...</math>
                        其中，令b=aB', c=aC', ...，得到：
                        <math>pV=a(1+B'p+C'p^2+...)</math>
                        也可以用体积的幂级数表示为：
                        <math>pV=a(1+\frac BV+\frac C{V^2}+...)</math>
                        不同物质在恒温下的实验数据表明，任何气体以(pV)对p做图，在p→0时，(pV)都具有相同的极限值；所以a仅为温度的函数。规定热力学温度后，可以得到a=RT。<br>
                        原则上，上式右侧为一无穷级数。但实践上，一般只需几项就可以再现实验数据：低压时，只需两项就可表达；压力越高，需要的项数也越多。<br>
                        工程中，最常应用的是截断的两项维里方程：
                        <math class="em">pV=a(1+B'p)=RT(1+B'p)</math>
                        
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="2.1.1.2 压缩因子" md-description ="" :md-done.sync="third">
                <div>
                    <p>
                        压缩因子反映了流体偏离理想气体状态的程度。由压缩因子Z定义：
                        <math>Z=\frac{pV}{RT}</math>
                        得到维里方程下的压缩因子：
                        <math>Z=\frac{pV}{RT}=1+B'p+C'p^2+...（Berlin型）</math>
                        <math>Z=\frac{pV}{RT}=1+\frac BV+\frac C{V^2}+...（Leiden型）</math>
                        由Leiden型可以得到：
                        <math>p=\frac{RT}V(1+\frac BV+\frac C{V^2}+...)</math>
                        将上式代入Berlin型，由系数相等可以得到：
                        <math>B'=\frac B{RT},\;C'=\frac{C-B^2}{(RT)^2},\;...</math>
                        只有两个维里方程都是无穷级数时，上述关系才精确成立。当维里方程以有限项表示时，上述关系式只能是近似的。

                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="2.1.1.3 衍生方程" md-description ="Berthelot, Pitzer, BB, BWR" :md-done.sync="fourth">
                <div>
                    <h3>第二维里系数关联式</h3>
                    <p>
                        以下两个方程通过修正第二维里系数来提高方程的适用性；仅能用于非极性（或弱极性）物质。<br>
                        <strong>Berthelot</strong><br>
                        Berthelot提出，舍项维里方程中，第二维里系数的形式可以为：
                        <math>B=\frac 9{128}\frac{RT_c}{p_c}(1-6\frac{T^2_c}{T^2})</math>
                        <strong>Pitzer（普遍化维里系数方程式）</strong><br>
                        Pitzer提出如下形式的第二维里系数关联式，其中<math inline=1>\omega</math>为偏心因子，是物性。普遍化相关内容可参考2.1.3对比态部分。
                        <math>\frac {Bp_c}{RT_c}=B^{(0)}+\omega B^{(1)}</math>
                        <math>B^{(0)}=0.083-\frac{0.422}{T^{1.6}_r}</math>
                        <math>B^{(1)}=0.139-\frac{0.172}{T^{4.2}_r}</math><br>
                        
                    </p>
                    <h3>Beattie-Bridgeman方程（BB方程）</h3>
                    <div>
                        <p>
                            BB方程如下所示：
                            <math>p=RT\rho (1+B\rho)(1-\delta)-A\rho^2</math>
                        
                            其中：
                            <math>\delta=\frac{c\rho}{T^3},\;A=A_0(1-a\rho),\;B=B_0(1-b\rho)</math>
                            <math inline=1>A_0,B_0,a,b,c</math>为实验得到的物性参数。<br>
                            BB方程的维里展开式形式为：
                            <math>p=\frac {RT}V+\frac{\beta}{V^2}+\frac{\gamma}{V^3}+\frac{\delta}{V^4}</math>
                            其中：
                            <math>\beta=RTB_0-A_0-\frac{cR}{T^2}</math>
                            <math>\gamma=-RTB_0b+A_0a-\frac{cRB_0}{T^2}</math>
                            <math>\delta=\frac{RB_0bc}{T^2}</math>
                            <br>
                            方程推导：<br>
                            理想气体中，分子运动所产生的压力为ρRT，但当分子之间作用力不能忽略时，需要进行修正。考虑真实气体的压力p等于热压力<math inline=1>p_{4}</math>与内压力<math inline=1>p_i</math>之差。<br>
                            Beattie和Bridgeman根据Lorentz观点，认为真实气体的热压力总是大于理想气体的压力，而且分子体积越大，气体密度越高，则热压力就越大。因此<math inline=1>p_th</math>可以表示成密度的函数：
                            <math>p_{th}=\rho RT(1+Bp)</math>
                            高密度时，进一步认为B是密度的函数，于是得到：
                            <math>p_{th}=\rho RT(1+B_0(1-b\rho)\rho)</math>
                            同时，高密度下，由于分子间引力，分子有形成分子集团的趋向；而一个分子集团的行为相当于一个分子，所以实质上可以认为气体内实际粒子数减少而表观分子质量增大。由此，Beattie等提出摩尔气体常数修正式：
                            <math>R'=R(1-\frac{c\rho}{T^n})</math>
                            Beattie和Bridgeman研究发现，对于许多气体，n=3时能够最好地拟合。<br>
                            而对于内压<math inilne=1>p_i</math>，要考虑分子间作用力的影响。Lorentz找到了合适的公式表示内压：
                            <math>p_i=A_0\rho^2(1-a\rho)</math>
                            将以上公式代入<math inline=1>p=p_{th}-p_i</math>，即可得到BB方程。<br>
                        </p>
                    </div>
                    <div>
                        <h3>Benedict-Webb-Rubin方程（BWR方程）</h3>
                        <p>
                            Benedict，Webb和Rubin在分析Beattie-Bridgeman方程特性的基础上，为使状态方程能更好地反映高密度气体和液体区的行为，使用轻烃的实测数据，沿等密度线研究了压力与温度的关系直到高密度区，结果找到了适合气液两相的、形式与Beattie-Bridgeman方程类同的状态方程，
                            如下所示：
                            <math>
                                p=RT\rho +(B_0RT-A_0-\frac{C_0}{T^2})\rho^2+(bRT-a)\rho^3+a\alpha\rho^6+\frac{c\rho^3}{T^2}(1+\gamma\rho^2)e^{-\gamma\rho^2}
                            </math>
                            相比BB方程，BWR方程增加了经验参数<math inline=1>C_0,\alpha,\gamma</math>。
                        </p>
                    </div>
                    
                    
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
</style>

