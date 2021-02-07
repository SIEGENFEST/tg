<template>
    <div>
            <md-content class="md-content">
                <h3>对真实气体的简要介绍</h3>
                
                理想气体状态方程为pV=nRT。其中p是气体分子在无相互作用的情况下无规则热运动碰撞器壁所产生的宏观效应，V是每一个气体分子所能够自由运动的空间大小。<br>
                实际气体却不符合理想气体的微观模型，所以它的状态方程会偏离理想气体状态方程。<br>
                对于实际气体，一方面，其分子体积不能忽略，因此式中的V其实是每一个气体分子所能够自由运动的空间体积加上分子体积；另一方面，气体分子间存在引力。气体内部分子受周围其他分子的引力可视为在各个方向相同，但靠近容器壁的分子由于内部气体分子的引力，对容器壁的碰撞减弱，压力变小，如下图所示。<br>
                <img src="../../../public/img/pure/realgas1.png" alt="" class="pic"><br>
                <small class="sma">(图片来源：朱文涛 基础物理化学[M]. 北京: 清华大学出版社, 2011；图1-6)</small><br>
                <br>
                于是需要新的状态方程来描述实际流体。人们提出的经典状态方程有一百多个，这些方程大致可以分为两类：<br>
                1. 立方型状态方程。方程由van der Waals方程衍生，参数较少，一般只有两三个；<br>
                2. 多参数状态方程。方程由维里方程衍生，类似于有限项的级数展开式，参数较多。<br>
                无论哪种状态方程，在<math inline=1>p→0，V→\infty</math>的极限情况下，都应该符合理想气体定律。<br>
               
               
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
    .md-content {
    max-width: 700px;
        font-size: 15px;
        line-height: 27px;
        font-family: sans-serif;
  }
    .ms{
        font-size: 13px;
    }
    h3{
        font-size: 16.5px;
        color:rgb(32, 8, 165);
    }
    .lar{
        font-size: 15.5px;
        color:rgb(34, 5, 202);
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
        color: grey;
    }
</style>

