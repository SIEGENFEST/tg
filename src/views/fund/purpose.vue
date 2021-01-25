<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="0.3 Purpose" md-description ="目的和基本思路" :md-done.sync="first">
                <div>
                    这部分将简要介绍热力学中要解决的问题及研究方法。
                </div>
                
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="0.3.1 研究的问题" md-description ="" :md-done.sync="second">
                <p>
                    化工热力学中，研究的工程问题主要有以下几类：<br>
                    <span class="em">1. 对于一个给定边界条件和内部约束条件的热力学过程，系统的性质会发生怎样的变化？</span><br>
                    比如等温等压下氧气和氢气燃烧生成水，其中等温等压即为边界条件，燃烧可以发生为内部约束条件，而生成水的量则由热力学平衡决定。<br>
                    <span class="em">2. 希望系统的性质发生某种变化，需要给系统施加何种边界条件?</span><br>
                    比如一个用于储存能量的超级电容器，储存材料即为储能系统的边界条件；可以通过储存材料性质的调控，比如更高的比表面，来实现更高能量的存储。<br>
                    <span class="em">3. 多个途径均可以实现某种系统的规定变化，哪种途径消耗资源最少？</span><br>
                    工程上，需要用尽可能少的消耗来实现特定的目标。这不仅符合化工的经济性，更是在今天资源、环境各方面存在限制下的必然选择。<br><br>
                    课程中，我们研究的问题主要有：划分系统、用状态参数描述系统，研究参数间的关联；建立模型描述系统；对于热力学过程，合理设计路径，计算系统状态的变化，判断平衡条件、反应极限等。
                </p>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="0.3.2 研究方法" md-description ="" :md-done.sync="third">
                <div>
                    <h3>问题的定义与模型化</h3>
                    <p>
                        1. 明确所研究的问题为热力学所要解决的哪类问题；在第一、二类问题中，主要借助热力学第一定律；在第三类问题中，需要通过热力学第二定律设计可逆过程；<br>
                        2. 分析系统的边界条件和内部约束条件，从而给出系统实际模型所具备的性质；<br>
                        3. 在实际模型的基础上，对模型进行理想化处理。
                    </p>
                    <h3>运用热力学定律和数学推导</h3>
                    <p>
                        综合运用热力学三定律、相平衡、化学平衡、稳定性判据等热力学工具，以及微积分、线性代数等数学工具，对模型进行解析和计算。
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

