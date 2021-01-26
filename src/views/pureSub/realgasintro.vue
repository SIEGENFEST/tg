<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="" md-description ="" :md-done.sync="first">

                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="" md-description ="" :md-done.sync="second">

                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="" md-description ="" :md-done.sync="third">

                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="" md-description ="" :md-done.sync="fourth">

                <md-button class="md-raised md-primary" @click="setDone('fourth','fifth')">OK</md-button>
            </md-step>
            <md-step id="fifth" md-label="" md-description ="" :md-done.sync="fifth">

                <md-button class="md-raised md-primary" @click="setDone('fifth','fifth')">OK</md-button>
            </md-step>

            </md-steppers>
            <md-content>
                对于理想气体，其状态方程为pV=nRT。其中p是气体分子在无相互作用的情况下无规则热运动碰撞器壁所产生的宏观效应，V是每一个气体分子所能够自由运动的空间大小。<br>
                而对于实际气体，它并不符合理想气体的微观模型，所以其状态方程会偏离理想气体状态方程。<br>
                一方面，实际气体分子间存在引力；气体内部分子受周围其他分子的引力可视为在各个方向相同，但靠近容器壁的分子由于内部气体分子的引力，对容器壁的碰撞减弱，压力变小。
                <img src="../../../public/img/pure/realgas1.png" alt="" class="pic">
                <small>图片来源：朱文涛 基础物理化学[M]. 北京: 清华大学出版社, 2011；图1-6</small>
                另一方面，实际气体分子体积不能忽略，因此V其实是每一个气体分子所能够自由运动的空间加上分子体积。<br><br>
                实际流体的状态方程十分重要，人们提出的经典状态方程有一百多个。这些方程大致可以分为两类：<br>
                1. 立方型状态方程。方程由van der Waals方程衍生，参数较少，一般只有两三个；<br>
                2. 多参数状态方程。方程由维里方程衍生，类似于有限项的级数展开式，参数较多。
            </md-content>
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

