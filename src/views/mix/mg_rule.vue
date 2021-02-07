<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="3.2.1 气体混合规则" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        这部分简要介绍气体混合物热力学性质的计算。包括相关混合规则和计算方法。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="3.2.1.1 Amagat定律，Dalton定律" md-description ="" :md-done.sync="second">
                <h3>Amagat定律</h3>
                <p>
                    该定律认为，混合气体体积等于各气体在压力p下的体积之和：
                    <math class="ms">V=\sum_i y_iV_i\;,\;p_1=p_2=...=p</math>
                    <br>
                    于是对于混合物：
                    <math class="ms">pV=\sum_iy_iV_ip\;,\;p=\sum_iy_ip\frac{Z_i(T,p)}{Z(T,p)}</math>
                    其中：
                    <math class="ms">Z(T,p)=\sum_iy_iZ_i(T,p)</math><br>
                    用Amagat定律计算时，直接由T,p查出<math inline=1>Z_i</math>，进行计算：
                    <math class="ms">Z=\sum_i Z_i\;,\;V=\frac {ZRT}p</math>
                    
                </p>
                <h3>Dalton定律</h3>
                <p>
                    该定律认为，混合气体中各组分压力等于它在同温度下独占总体积产生的压力；可见该定律没有考虑各组分的相互作用。
                    <math class="ms">p_i\left(\frac {V}{y_i}\right)=p_iV_i </math>
                    对于混合物：
                    <math class="ms">p_i=y_ip\frac{Z_i\left(T,p_i\right)}{Z\left(T,p\right)}</math>
                    求和后得到：
                    <math class="ms">\sum_{i=1}^cp_i=p\sum_{i=1}^cy_i\frac{Z_i\left(T,p_i\right)}{Z\left(T,p\right)}\;,\;Z\left(T,p\right)=\overset c{\underset{i=1}{\sum}} y_iZ_i\left(T,p_i\right)</math>
                    对于Dalton定律，应当有<math inline=1>\overset c{\underset{i=1}{\sum}}p_i=1</math>；但对于真实气体并不成立。<br><br>

                    用Dalton定律计算时，先假设<math inline=1>p_i=py_i</math>，从而查出<math inline=1>Z_i</math>；进行计算：
                    <math class="ms">Z=\sum_i Z_iy_i\;,\;V=\frac {ZRT}p\;,\;p'_i=\frac{Z_iRT}V</math>
                    如果得到的<math inline=1>p'_i\neq p_i</math>则令<math inline=1>p_i=p'_i</math>进行迭代直至相等。<br><br>
                    相关例题可见《化工热力学》71页，此处省略。
                </p>

                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="3.2.1.2 vdW混合规则" md-description ="" :md-done.sync="third">
                <div>
                    <p>
                        状态方程通常是针对纯物质的，拓展应用到混合物需要混合规则。此处仅对未改进的van der Waals混合规则做简单介绍。<br>
                        数学上，对于第二维里系数：
                        <math class="ms">B=\sum_i\sum_jx_ix_jB_{ij}</math>
                        vdW方程中参数b的混合规则即认为<math inline=1>B_{ij}=(B_i+B_j)/2</math>，得到：
                        <math class="ms">B=\sum_ix_iB_i</math>
                        参数a的混合规则认为<math inline=1>B_{ij}=(B_i+B_j)^{0.5}</math>，得到：
                        <math class="ms">B=\left(\sum_ix_iB_i^{0.5}\right)^2</math>
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

