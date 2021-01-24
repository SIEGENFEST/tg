<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="0.2.4 Reference State" md-description ="参比态" :md-done.sync="first">
                <div>
                    经典热力学并不能表示出一定条件（温度、压力）下，一个系统的热力学性质的绝对值，只能表示出一个状态与另一个状态之间热力学性质的差值。因此为了对热力学性质进行描述和比较，必须选择某种状态作为参比态。
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="性质" md-description ="" :md-done.sync="second">
                <div>
                    1. 参比态下，认为系统的内能、熵和焓为0；某状态的内能、熵和焓的值就等于该状态与参比态的内能、熵和焓的差值；<br>
                    2. 参比态的选择完全是随意的，可以选择任意的平衡态为参比态；<br>
                    3，习惯上，按照一定规则选取参比态；通常以该物质在熔点的饱和液体或正常沸点的饱和液体为参比态。为了计算方便，无论温度如何选择，参比态的压力<math inline=1>p_0</math>都应该足够低，这样才能将理想气体状态的热容用于过热蒸汽的计算中。
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
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

