<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="1.1 Postulates" md-description ="四大基本假设" :md-done.sync="first">
                <div>
                    四大基本假设是热力学的基石。本部分将对四大基本假设做简要介绍。
                </div>
                
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="1.1.1 第一基本假设" md-description ="" :md-done.sync="second">
                <div>
                    <h3>描述</h3>
                    <p>
                        给定内部约束条件的<span class="em">简单封闭系统</span>存在稳定平衡态，能够由两个<span class="em">独立变化</span>的性质和系统内所有组分的物质的质量来完全描述。<br>
                        即，对于一个含有n个组分的简单封闭系统，完全描述该系统共需要n+2个变量；其数学描述为：
                        <math class="em">\underline Y=f(\underline{X_1},\underline{X_2},N_1,N_2,...,N_n)</math>
                        其中下划线表示广度性质。各变量相互独立。
                    </p>
                    <h3>意义</h3>
                    <p>
                        热力学第一基本假设解决了描述一个给定内部约束条件的简单封闭系统的热力学稳定平衡态所需要的变量数的问题。
                    </p>
                    <h3>例题</h3>
                    <p>
                        判断下面两组变量能否完全描述如图所示的单组分系统：<br>
                        <img src="../../../public/img/basic/post1.png" alt="" width="200px"/><br>
                        1. 气液相总物质的量N、系统的总体积V、系统温度T
                    </p>
                        <md-button :md-ripple="false" @click="judge('k1'), show('s1')"><span :class="{ri:k1===1}">可以 </span></md-button>
                        <md-button :md-ripple="false" @click="judge('r1'), show('s1')"><span :class="{wr:r1===1}">不可以 </span></md-button>
                        <p v-show="s1">
                            说明：<br>
                            图中系统为一封闭、存在相平衡的简单系统，而体积和温度是两个独立变量，所以这组变量可以完全描述该系统。
                        </p>
                    <p>
                        2. 气液相总物质的量N、系统的压力p、系统温度T <br>
                    </p>    
                    <md-button :md-ripple="false" @click="judge('r2'), show('s2')"><span :class="{wr:r2===1}">可以 </span></md-button>
                        <md-button :md-ripple="false" @click="judge('k2'), show('s2')"><span :class="{ri:k2===1}">不可以 </span></md-button>
                        <p v-show="s2">
                            说明：<br>
                            根据克劳修斯克拉伯龙方程(Clausius-Clapeyron equation)有：<math>\frac{dp}{dT}=\frac{△S}{△V}</math>
                            即该系统中，温度T和压力p不是独立变量；所以这组变量不能完全描述该系统。
                        </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="1.1.2 第二基本假设" md-description ="" :md-done.sync="third">
                <div>
                    <h3>描述</h3>
                    <p>
                        在环境不变的条件下，任何系统，包括简单系统和复合系统，在给定的内部约束条件下，每一个简单子系统均会达到一个且仅有一个稳定平衡态。在这个极限条件下，整个系统达到平衡。
                    </p>
                    <h3>意义</h3>
                    <p>
                        热力学第二基本假设给出了稳定的热力学平衡态的唯一性。
                    </p>
                </div>

                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="1.1.3 第三基本假设" md-description ="绝热功" :md-done.sync="fourth">

                <md-button class="md-raised md-primary" @click="setDone('fourth','fifth')">OK</md-button>
            </md-step>
            <md-step id="fifth" md-label="1.1.4 第四基本假设" md-description ="也称为热力学第零定律" :md-done.sync="fifth">
                <div>
                    <h3>描述</h3>
                    <p>
                        系统A和系统C、系统B和系统C之间以非绝热壁直接接触；如果A和C之间、B和C之间都没有热交换，那么A和B以非绝热壁直接接触时，也不会发生热交换。
                    </p>
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
            k1: 0,
            k2: 0,
            r1: 0,
            r2: 0,
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
            judge(n){
                this[n]=1;
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
        max-width: 500px;
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

