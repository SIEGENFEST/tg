<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="3.3 理想溶液" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        前面0.2.3部分对理想溶液做了简单介绍。理想溶液即为理想混合物，包括气态和液态。此处对理想溶液的热力学性质做进一步介绍。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="3.3.1 理想溶液性质" md-description ="" :md-done.sync="second">
                <div>
                    <p>
                        理想溶液中，每个组分都符合路易斯伦达尔规则，即：
                        <math class="em">\widehat f_i=x_if_i</math>
                        其中<math inline=1>\widehat f_i</math>为混合物中组分i的逸度，<math inline=1>f_i</math>为纯净物i的逸度。混合物逸度相关内容可参考3.2.2部分，此处直接使用。<br>
                    </p>
                    <h3>理想混合物性质</h3>
                    <p>
                        <math inline=1>\overline M_i</math>表示偏摩尔性质，上标id表示理想溶液，<math inline=1>M_i</math>表示纯物质性质。理想混合物中某组分的混合函数表示为：
                        <math class="ms">\triangle M^{id}_i=\overline M^{id}_i-M_i</math>
                        于是理想混合物的性质可以表示为：
                        <math class="ms">\triangle H^{id}_i=0\;,\;\triangle U^{id}_i=0\;,\;\triangle V^{id}_i=0</math>
                        <math class="ms">\triangle G^{id}_i=RT\ln x_i\;,\;\triangle A^{id}_i=RT\ln x_i\;,\;\triangle S^{id}_i=-R\ln x_i</math>
                    </p>
                    <md-button class="md-primary" @click="show('s1')">推导过程</md-button>
                    <div v-show="s1">
                        <p>
                            由<math inline=1>\widehat f_i=x_if_i</math>以及逸度相关内容，容易得到，在一定温度和组成下：
                            <math class="ms">\overline G^{id}_i=\mu^{id}_i(T,p,x_i)=RT\ln\widehat f_i=RT\ln x_if_i</math>
                            <math class="ms">G_i=\mu_i(T,p)=RT\ln f_i</math>
                            以上两式相减得到：
                            <math class="ms em">\overline G^{id}_i-G_i=RT\ln x_if_i-RT\ln f_i=RT\ln x_i</math>
                            一定温度和组成下，对p求偏导得到：
                            <math class="ms">\left(\frac {\partial \overline G^{id}_i}{\partial p}\right)_{T,x}-\left(\frac {\partial G_i}{\partial p}\right)_{T,x}=\overline V^{id}_i-V_i=0</math>
                            一定压力和组成下，对T求偏导得到：
                            <math class="ms">\left(\frac {\partial \overline G^{id}_i}{\partial T}\right)_{p,x}-\left(\frac {\partial G_i}{\partial T}\right)_{p,x}=-\overline S^{id}_i+S_i</math>
                            于是：
                            <math class="ms">\overline S^{id}_i-S_i=-R\ln x_i</math>
                            由<math inline=1>H=G+TS</math>得到：
                            <math class="ms">\overline H^{id}_i-H_i=(\overline G^{id}_i+T\overline S^{id}_i)-(G_i+TS_i)=0</math>
                            同样，由<math inline=1>U=H-pV\;,\;A=G-pV</math>可以得到：
                            <math class="ms">\overline U^{id}_i-U_i=0\;,\;\overline A^{id}_i-A_i=RT\ln x_i</math>
                        </p>
                        <md-button class="md-primary" @click="hide('s1')">close</md-button>
                    </div>
                    <p>
                        得到一个重要的表达式：
                        <math class="ms em">\mu^{id}_i(T,p,\{x\})-\mu_i(T,p)=\triangle G^{id}_i=RT\ln x_i</math><br>
                        理想混合物的总性质：
                        <math class="ms">\triangle M^{id}_t=n\sum_ix_i\triangle M^{id}_i</math>
                        <math class="ms">\triangle G^{id}_t=nRT\sum_ix_i\ln x_i\;,\;\triangle S^{id}_t=-nR\sum_ix_i\ln x_i</math>
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="3.3.2 其它溶液体系" md-description ="" :md-done.sync="third">
                <div>
                    <p>
                        除了理想溶液外，还有一些常用的溶液体系。相关特点总结如下：<br>
                        理想溶液：<math class="ms">G^E=0</math>
                        正规溶液：<math class="ms">G^E=U^E\;,\;S^E=0\;,\;V^E=0</math>
                        无热溶液：<math class="ms">G^E=-TS^E\;,\;H^E=0</math>

                    </p>
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

