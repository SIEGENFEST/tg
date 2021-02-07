<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical >
            <md-step id="first" md-label="0.2.3 理想混合物" md-description ="" :md-done.sync="first">
                <p>
                    这部分将介绍理想气体混合物、理想溶液和理想稀溶液的概念及性质。相关内容可参考“3. 混合物”及“4. 相平衡”部分。
                </p>

                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="0.2.3.1 理想气体混合物" md-description ="" :md-done.sync="second">
                <div>
                    <h3>定义</h3> 
                    <p>
                        若构成混合气的k种气体均是理想气体，而且混合气仍服从理想气体状态方程，则此混合气称为理想气体混合物。
                    </p>
                    <h3>性质</h3>
                    <p>
                        理想气体混合物中，每一种组分都不会因为其他气体的存在而受到影响，即每一种组分气体都独立起作用，所以对总压的贡献与它单独占据总体积时相同。
                        因此理想气体混合物中，任意组分B都满足：<span class="em"><math>p_B=x_Bp</math></span>
                        该定律称为Dalton分压定律。<br><br>
                        注意：<br>
                        1. Dalton分压定律只适用于理想气体混合物，对实际气体混合物不适用。<br>
                        2. 理想气体的混合并不一定是理想气体混合物；还需要满足“混合气是理想气体”的条件，才是理想气体混合物。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="0.2.3.2 理想溶液" md-description ="Lewis-Randall规则，Raoult定律" :md-done.sync="third">
                <div>
                    <h3>理想溶液定义</h3>
                    <p>
                        溶液中每个组分都服从Lewis-Randall（路易斯-伦达尔）规则的溶液。<br>双组分理想溶液的p-x图如下所示：
                    </p>
                    <img src="../../../public/img/fund/b_c_is.png" alt="" class="pic">
                    <h3>理想溶液微观特征</h3>
                    <p>
                        理想溶液中任意分子对的作用力相等，且其中每一个分子所受的作用力与它在纯液体中相同。
                    </p>
                    <h3>Lewis-Randall规则</h3>
                    <p>    
                        混合物中，各组分的分逸度与处于相同温度、相同压力下纯物质逸度的比值等于其摩尔分数，即满足：<math>{\widehat f}_i=x_if_i</math>
                        其中<math inline=1>{\widehat f}_i</math>表示溶液中该组分的逸度，<math inline=1>f_i</math>表示同温同压下该组分纯物质的逸度。
                    </p>
                    <h3>Raoult定律</h3>
                    <p>
                        由Lewis-Randall规则可以推出Raoult（拉乌尔）定律：<br>
                        在一定温度下，稀溶液中溶剂的蒸气压等于纯溶剂的蒸气压乘以溶剂的摩尔分数。即：<math>p_A=p_A^{*}x_A</math>
                        一般而言，形成溶液的A、B两种分子的大小和结构越相近，则适用拉乌尔定律的浓度范围越宽。对于任何溶液，当<math inline=1>x_A→1</math>时，都严格服从Raoult定律。                    
                    </p>
                    
                    <h3>习题</h3>
                    <p>
                        已知100℃下己烷（A）和辛烷（B）得蒸气压分别为244.78kPa和47.12kPa，且两者形成理想溶液。试求：<br>(1)质量分数<math inline=1>w_B=0.5</math>时，溶液上方己烷和辛烷的蒸气分压及蒸气总压；<br>
                        (2)在101.325kPa时，由己烷和辛烷组成的某溶液的沸点恰为100℃，试求该溶液组成及蒸汽组成。
                    </p>
                    <md-button class="md-primary" @click="show()">See Answer</md-button><br>
                    <img src="../../../public/img/fund/b_c_ans1.png" v-show="sh" width="500px"><br>
                    <md-button class="md-primary" @click="hide()" v-show="sh">Close Answer</md-button>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="0.2.3.3 理想稀溶液和Henry定律" md-description ="" :md-done.sync="fourth">
                <div>
                    <h3>理想稀溶液定义</h3>
                    <p>
                        溶液中，溶质和溶剂分别服从Henry定律和Raoult定律，则该溶液为理想稀溶液。
                    </p>
                    <h3>Henry定律</h3>
                    <p>
                        一定温度下，稀溶液中溶质的蒸汽分压与摩尔分数成正比，即：
                        <math>p_B=k_Bx_B</math>
                        比例系数<math inline=1>k_B</math>称为Henry常数，取决于溶质溶剂分子间作用力大小，与溶液的温度、压力及组分性质有关。其含义将在相平衡部分进一步说明。<br>
                        Henry定律也可以表述为：<br>
                        在一定温度下，若气体在液体中的溶解度不大，则溶解度与气体的压力成正比。<br><br>
                        下图中，实线表示实际溶液某组分分压与摩尔分数的关系；虚线表示浓度趋近于0时，组分可视为符合Henry定律。
                    </p>
                    <img src="../../../public/img/fund/b_c_henryp.png" alt="">

                    <p>
                        注意：<br>
                        1. Henry定律是极限定律。溶液越稀，溶质越能较好地服从Henry定律。<br>
                        2. <span class="em">溶质B在气相和溶液中的分子形态必须相同。</span>	例如稀氨水与氨气达到平衡时，Henry定律中<math inline=1>x_B</math>指的是溶液中<math inline=1>NH_3</math>分子的摩尔分数，而以<math inline=1>NH_4^{+}和NH_3·H_2 O</math>形式存在的氨则不应计入<math inline=1>x_B</math>。<br>
                        3. 压力不大时，混合气体溶于同一溶剂，Henry定律可分别适用于每一种气体。

                    </p>
                    
                    <h4>微观表现</h4>
                    <p>
                        在服从Henry定律的溶液中，溶质分子周围几乎全是溶剂分子，因而溶质分子只受溶剂分子对它的作用力。即，若溶液中某种物质的分子完全处于溶剂分子的包围之中，该物质就服从Henry定律。
                    </p>
                    <h3>Henry定律与Raoult定律的比较</h3>          
                    <p>可结合参考混合物逸度部分内容理解下图。</p>
                    <img src="../../../public/img/fund/b_c_henry.png" alt="" width="500px"><br>
                    <small>图片来源：Introductiry Chemical Engineering Thermodynamics, Figure 11.12</small>
                </div>
                
            <md-button class="md-raised md-primary" @click="setDone('fourth','fourth')">OK</md-button>
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
            sh: false,
            
        }),
        methods: {
            setDone(id, index) {
                this[id] = true;
                if (index) {
                    this.active = index
                }
            },
            show(){
                this.sh=true; 
            },
            hide(){
                this.sh=false;
            },
        }
    })
 </script>

 <style lang="scss" scoped>
    .md-steppers {
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
    .em{
        color: rgb(219, 22, 22);
    }
</style>