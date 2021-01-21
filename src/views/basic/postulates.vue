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
                        热力学第二基本假设给出了一个系统在给定条件下，其热力学稳定平衡态的唯一性。
                    </p>
                </div>

                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="1.1.3 第三基本假设与绝热功" md-description ="" :md-done.sync="fourth">
                <div>                    
                    <h3>第三基本假设描述</h3>
                    <p>
                        对于一个封闭系统的平衡状态A和B，至少可以构建一个发生在这个封闭系统及其环境之间的、仅存在绝热功相互作用的过程，使这个封闭系统从状态A变化到状态B，或从状态B变化到状态A。这个过程需要的功或产生的功的大小，仅由系统状态A和状态B决定。
                    </p>
                    <h3>绝热功</h3>
                    <p>
                        在A和B两个封闭系统之间，如果A系统对B系统做的功可以仅用标准重力场中重物的上升或下降来重现，同时B系统对A系统做的功也可以仅用相同标准重力场中相同重量重物的下降或上升相同高度来完全重现，那么这两个系统之间的相互作用为绝热功相互作用。<br>
                        绝热功由系统的状态决定，是状态量。
                    </p>
                    <div>
                        <h3>具体示例</h3>
                        <p> 
                            <strong>示例1</strong><br><br>
                            <img src="../../../public/img/basic/post_3rd1.png" alt="" class="pic"><br>
                            如图所示，系统A是装有0℃水的绝热容器，系统B是缠绕着重物的转子。重物下落时，转子转动对系统A做功。因为过程中B系统的变化为标准重力场中重物的下降，因此B系统对A系统做的功符合绝热功条件。<br>
                            将A系统用与B系统相同的转子和重物替代，称为系统B'，如图所示：<br>
                            <img src="../../../public/img/basic/post_3rd2.png" alt="" class="pic"><br>
                            可以看出，系统B'中，重物下降相同的距离就可以将系统B中重物提升到原位置，即系统A对系统B所做的功也可以通过重物在重力场中的下降来实现，也符合绝热功条件。所以这个重物下落过程是绝热功过程。<br><br>
                        <strong>示例2</strong><br><br>
                        <img src="../../../public/img/basic/post_3rd3.png" alt="" class="pic"><br>
                            如图所示，绝热容器A内部有透热膜，将容器分为左侧的冰水混合物（冰始终存在）和右侧的0℃纯水。系统B为重物和转子，重物在重力场中下落，带动转子对0℃的水做功。如果将透热膜左侧的冰水混合物定义为系统A'，0℃水和重物转子定义为系统B'，则A与B之间、A'与B'之间是否为绝热功过程？<br><br>
                            AB系统：<br>
                            与示例1相同，为绝热功过程。<br>
                            A'B'系统：<br>
                            B'通过导热使A'中的冰融化，相当于重物下降的功转化为冰的熔化热；但A'系统对B'系统做功必须通过热传递（系统A'和B'由透热膜分隔这一约束条件不能改变），而热转化为功存在转化效率的极限，即无法通过相同的重物在相同重力场中的下落使B'恢复到起始状态。所以这一过程对于系统A'B'而言并非绝热功过程。
                        </p>
                    </div>
                    <h3>第三基本假设意义</h3>
                    <p>
                        通过第三基本假设，我们可以引出能量差的定义：<br>
                        系统状态A和状态B之间的能量差即等于封闭系统状态A和状态B变化所需要的绝热功的大小。<br>
                        由于绝热功只与系统初末状态有关，所以能量差也只与系统状态有关，与过程无关。在实际应用中，通常将能量进一步划分为动能、势能和内能。<br>
                        
                    </p>
                    <h3>内能和热</h3>
                    <p>
                        对于一个过程，使系统从状态A变化到状态B，由第三基本假设可以得到方程：
                        <math>\underline E_B-\underline E_A=W^a_{A\rightarrow B}</math>
                        其中<math inline=1>W^a_{A\rightarrow B}</math>表示从状态A到状态B的绝热功。<br>
                    </p>
                    <h4>内能</h4>
                    <p>
                        对于一个简单系统，系统内能就等于能量，为状态量。如果以状态A为参比态，过程的绝热功就等于状态B的内能（对于简单系统而言）。结合第一基本假设可知，系统内能U可以用两个独立变化的性质和物质的量完全描述。<br>
                    </p>
                    <h4>热</h4>
                    <p>
                        我们定义AB状态分别为初末状态，即：
                        <math>\underline E_A \equiv \underline E_{initial},\;\underline E_B \equiv \underline E_{final}</math>
                        对于一个绝热过程，外界对系统做的功W就等于绝热功。<br>
                        而对于一个非绝热过程，W不等于绝热功，即：
                        <math>\underline E_{final} -\underline E_{initial} = W^a_{initial\rightarrow final} \neq W</math>
                        于是我们定义热Q：
                        <math>Q=\underline E_{final} -\underline E_{initial}-W=W^a_{initial\rightarrow final}-W</math>
                        其中，当外界对系统传热时Q为正值，当外界对系统做功时W为正值。
                    </p>
                </div>
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

