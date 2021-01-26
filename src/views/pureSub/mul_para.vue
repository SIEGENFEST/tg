<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="2.1.1 多参数状态方程" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        理想气体方程表明，一定温度下，pV乘积为定值。<br>
                        而实际气体会偏离理想气体方程。根据梅尔（J.Mayer）集团理论，在考虑气体分子间作用力之后，可以用“维里系数”来表示p-V-T关系。应用统计力学方法，导出的维里方程能赋予维里系数以明确的物理意义，例如方程中B/V项表征双分子相互作用，<math inline =1>C/V^2</math>表征三分子相互作用等。<br>
                        通过修正维里参数，衍生出许多气体状态方程。此处简要介绍Berthelot维里方程和两参数、三参数维里方程。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="2.1.1.1 维里方程" md-description ="" :md-done.sync="second">
                <div>
                    <p>
                        考虑用p的幂级数来表示气体状态方程，得到维里方程：
                        <math>pV=a+bp+cp^2+...</math>
                        其中，令b=aB',c=aC',...，得到：
                        <math>pV=a(1+B'p+C'p^2+...)</math>
                        也可以用体积的幂级数表示为：
                        <math>pV=a(1+\frac BV+\frac C{V^2}+...)</math>
                        不同物质在恒温下的实验数据表明，任何气体以pV对p做图，在p→0时，pV都具有相同的极限值；所以a仅为温度的函数。规定热力学温度后，可以得到a=RT。<br>
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
                        由压缩因子Z定义：
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
            <md-step id="fourth" md-label="2.1.1.3 维里方程相关方程" md-description ="" :md-done.sync="fourth">
                <div>
                    <h3>Berthelot维里方程</h3>
                    <p>
                        Berthelot提出，舍项维里方程中，第二维里系数的形式可以为：
                        <math>B=\frac 9{128}\frac{RT_c}{p_c}(1-6\frac{T^2_c}{T^2})</math>
                    </p>
                </div>
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
    .lar{
        font-size: 16.5px;
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

