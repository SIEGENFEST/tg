<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical >
            <md-step id="first" md-label="0.2.1 系统和边界" md-description ="" :md-done.sync="first">
                <p>
                    这部分将介绍基本概念，系统和边界。划分系统和边界是进行热力学分析的基础。
                </p>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="概念和分类" md-description ="" :md-done.sync="second">               
                <h3>系统</h3>
                <p>
                    为了明确分析的对象，我们将所研究的一部分物质或空间与其余的物质和空间划分开。这部分被划定的研究对象就叫系统。          
                </p>
                <h3>环境</h3>
                <p>
                    系统以外的物质和空间。
                </p>
                <h3>边界</h3>
                <p>
                    系统和环境的分界，是假想的几何表面。边界的特性决定了系统的类型。
                </p>
                <h3>系统分类</h3>
                <p>
                    根据边界的不同，系统有以下几类：<br>
                    1. 孤立系统：系统和环境之间没有任何物质或能量的交换，它们不受环境改变的影响。<br>
                    2.	封闭系统：体系和环境之间只有能量而无物质的交换，但是系统内可以因为发生化学反应而改变其组成。<br>
                    3.	开放系统：体系与环境之间可以有能量和物质的交换。这种交换可通过多孔壁、相界面或想象中的几何表面进行。<br>
                    <br>注意：<br>
                    1. <span class="em">绝对孤立的系统是不存在的。</span>但是有些情况下适当近似，忽略掉某些次要因素，便可以将系统视为孤立。如一个保温效果良好的暖水瓶及其内含物便可以视为一个孤立系统。<br>
                    2. <span class="em">系统是人为划定的。</span>同一个问题，由于考虑的角度不同，选择的系统可能不同。在处理热力学问题时，选择系统应该以解决问题的方便为原则。<br>
                    3. 简单系统指没有内部边界、没有外场作用力和惯性的系统。
                </p>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="习题" md-description ="" :md-done.sync="third">
                <div>
                    <h4>1. 请分析下列哪些系统是封闭系统/开放系统/孤立系统</h4>
                    <img src="../../../public/img/fund/b_c_sys1.png" alt="" class="pic"/>
                    <p>
                        1.液态水
                    </p>
                    <md-button :md-ripple="false" @click="right(1)"><span :class="{ri:k===1}">1. 开放系统</span></md-button>
                    <md-button :md-ripple="false" @click="wrong(11)"><span :class="{wr:r===11}">2. 封闭系统</span></md-button>
                    <md-button :md-ripple="false" @click="wrong(12)"><span :class="{wr:r===12}">3. 孤立系统</span></md-button>
                    <p>
                        2.液态水+水蒸气
                    </p>
                    <md-button :md-ripple="false" @click="wrong(21)"><span :class="{wr:r===21}"> 1. 开放系统</span></md-button>
                    <md-button :md-ripple="false" @click="right(2)" ><span :class="{ri:k===2}">2. 封闭系统</span></md-button>
                    <md-button :md-ripple="false" @click="wrong(22)"><span :class="{wr:r===22}">3. 孤立系统</span></md-button>
                    <p>
                        3.汞柱
                    </p>
                    <md-button :md-ripple="false" @click="wrong(31)"><span :class="{wr:r===31}"> 1. 开放系统</span></md-button>
                    <md-button :md-ripple="false" @click="right(3)"><span :class="{ri:k===3}">2. 封闭系统</span></md-button>
                    <md-button :md-ripple="false" @click="wrong(32)"><span :class="{wr:r===32}">3. 孤立系统</span></md-button>
                    
                </div>
                <div>
                    <h4>
                        2. 装有氦气的密封玻璃瓶，瓶内气体温度为300K，2bar；环境为300K，1bar。瓶子内部是一个开放系统还是封闭系统？
                    </h4>
                    <p>
                        注：氦气在玻璃中的扩散系数<math inline=1>D≈10^{-8}cm^2/s</math>,玻璃壁厚L≈0.2cm
                    </p>
                    <md-button class="md-primary" @click="show()">See Answer</md-button>
                    <p v-show="sh">
                        答案：<br>
                        可能是开放系统也可能是封闭系统，由研究的时间长短决定。<br>
                        短时间内，气体通过玻璃扩散的量与气体总量相比可以忽略，可以认为是封闭系统；而在足够长的时间下，氦气的扩散不可忽略，系统为开放系统。
                    </p>
                </div>

                <md-button class="md-raised md-primary" @click="setDone('third','third')">OK</md-button>
            </md-step>

            </md-steppers>
    </div>
</template>

<script >
    import Math from "@/components/Math";
    import { color } from "d3";
    import Vue from 'vue';
    
        
    export default Vue.extend({
        components: {Math},
        name: "",
        data: () => ({
            active: 'first',
            first: false,
            second: false,
            k: 0,
            r: 0,
            sh: false,
            
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
            show(){
                this.sh=true; 
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
        max-width:300px;
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