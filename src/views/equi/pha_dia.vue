<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="4.2 相图" md-description ="相律" :md-done.sync="first">
                <div>
                    <p>
                        这部分对二元体系的相图进行简单介绍。<br>
                        首先简单介绍相律：
                        <math class="ms">F=C-P+2</math>
                        C为组分数，P为相数。F为自由度，是当系统为平衡状态时，在不改变相的数目情况下可独立改变的因素（如温度和压力等），只能为非负数；如果出现负值则表明系统不能稳定存在。相律只能应用于热力学平衡体系。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="4.2.1 理想气液平衡体系" md-description ="" :md-done.sync="second">
                <div>
                    <p>
                        理想气液平衡体系即是<router-link :to="{path:'../fund/bas-con/is?#second#gas'}">气相</router-link>、<router-link :to="{path:'../fund/bas-con/is?#third#liq'}">液相</router-link>都理想的体系。<br>
                        二元理想体系相图如下所示：<br><br>
                        <img src="../../../public/img/eq/idealp.png" alt="" class="piclarge"><br>
                        <small class="sma">（图片来源：高光华 化工热力学[M]. 第3版. 北京: 清华大学出版社, 2017；269）</small><br>
                        
                    </p>
                    <h3>简要说明</h3>
                    <p>
                        理想体系相平衡下，气液相组分有关系 <math inline=1 class="em">y_Ap=x_Ap_A^*</math> ；
                        (a)图表示一定温度下压力与组分的关系。令<math inline=1>p^*_i</math>表示i 组分的饱和蒸气压，p 表示总压；理想溶液符合拉乌尔定律，可以求得温度一定、气液平衡时 <math inline=1 class="em">p-x_A</math>（泡点）的数学表示：
                        <math class="ms">p=p_A^*x_A+p_B^*x_B=p^*_B+(p_A^*-p_B^*)x_A</math>
                        将气液相组分关系 <math inline=1>y_A=x_Ap_A^*/p</math> 代入上式，可以求出气液平衡时 <math inline=1 class="em">p-y_A</math> （露点）的关系：
                        <math class="ms">p=\frac{p_A^*p_B^*}{p_A^*+(p_B^*-p_A^*)y_A}</math>
                        若已知组成求露点：<br>
                        T 一定求 p，知道 T 即知道纯组分蒸气压，直接代入方程即可求得 p ；<br>
                        p 一定求 T，则迭代 T，直至找到满足方程的纯组分蒸气压的对应温度。<br><br>
                        (b)图表示理想溶液的活度为1，与组成无关。<br><br>
                        (c)图展示了一定压力下，相平衡下气相组成和液相组成的关系，图中曲线为不同温度下气液平衡时组分对应点的连接线。<br><br>
                        (d)图中，泡点线表示液体刚开始汽化或恰好完全冷凝，即饱和液体；露点线表示液体恰好完全汽化或刚开始冷凝，即饱和气体。泡点线和露点线对应于<router-link :to="{path:'sta?#fourth#sjx'}">双节线</router-link>临界点左右两侧。<br> 
                        一定组成下，温度达到泡点前，蒸气压小于外压，体系完全为液态；达到泡点，液态混合物蒸气压恰好等于外部压力，开始汽化；温度继续上升，则体系分为气液两相，压力都等于外压，可由杠杆原理求出各相的组成和量。温度继续上升，达到露点，恰好完全汽化。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="4.2.2 偏差体系" md-description ="正偏差负偏差，共沸" :md-done.sync="third">
                <div>
                    <p>
                        偏差体系可分为正偏差体系和负偏差体系。溶液中，组分只会同时有正偏差或同时有负偏差。<br>
                        一般偏差体系的相图如下所示：<br>
                        <img src="../../../public/img/eq/pianc.png" alt="" class="piclarge"><br>
                        <small class="sma">（图片来源：高光华 化工热力学[M]. 第3版. 北京: 清华大学出版社, 2017；270）</small><br>
                        左侧为正偏差体系，组分的活度系数 γ 大于1；右侧为负偏差体系，γ 小于1。<br>
                    </p>
                    <h3>数学表示</h3>
                    <p>
                        相平衡下，气液相组分有关系 <math inline=1 class="em">y_Ap=x_Ap_A^*\gamma_A</math> ；于是得到 <math inline=1>p-x_A</math> 关系：
                        <math class="ms">p=(\gamma_Ap^*_A-\gamma_Bp^*_B)x_A+\gamma_Bp^*_B</math>
                        <math inline=1>p-y_A</math> 关系：
                        <math class="ms">p=\frac {p_A^*p_B^*\gamma_B}{p_A^*-(\gamma_Ap_A^*-\gamma_Bp_B^*)y_A}</math>
                        活度系数 γ 的求取在<router-link :to="{path:'../mix/li-mix/act-mo'}">活度系数部分</router-link>已介绍。
                    </p>
                    <h3>共沸物</h3>
                    <p>
                        当体系出现最大正偏差或最小负偏差时，体系存在共沸点，即任意组分在气液相中摩尔分数相同。<br>
                        最大正偏差：<br>
                        <img src="../../../public/img/eq/zpc.png" alt="" class="piclarge"><br>
                        最小负偏差：<br>
                        <img src="../../../public/img/eq/fpc.png" alt="" class="piclarge"><br>
                        <a href="./gfzm.pdf" download="proof.pdf">可以证明</a>，等温气液平衡下，共沸点处 p-x 曲线和 p-y 曲线取得极值。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="4.2.3 部分互溶体系" md-description ="" :md-done.sync="fourth">
                <div>
                    <p>
                        以上介绍完全互溶体系，该部分简单介绍部分互溶体系的相图。<br>
                        典型的相图如下所示：<br>
                        <img src="../../../public/img/eq/bfhr1.png" alt="" class="piclarge"><br>
                        根据相律，当存在三个相时，二元体系的自由度为1；而 T 或 p 已经确定，因此相图中表示三相共存的仅为一个点。<br>
                        由<math inline=1>y_1-x_1</math>表示的相图：<br>
                        <img src="../../../public/img/eq/bfhr2.png" alt="" class="pic"><br>
                        虚线部分表示互溶。
                    </p>
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
            third: false,
            fourth: false,
            fifth: false,
            k: 0,
            r: 0,
            s1: false,
            s2: false,
            sk:'first',
            
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
            //@click="show('s1')" 注意变量名要作为字符串传入函数；this[t]就会在data里面找这个变量(此处为s1)并且可以修改。否则函数只能修改形参而不能修改data里的值。
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
    h3{
        font-size: 16.5px;
        color:rgb(32, 8, 165);
    }
    .ms{
        font-size: 13px;
    }
    .pic{
        max-width:300px;
    }
    .piclarge{
        max-width: 470px;
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
        font-size: 10px;
        color: grey;
    }
    .bu{
        background-color: rgba(0, 0, 0, 0);
        font-size: 16.5px;
        color:rgb(32, 8, 165);
        border: gray;
        line-height: 27px;
        font-family: sans-serif;
        text-align: justify;
        font-weight: bold;
        cursor: pointer;
    }
</style>

