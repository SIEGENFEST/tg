<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="Example 1" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        写出稳定流动系统热力学第一定律的一般形式，并针对化工生产过程中， 流体流经透平、泵、换热器的情况进行适当的简化。
                    </p>
                    <p>
                        答案：<br>
                        对于稳定流动系统，热力学第一定律表达式为：
                    </p>
                </div>

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

