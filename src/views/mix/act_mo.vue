<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="3.4.2 活度系数模型" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        为了相平衡的相关计算，需要得到溶液的化学势，因此需要求取活度系数。<br>
                        在前一部分，得到活度系数方程：
                        <math class="ms">RT\ln  \gamma_i=\overline G^E_i=\left(\frac {\partial nG^E}{\partial n_i}\right)_{T,p,n_{j\neq i}}</math>
                        通过构建溶液的物理模型，可以获得超额吉布斯自由能表达式，再由上述方程得到活度系数的表达式。以下对常用的活度系数模型进行介绍。

                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="3.4.2.1 理论模型" md-description ="SH方程，FH方程" :md-done.sync="second">
                <div>
                    <p>
                        以下介绍<span class="em">二元体系</span>下，由理论模型获得的Scatchard-Hildebrand方程，Flory-Huggins方程。<br>
                    </p>
                    <button class="bu" @click="show('sh')">Scatchard-Hildebrand方程</button>
                    <div v-show="sh">
                        <p>
                            预测性方程，不包含经验参数。方程得到的活度系数恒大于1，所以只能预测正偏差。<br><br>
                            <strong>方程适用范围：</strong>正规溶液<br><br>
                            <strong>方程形式：</strong><br>
                            <math class="ms em">\ln\gamma_1=\frac{V_1\left(\delta_1-\delta_2\right)^2}{RT}\phi_2^2\;\;\;\;\;\;\ln\gamma_2=\frac{V_2\left(\delta_1-\delta_2\right)^2}{RT}\phi_1^2</math>
                            其中，<math inline=1>\phi_i</math>表示组分i的体积分数：
                            <math class="ms">\phi_1\equiv\frac {x_1V_1}{x_1V_1+x_2V_2}\;\;\;\;\;\;\phi_2\equiv\frac {x_2V_2}{x_1V_1+x_2V_2}</math>
                            <math inline=1>\delta_i</math>表示组分i的溶解度参数，可以查表得到。<br><br>
                            <strong>方程推导：</strong><br><br>
                            假想将溶液混合过程拆分为如下路径：<br><br>
                            <img src="../../../public/img/mix/sh1.png" class="piclarge" alt=""><br>
                            <small>（图片来源：高光华 化工热力学[M]. 第3版. 北京: 清华大学出版社, 2017；图7-1）</small><br><br>
                            定义<math inline=1>c</math>为内聚能密度，与完全蒸发能<math inline=1>\triangle U^{evp}_i</math>有如下关系：
                            <math class="ms">c\equiv\frac {\triangle U^{evp}}{V^L}</math>
                            于是对于二元体系有：
                            <math class="ms">U_1=c_{11}V_1\;\;\;\;U_2=c_{22}V_2</math>
                            <math class="ms">U^E=\triangle U^E=U-x_1U_1-x_2U_2=(c_{11}+c_{22}-2c_{12})\phi_1\phi_2(x_1V_1+x_2V_2) </math>
                            假设对于吸引力主要为色散力的分子，其内聚能密度有：
                            <math class="ms">c_{12}=(c_{11}c_{22})^{1/2}</math>
                            定义溶解度参数<math inline=1>\delta_i</math>：
                            <math class="ms">\delta_i=c_{ii}^{1/2}=\left(\frac {\triangle U_i^{evp}}{V_i^L}\right)^{1/2}</math>
                            因为是正规溶液，所以摩尔超额吉布斯自由能等于摩尔超额内能：
                            <math class="ms">G^E=U^E=(x_1V_1+x_2V_2)\phi_1\phi_2(\delta_1-\delta_2)^2 </math>
                            再由方程：
                            <math class="ms">RT\ln\gamma_i=\left(\frac {\partial nG^E}{\partial n_i}\right)_{T,p,n_{j\neq i}}</math>即可得到SH方程。<br>
                            SH方程预测实际溶液与理想溶液偏离的程度，如果两种分子溶解度系数相近则溶液与理想溶液相近，方程预测结果反而可能不准确。<br><br>
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('sh')">close</md-button>
                    </div>
                    <br><br><button class="bu" @click="show('fh')">Flory-Huggins方程</button>
                    <div v-show="fh">
                        <p><br>
                            <strong>适用范围：</strong><br>
                            分子尺寸大小明显不同的液体混合物，特别是由有机溶剂和聚合物为溶质组成的高聚物溶液。<br><br>

                            <strong>方程形式：</strong><br>
                            对于无热溶液，只能预测负偏差：
                            <math class="ms">\ln\gamma_1=\ln\left(\phi_1/x_1\right)+1-\phi_1/x_1\;\;\;\;\;\;\ln\gamma_2=\ln\left(\phi_2/x_2\right)+1-\phi_2/x_2</math>

                            改进后，考虑混合焓不为0的溶液：
                            <math class="ms em">\ln\gamma_1=\ln\frac{\phi_1}{x_1}+\left(1-\frac1m\right)\phi_2+\chi\phi_2^2\;\;\;\;\;\;\ln\gamma_2=\ln\frac{\phi_2}{x_2}-\left(m-1\right)\phi_1+m\chi\phi_1^2</math>
                            <br><br>
                            <strong>方程推导：</strong><br>
                            对高分子溶液做如下假设：<br>
                            1. 高分子链由m个链接组成，每个链接大小与溶剂分子相同；<br>
                            2. 高分子和溶剂分子只能出现在晶格上；<br>
                            3. 所有晶格点被高分子或者溶剂分子占据。<br><br>
                            由假设可以看出，FH方程只考虑了分子的体积，并未考虑表面积等其它性质。<br>
                            根据以上假设可以得到，对于摩尔量为<math inline=1>N_1</math>的有机溶剂和摩尔量为<math inline=1>N_2</math>聚合物组成的二元混合物，组分的体积分数等于所占数密度：
                            <math class="ms">\phi_1=\frac {N_1}{N_1+mN_2}\;\;\;\;\;\;\phi_2=\frac {mN_2}{N_1+mN_2}</math>
                            计算得到摩尔混合熵：
                            <math class="ms">\triangle S_{mix}=-R(x_1\ln\phi_1+x_2\ln\phi_2)</math>
                            超额混合熵：
                            <math class="ms">S^E=\triangle S_{mix}-\triangle S^{id}_{mix}=-R\left[x_1\ln\frac {\phi_1}{x_1}+x_2\ln\frac {\phi_2}{x_2}\right]</math>
                            考虑无热溶液<math inline=1>H^E=0</math>，得到：
                            <math class="ms">G^E=-TS^E=RT\left(x_1\ln\frac {\phi_1}{x_1}+x_2\ln\frac {\phi_2}{x_2}\right)</math>
                            偏导后即得到组分i的活度系数。可见活度系数恒小于1，即只能预测负偏差。<br><br>
                            改进无热FH方程，假设聚合物与溶剂分子间存在相互作用，即存在混合热：
                            <math class="ms">\triangle H_mix=H^E=\chi RT(x_1+mx_2)\phi_1\phi_2</math>
                            其中<math inline=1>\chi</math>为Flory相互作用参数。于是对于超额吉布斯自由能，可以得到方程：
                            <math class="ms">\frac {G^E}{RT}=\frac 1{RT}(H^E-TS^E)=\left(x_1\ln\frac {\phi_1}{x_1}+x_2\ln\frac {\phi_2}{x_2}\right)+ \chi RT(x_1+mx_2)\phi_1\phi_2</math>
                            前面一项为混合熵的贡献，后面一项为混合焓的贡献。偏导后即可得到改进后的FH活度系数方程，可以预测正偏差和负偏差。
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('fh')">close</md-button>
                    </div>
                </div>
                <br><br><md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="3.4.2.2 经验模型" md-description ="Wohl方程，Wilson方程，NRTL方程，UNIQUAC模型" :md-done.sync="third">
                <div>
                    <p>
                        以下介绍含有经验参数的模型。
                    </p>
                    <button class="bu md-raised" @click="show('woh')">Wohl方程</button>
                    <div v-show="woh">
                        <p>
                            <strong>适用范围：</strong>正规溶液<br><br>
                            <strong>方程形式：</strong><br>
                            <math class="ms">\ln\gamma_1=Z_2^2\left[A_{12}+2Z_1\left(A_{21}\frac{q_1}{q_2}-A_{12}\right)\right]</math>
                            <math class="ms">\ln\gamma_2=Z_1^2\left[A_{21}+2Z_2\left(A_{12}\frac{q_2}{q_1}-A_{21}\right)\right]</math><br>

                            <strong>方程推导：</strong><br>
                            对于正规溶液，<math inline=1>S^E=0</math>，因此<math inline=1>G^E=H^E</math>；Wohl提出超额自由焓的表达式：
                            <math class="ms">G^E/(RT\sum_ix_iq_i)=\sum_i\sum_jZ_iZ_ja_{ij}+\sum_i\sum_j\sum_kZ_iZ_jZ_ka_{ijk}+...</math>
                            其中，<math inline=1>q_i</math>是组分i的有效摩尔体积。有效体积分数：
                            <math class="ms">Z_i=x_iq_i/\sum_jx_jq_j=n_iq_i/\sum_jn_jq_j</math>
                            其中<math inline=1>a_{ij},\;a_{ijk}</math>分别是ij两分子和ijk三分子之间的交互作用参数，而<math inline=1>a_{ii},\;a_{iii}</math>均为0；将以上方程应用于二元体系，并只保留到三分子相互作用的贡献，得到：
                            <math class="ms">\frac{G^E}{RT\left(q_1x_1+q_2x_2\right)}=Z_1Z_2a_{12}+Z_2Z_1a_{21}+Z_1Z_1Z_2a_{112}\\
                                +Z_1Z_2Z_1a_{121}+Z_2Z_1Z_1a_{211}+Z_1Z_2Z_2a_{122}+Z_2Z_1Z_2a_{212}+Z_2Z_2Z_1a_{221}
                            </math>
                            因为相互作用与排列次序无关，于是有：
                            <math class="ms">a_{12}=a_{21},\;a_{112}=a_{121}=a_{211},\;a_{221}=a_{212}=a_{122}</math>
                            于是得到简化的方程：
                            <math class="ms">\frac{G^E}{RT}=\left(x_1+\frac{q_2}{q_1}x_2\right)Z_1Z_2\left[Z_1q_1\left(2a_{12}+3a_{112}\right)+Z_2q_1\left(2a_{12}+3a_{122}\right)\right]</math>
                            令<math inline=1>A_{12}=q_1\left(2a_{12}+3a_{122}\right),\;A_{21}=q_2\left(2a_{12}+3a_{112}\right)</math>，得到：
                            <math class="ms">\frac{G^E}{RT}=\left(x_1+\frac{q_2}{q_1}x_2\right)Z_1Z_2\left[Z_1A_{21}\frac{q_1}{q_2}+Z_2A_{12}\right]</math>
                            <math class="ms">\frac{nG^E}{RT}=\frac{n_1^2n_2A_{21}+n_1n_2^2\left({\displaystyle\frac{q_2}{q_1}}\right)^2A_{12}}{\left(n_1+n_2{\displaystyle\frac{q_2}{q_1}}\right)^2}</math>
                            偏导后即得到活度系数公式：
                            <math class="ms">\ln\gamma_1=Z_2^2\left[A_{12}+2Z_1\left(A_{21}\frac{q_1}{q_2}-A_{12}\right)\right]</math>
                            <math class="ms">\ln\gamma_2=Z_1^2\left[A_{21}+2Z_2\left(A_{12}\frac{q_2}{q_1}-A_{21}\right)\right]</math><br>

                            <strong>不同假设下的简化：</strong><br>
                            采用不同的简化假设，从Wohl方程衍生如下方程：<br><br>
                            <span class="bl">1. Scatchard-Hamer方程</span><br>
                            用纯组分的摩尔体积来取代有效摩尔体积<math inline=1>q_1,\;q_2</math>，方程简化为：
                            <math class="ms">\ln\gamma_1=Z_2^2\left[A_{12}+2Z_1\left(A_{21}\frac{V_1}{V_2}-A_{12}\right)\right]</math>
                            <math class="ms">\ln\gamma_2=Z_1^2\left[A_{21}+2Z_2\left(A_{12}\frac{V_2}{V_1}-A_{21}\right)\right]</math>
                            <span class="bl"> 2. van Laar方程</span><br>
                            对于化学上差别不大但分子大小不同的两组分，并且只考虑两分子间的相互作用，可以得到：
                            <math class="ms">\frac {q_2}{q_1}=\frac {A_{21}}{A_{12}}</math>
                            方程简化为：
                            <math class="ms">\ln\gamma_1=\frac{A_{12}}{\left(1+{\displaystyle\frac{A_{12}}{A_{21}}}{\displaystyle\frac{x_1}{x_2}}\right)^2}\;\;\;\;\;\;\ln\gamma_2=\frac{A_{21}}{\left(1+{\displaystyle\frac{A_{21}}{A_{12}}}{\displaystyle\frac{x_2}{x_1}}\right)^2}</math>
                            该方程仅适用于一定的温度或压力下非极性或弱极性流体。<br><br>
                            <span class="bl"> 3. Margules方程</span><br>
                            对于化学上差别不大且组分分子大小差不多的二元溶液，可以令<math inline=1>q_2=q_1</math>，得到方程：
                            <math class="ms">\ln\gamma_1=x_2^2\left[A_{12}+2x_1\left(A_{21}-A_{12}\right)\right]</math>
                            <math class="ms">\ln\gamma_2=x_1^2\left[A_{21}+2x_2\left(A_{12}-A_{21}\right)\right]</math>
                            <span class="bl"> 4. 对称性方程</span><br>
                            令<math inline=1>A_{12}=A_{21}</math>，得到<math inline=1>q_1=q_2</math>，方程简化为：
                            <math class="ms">\ln\gamma_1=A_{12}x_2^2\;\;\;\;\;\;\ln\gamma_2=A_{21}x_1^2</math>
                            该方程显然不适用于实际情况，只能用于估算。
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('woh')">close</md-button>
                    </div>
                    <br><br><button class="bu" @click="show('wil')">Wilson方程</button>
                    <div v-show="wil">
                        <p>
                            <strong>适用范围：</strong><br>
                            <strong>方程形式：</strong><br>
                            <strong>方程推导：</strong><br>
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('wil')">close</md-button>
                    </div>
                    <br><br><button class="bu" @click="show('nrtl')">NRTL方程</button>
                    <div v-show="nrtl">
                        <p>
                            <strong>适用范围：</strong><br>
                            <strong>方程形式：</strong><br>
                            <strong>方程推导：</strong><br>
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('nrtl')">close</md-button>
                    </div>
                    <br><br><button class="bu" @click="show('unic')">UNIQUAC模型</button>
                    <div v-show="unic">
                        <p>
                            <strong>适用范围：</strong><br>
                            <strong>方程形式：</strong><br>
                            <strong>方程推导：</strong><br>
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('unic')">close</md-button>
                    </div>
                </div>
                <br><br><md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="3.4.2.3 基团贡献模型" md-description ="ASOG法，UNIFAC模型" :md-done.sync="fourth">

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
            k: 0,
            r: 0,
            s1: false,
            s2: false,
            sh:false,
            fh:false,
            woh:false,
            wil:false,
            unic:false,
            nrtl:false,
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
            //@click="show('s1')" 注意变量名要作为字符串传入函数；this[t]就会在data里面找这个变量(此处为s1)并且可以修改。否则函数只能修改形参而不能修改data里的值。
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
    small{
        font-size: 10px;
        color: grey;
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
    .bl{
        color:rgb(0, 0, 184);
    }
    .bu{
        background-color: rgba(0, 0, 0, 0);
        font-size: 16.5px;
        color:rgb(32, 8, 165);
        border: gray;
        line-height: 27px;
        font-family: sans-serif;
        text-align: justify;
        font-weight: bold;
        cursor: pointer;
    }
</style>

