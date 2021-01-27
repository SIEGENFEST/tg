<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical >
            <md-step id="first" md-label="2.1.3.1 Corresponding States" md-description ="对比态原理" :md-done.sync="first">
                <p>
                    对于实际气体，其状态方程与组成成分有关；而对不同成分的气体建立不同状态方程显然不可能，于是人们希望找到一个通用的方程。<br>
                    实验发现，如果气体的对比体积、对比压力和对比温度中有两个参数相同，则第三个也相同。这就是对比态定律。运用对比态原理，人们能够除去真实气体状态方程中的物质特性常数，从而得到描述的通用式。<br>
                    同时，该部分也将介绍人们为进一步提高方程精度，对通用式中压缩因子Z进行的相关修正。
                    
                </p>

                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="对比态原理相关定义" md-description ="临界参数，对比参数" :md-done.sync="second">
                <div>
                    <h3>临界参数</h3>
                    <p>
                        临界参数是物质的特性参数，包括：<br>
                        临界温度<math inline=1>T_c</math>：气体加压液化允许的最高温度；<br>
                        临界压力<math inline=1>P_c</math>：临界温度下，气体液化需要的最小压力；<br>
                        临界体积<math inline=1>V_c</math>：物质在临界温度、临界压力下的摩尔体积。<br>
                        以下纯物质的P-V图中，C点表示临界状态，为温度等于临界温度时P-V曲线的拐点；相关内容可见“1.3.4平衡与稳定”。
                    </p>
                    <img src="../../../public/img/pure/b_c_co1.png" alt="" class="piclarge"/>
                    <h3>对比参数</h3>
                    <p>
                        对比参数是状态参数与临界参数的比值。<br>
                        对比温度：<math inline=1>T_r=T/T_c</math><br>
                        对比压力：<math inline=1>P_r=P/P_c</math><br>
                        对比体积：<math inline=1>V_r=V/V_c</math><br>
                        <br>如果几种非临界态气体的对比参数值都相等，则称这几种气体处于相同的对比状态。
                    </p>
                    <h3>对比态原理</h3>
                    <p>
                        对于两种或几种气体，如果它们三个对比参数中的两个相同，那么第三个必相同。共同遵守这一定律的物质称为热力学相似物质。<br><br>
                        数学表达：<br>
                        <math class="em">f(p_r,V_r,T_r)=0</math>
                    </p>                   
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="对比态原理应用" md-description ="求取普遍化方程" :md-done.sync="third">
                <div>
                    <p>
                        普遍化方程不含与气体种类相关的常数，仅与对比参数<math inline=1>p_r，T_r，V_r</math>有关，是对任何气体都适用的方程式。
                    </p>
                    <h3>以范德华方程为例</h3>
                    <p>
                        范德华方程：
                        <math>(p+\frac a{V_m^2})(V_m-b)=RT</math>
                        临界点：温度等于临界温度时，P-V曲线上的拐点。可以由以下两式求取：
                        <math>{\left(\frac{\partial p}{\partial V}\right)}_{T_c}=0</math>
                        <math>{\left(\frac{\partial^2p}{\partial V^2}\right)}_{T_c}=0</math>
                        将<math inline=1>p=p_rp_c,\;T=T_rT_c,\;V_m=V_rV_c</math>代入状态方程得到：
                        <math>a=3p_cV_c^2,\;b=\frac13V_c,\;R=\frac83\frac{p_cV_c}{T_c}</math>
                        从而得到普遍化的范德华方程：
                        <math>(p_r+\frac 3{V_r^2})(V_r-\frac13)=\frac83T_r</math>
                    </p>
                    <h3>以理想气体状态方程为例</h3>
                    <p>
                        低压下，大多数气体服从状态方程：<math>pV_m=RT</math>
                        将<math inline=1>p=p_rp_c,\;T=T_rT_c,\;V_m=V_rV_c</math>代入得到：
                        <math>p_rV_r=\frac{RT_c}{p_cV_c}T_r</math>
                        令临界压缩因子<math inline=1>Z_c=\frac{p_cV_c}{RT_c}</math>，代入上式得到：<math >p_rV_r=\frac{T_r}{Z_c}</math><br>
                        只有当临界压缩因子为一个固定常数，上式才为普遍化方程。但是实验数据表明，不同气体的临界压缩因子并不相同，所以上式只能近似成立。为了解决该问题，人们提出改良对比态原理。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="改良对比态原理" md-description ="" :md-done.sync="fourth">
                <div>
                    <p>
                        为了解决上述问题，人们将临界压缩因子<math inline=1>Z_c</math>与对比参数关联，从而使状态方程普遍化。具体推导过程如下。<br><br>
                        引入理想对比体积<math inline=1>V_{ri}</math>:
                        <math>V_{ri}=V_rZ_c</math>
                        在理想气体状态方程中引入压缩因子Z以描述真实气体：
                        <math>pV=ZRT</math>
                        由实验数据得到，在一定精度范围内，可以考虑Z为<math inline=1>p_r,T_r</math>的函数，即令<math inline=1>Z=Z(p_r,T_r)</math>;<br>
                        将对比参数代入上式得到：
                        <math>p_rV_r=\frac{Z}{Z_c}T_r</math>
                        再引入理想对比体积，得到方程：
                        <math class="em">p_rV_{ri}=ZT_r</math>
                        其中，<math inline=1>Z=Z(p_r,T_r)</math>，所以必然有<math inline=1>V_{ri}=V(p_r,T_r)</math>，即<math inline=1>(p_r,T_r,V_{ri})</math>中仅有两个变量独立。所以方程满足<math inline=1 class="em">f(p_r,T_r,V_{ri})=0</math>，为普遍化方程。<br>
                        
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('fourth','fifth')">OK</md-button>
            </md-step>
            <md-step id="fifth" md-label="例题" md-description ="" :md-done.sync="fifth">
                <div>
                    <p> 
                        1. 试推导改良对比态下普遍化的范德华方程。
                    </p>
                    <md-button class="md-primary" @click="show('s1')">See Answer</md-button><br>
                    <p v-show="s1">
                        答案：<br>
                        <math>p_r=\frac{T_r}{V_{ri}-{\displaystyle\frac18}}-\frac{27}{64V_{ri^2}}</math>
                    </p>
                    <md-button class="md-primary" @click="hide('s1')" v-show="s1">Close Answer</md-button>
                    <p>
                        2. 已知过氯酰氟<math inline=1>(ClO_3 F)</math>的临界参数：<br><math inline=1>p_c=53.74bar，T_c=368.28K，V_c=125.02cm^3/mol</math>
                        在以下条件下：<br>
                        1) <math inline=1>T=404.42K，V=279.25 cm^3/mol</math><br>
                        2) <math inline=1>T=404.42K，V=20382 cm^3/mol</math><br>
                        试分别应用以下方程计算体系的压力。实验值分别为69.23bar和1.508bar。<br>
                        方程：普遍化vdW方程，改良的普遍化vdW方程，改良的普遍化RK方程，改良的普遍化BB方程。
                    </p>
                    <md-button class="md-primary" @click="show('s2')">See Answer</md-button><br>
                    <p v-if="s2===true">
                        答案：<br>
                        <img src="../../../public/img/pure/gas_corre.png" class="piclarge">
                    </p>
                    <md-button class="md-primary" @click="hide('s2')" v-if="s2===true">Close Answer</md-button>
                </div>
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
            s1:false,
            s2:false,
            
        }),
        methods: {
            setDone(id, index) {
                this[id] = true;
                if (index) {
                    this.active = index
                }
            },

            right(n){
                this.k=n;
            },
            wrong(n){
                this.r=n;
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
        line-height: 25px;
        font-family: sans-serif;
        text-align: justify;
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
        color: rgb(29, 209, 29);
    }
    .wr{
        color: red;
    }
</style>

