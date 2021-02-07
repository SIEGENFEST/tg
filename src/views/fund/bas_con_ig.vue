<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical >
            <md-step id="first" md-label="0.2.2 理想气体" md-description ="" :md-done.sync="first">
                <p>
                    这部分将介绍理想气体的定义和性质。
                </p>

                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="0.2.2.1 定义" md-description ="" :md-done.sync="second">
                <div>
                    <p>
                        从微观和宏观角度分别定义理想气体。两种定义等价，运用气体分子运动论可以从微观角度定义导出宏观角度定义。<br>
                    </p>
                    <h3>宏观角度</h3>
                    <p>
                        在任何压力和温度下都严格服从状态方程<math inline=1>pV=nRT</math>的气体即为理想气体。该状态方程称为理想气体状态方程。<br>
                    </p>
                    
                    <h3>微观角度</h3>
                    <p>
                        1. 气体分子可近似视为球体，并具有相同质量；<br>
                        2. 分子体积忽略不计，可视为几何质点；<br>
                        3. 气体分子和容器壁以及气体分子之间的碰撞都是完全弹性的；<br>
                        4. 气体分子间的作用力忽略不计。<br>
                        满足以上条件的气体即为理想气体。<br><br>
                        注意：<br>
                        1. 理想气体并不存在，而是科学抽象。实际气体在压力趋近于0的情况下，气体性质趋近于理想气体，符合理想气体状态方程。<br>
                        2. 在常温常压下，许多气体可以近似视为理想气体。允许使用理想气体状态方程的压力范围取决于气体种类和要求的计算精度。<br>
                        3. 对理想气体状态方程加以适当修正，就能对实际气体进行描述。相关内容可见2.1真实气体部分。<br>
                        4. 计算时注意单位。
                    </p>        
                </div>

                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="0.2.2.2 理想气体性质" md-description ="" :md-done.sync="third">
                <div>
                    <p>
                        注意，以下性质只适用于理想气体。
                    </p>
                    <h3>1. U=U(T), H=H(T)</h3>
                    <p>
                        微观上，理想气体分子没有体积，分子之间没有相互作用，所以内能只与气体分子的动能有关；而气体分子动能只与温度相关，因此理想气体的摩尔内能只是温度的函数。<br>
                        理想气体摩尔焓<math inline=1>H=U+PV=U+RT</math>，即也只是温度的函数。<br>
                    </p>
                    <h3>2. Cv=Cv(T), Cp=Cp(T)</h3>
                    <p>
                        等容热容是恒容下内能对温度的偏导，即<math>C_V\equiv{\left(\frac{\partial U}{\partial T}\right)}_V=\frac{dU(T)}{dT}</math>
                        因此理想气体等容热容只是温度的函数。<br>
                        同理，理想气体等压热容也只是温度的函数，与等容热容有关系：<math inline=1>C_P=C_V+R</math>
                    </p>
                    <h3>3. 理想气体PVT图</h3>
                    <img src="../../../public/img/fund/b_c_ig1.png" alt=""/>
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
            
        }),
        methods: {
            setDone(id, index) {
                this[id] = true;
                if (index) {
                    this.active = index
                }
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
    h3{
        font-size: 16.5px;
        color:rgb(32, 8, 165);
    }
    .pic{
        width:300px;
    }
</style>