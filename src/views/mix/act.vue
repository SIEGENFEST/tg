<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="3.4.1 活度" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        非理想溶液的化学势可以用逸度表示。为了表示方便，在理想溶液的基础上，用活度代替组分进行校正，称为有效浓度。这部分将介绍活度、活度系数以及相关模型。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="3.4.1.1 活度和活度系数" md-description ="" :md-done.sync="second">
                <div>
                    <h3>活度</h3>
                    <p>
                        已知对于理想溶液有方程：
                        <math class="ms">\mu^{id}_i(T,p,\{x\})-\mu_i(T,p)=RT\ln x_i</math>
                        与气体混合物相似，对于非理想溶液，用活度<math inline=1>a_i</math>进行校正：
                        <math class="ms">\mu_i(T,p,\{x\})-\mu_i(T,p)=RT\ln\frac {a_i}{a_0}</math>
                        <math inline=1>x_i\rightarrow 1,\; a_i\rightarrow 1</math>；参比态为<span class="em">同等温度压力下的纯物质</span>，其活度为1，故通常省略，得到：
                        <math class="ms em">RT\ln{a_i}=\mu_i(T,p,\{x\})-\mu_i(T,p)</math>
                        理想溶液的活度就等于浓度。<br>
                        结合逸度相关知识，容易发现：
                        <math class="ms">a_i=\frac {\widehat f^L_i(T,p,\{x\})}{f^L_i(T,p)}</math>
                        因此活度又称为相对逸度。<br>
                        因为理想溶液的表达式符合拉乌尔定律，所以此处默认以同温同压下的纯液体为参比态；活度的定义也可以采用其它参比态，但需要加以说明。
                    </p>
                    <h3>活度系数</h3>
                    <p>
                        活度系数定义：
                        <math class="ms">\gamma_i\equiv \frac {a_i}{x_i}</math>
                        活度系数可以描述实际溶液的非理想行为：<br>
                        <math inline=1>\gamma_i{>}1</math>，<math inline=1>\widehat f^L_i(T,p,\{x\}){>}x_if^L_i(T,p)</math>，组分i易挥发，为正偏差的非理想溶液；<br>
                        反之，则组分i不易挥发，为负偏差的非理想溶液。

                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="3.4.1.2 活度系数和吉布斯自由能" md-description ="" :md-done.sync="third">
                <div>
                    <p>
                        结合超额函数和活度相关知识，可以得到：
                        <math class="ms em">G^E=\sum_ix_iRT\ln\gamma_i\;\;\;\;\;\;\overline G^E_i=RT\ln\gamma_i</math>
                    </p>
                    <md-button class="md-primary" @click="show('s1')">推导过程</md-button>
                    <div v-show="s1">
                        <p>
                            <math class="ms">G^E=\sum_ix_i\overline G_i-\sum_ix_i\overline G_i^{id}</math>
                            其中：
                            <math class="ms">\overline G_i=\mu_i(T,p,\{x\})\;,\;\overline G_i^{id}=\mu_i^{id}(T,p,\{x\})</math>
                            于是原式变化为：
                            <math class="ms">G^E=\sum_ix_i[(\mu_i(T,p,\{x\})-\mu_i(T,p))-(\mu_i^{id}(T,p,\{x\})-\mu_i(T,p))]</math>
                            结合活度定义得到：
                            <math class="ms">G^E=RT\sum_ix_i\ln a_i-RT\sum_ix_i\ln x_i=\sum_ix_iRT\ln\gamma_i</math>
                            又有：
                            <math class="ms">G^E=\sum_ix_i\overline G^E_i</math>
                            于是得到：
                            <math class="ms">\overline G^E_i=RT\ln \gamma_i</math>
                        </p>
                        <md-button class="md-primary" @click="hide('s1')">close</md-button>
                    </div>
                    <p>
                        可以得到活度系数形式的Gibbs-Duhem方程：
                        <math class="ms">-\left(\frac {H^E}{RT^2}\right)\operatorname dT+\left(\frac {V^E}{RT}\right)\operatorname dp-\sum_ix_i\operatorname d\ln\gamma_i=0</math>
                        一定温度压力下，化简得到：
                        <math class="ms em">\sum_ix_i\operatorname d\ln \gamma_i=0</math>
                    </p>
                    <md-button class="md-primary" @click="show('s2')">推导过程</md-button>
                    <div v-show="s2">
                        <p>
                            由欧拉定理和相关热力学方程得到：
                            <math class="ms">G^E_t=\sum_in_i\overline G^E_i=\sum_in_iRT\ln\gamma_i \;\rightarrow \;\operatorname dG^E_t=\sum_in_i\operatorname d(RT\ln\gamma_i)+\sum_iRT\ln\gamma_i\operatorname dn_i</math>
                            <math class="ms">\operatorname dG^E_t=-nS^E\operatorname dT+nV^E\operatorname dp+\sum_iRT\ln\gamma_i\operatorname dn_i</math>
                            相减并且取强度量，得到：
                            <math class="ms">-S^E\operatorname dT+V^E\operatorname dp-\sum_ix_i\operatorname d(RT\ln \gamma_i)=0</math>
                            其中：
                            <math class="ms">\operatorname d(RT\ln\gamma_i)=R\ln\gamma_i\operatorname dT+RT\operatorname d\ln\gamma_i</math>
                            <math class="ms">\sum_iR\ln\gamma_i\operatorname dT=\frac {G^E}T\operatorname dT=-\frac{H^E}T\operatorname dT+S^E\operatorname dT </math>
                            即可得到：
                            <math class="ms">-\left(\frac {H^E}{RT^2}\right)\operatorname dT+\left(\frac {V^E}{RT}\right)\operatorname dp-\sum_ix_i\operatorname d\ln\gamma_i=0</math>
                        </p>
                        <md-button class="md-primary" @click="hide('s2')">close</md-button>
                    </div>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','third')">OK</md-button>
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

