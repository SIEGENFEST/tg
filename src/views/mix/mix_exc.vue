<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="3.1 混合函数和超额函数" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        这部分将介绍混合物中重要的偏摩尔性质、超额性质以及吉布斯-杜亥姆方程。后面的混合物计算部分将应用这些内容。<br><br>
                        <strong>符号说明</strong><br>
                        以下部分符号含义均如下所示：<br>
                        <math inline=1>M^{id} </math>：理想混合物摩尔性质；<br>
                        <math inline=1>\overline M_i</math>：混合物中组分i的偏摩尔性质；<br>
                        <math inline=1>M_i</math>：纯组分i的摩尔性质；<br>
                        <math inline=1>M</math>：混合物的摩尔性质；<br>
                        <math inline=1>M_t=nM</math>：混合物的总性质；<br>
                        <math inline=1>\mu_i(T,p,\{x\}) </math>：T,p下组成为{x}的混合物中组分i的化学势；<br>
                        <math inline=1>\mu_i(T,p)</math>：T,p下纯组分i的化学势；其它函数同理；<br>
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="3.1.1 混合函数和偏摩尔性质" md-description ="" :md-done.sync="second">
                <div>
                    <h3>混合函数</h3>
                    <p>
                        混合函数表示同温同压下，混合物性质减去纯组分性质的摩尔加权和：
                        <math class="ms">\triangle M_t(T,p,\{n\})=M_t(T,p,\{n\})-\sum_in_iM_i(T,p)</math>
                        <math class="ms">\triangle M(T,p,\{x\})=M(T,p,\{x\})-\sum_ix_iM_i(T,p)</math>
                    </p>
                    <h3>偏摩尔性质</h3>
                    <p>
                        偏摩尔性质是在恒温、恒压和给定的组成下，将1mol组分i加到大量的混合物中所引起的广度性质的变化，数学表达为：
                        <math class="ms">\overline M_i=\left(\frac{\partial M_t }{\partial n_i}\right)_{T,p,n_{j\neq i}}</math>
                        <br>
                        1. 偏摩尔性质是强度性质。<br>
                        2. 混合物总性质、摩尔性质与偏摩尔性质的关系：
                        <math class="ms">M_t=nM=\sum_i n_i\overline M_i\; ,\;M=\sum_ixi\overline M_i</math>
                        <math class="ms em">\overline{M_i}=M-\sum_{k\neq i}x_k\left(\frac{\partial M}{\partial x_k}\right)_{T,p,(x_{l\neq k,i})}</math>
                    </p>
                    <md-button class="md-primary" @click="show('s1')">推导过程</md-button>
                    <div v-show="s1">
                        <p>
                            由微积分相关知识得到：
                            <math class="ms">\overline M_i=\left(\frac{\partial M_t }{\partial n_i}\right)_{T,p,n_{j\neq i}}=M\left(\frac{\partial n}{\partial n_i}\right)_{T,p,n_{j\neq i}}+n\left(\frac{\partial M}{\partial n_i}\right)_{T,p,n{j\neq i}}=M+n\left(\frac{\partial M}{\partial n_i}\right)_{T,p,n{j\neq i}}</math>
                            考虑m个组分的混合物，由基本假设可知由n+1个变量即可描述总性质：
                            <math>M=M(T,p,x_1,...,x_{m-1})</math>
                            令坐标中不包括i组分的<math inline=1>x_i</math>。于是在一定温度压力下，可以得到：
                            <math class="ms">dM=\sum_{k \neq i}\left(\frac{\partial M}{\partial x_k}\right)_{T,p,x_l\neq (x_i,x_k)}dx_k</math>
                            用<math inline=1>dn_i</math>除该方程，并限制<math inline=1>n_j</math>不变：
                            <math class="ms">\left(\frac{\partial M}{\partial n_i}\right)_{T,p,n_j}=\sum_k\left(\frac{\partial M}{\partial x_k}\right)_{T,p,x_l}\left(\frac{\partial x_k}{\partial n_i}\right)_{n_j}</math>
                            其中：
                            <math  class="ms">x_k=n_k/n\;,\;\left(\frac{\partial x_k}{\partial n_i}\right)_{n_j}=-\frac{n_k}{n^2}=-\frac{x_k}n\left(k\neq i\right)</math>
                            于是得到：
                            <math class="ms">\overline{M_i}=M-\sum_{k\neq i}x_k\left(\frac{\partial M}{\partial x_k}\right)_{T,p,(x_{l\neq k,i})}</math>

                        </p>
                        <md-button class="md-primary" @click="hide('s1')">close</md-button>
                    </div>
                    
                    <h3>偏摩尔性质与混合函数关系</h3>
                    <p>
                        <span class="em">所有的热力学关系式均可应用于混合物及其偏摩尔性质。</span>例如：
                        <math class="ms">\overline G_i=\overline H_i-T\overline S_i</math>
                        <math class="ms">\triangle G_i=\triangle H_i-T\triangle S_i  </math>
                        容易发现：
                        <math class="ms">\triangle M(T,p,\{x\})=M(T,p,\{x\})-\sum_ix_iM_i(T,p)=\sum_ix_i\left(\overline M_i-M_i\right) </math>
                        <math class="ms em">\left(\frac {\partial \triangle G_{t}}{\partial n_i}\right)_{T,p,n_{j\neq i}}=\frac {\partial}{\partial n_i}\left(G_t(T,p,\{n\})-\sum_i n_i\mu_i(T,p)\right)_{T,p,n_{j\neq i}}=\mu_i(T,p,\{x\})-\mu_i(T,p) </math>
                    </p>
                </div>
                <md-button class="md-primary" @click="show('s2')">something interesting</md-button><br>
                    <div v-show="s2">
                        <p>
                            1. 偏摩尔量是<span class="em">总性质</span>对摩尔量求导，且<math inline=1>n_j</math>视为常量。通常有表达式<math inline=1>M=(T,p,x_i)</math>，要将<math inline=1>x_i</math>用<math inline=1>x_i= {n_i}/{\sum n_i}</math>替换，乘以总摩尔数n后再求偏导；或者按“偏摩尔性质”部分标红的方程求取。<br><br>
                            例题：<br>
                            某二元混合体系在恒温和恒压条件下，摩尔混合焓变化与组成关系为：
                            <math class="ms">\triangle H=cRTx_1x_2</math>
                            其中c为常数。求体系各组分偏摩尔焓与组成的关系，并验证加和性。<br><br>
                            可以得到：
                            <math class="ms">H_t=\sum_i n_iH_i+n\triangle H=n_1H_1+n_2H_2+cRT\frac {n_1n_2}n</math>
                            于是：
                            <math class="ms">\overline H_1=\left(\frac {\partial H_t}{\partial n_1}\right)=H_1+cRTx_2^2</math>
                            加和性：
                            <math class="ms">H_t=n_1H_1+n_2H_2=n_1(H_1+cRTx_2^2)+n_2(H_2+cRTx_1^2)=n_1H_1+n_2H_2+cRT\frac {n_1n_2}n</math>
                            <br>
                            2. 
                            <math class="ms">\overline M_i=\left(\frac{\partial M_t }{\partial n_i}\right)_{T,p,n{j\neq i}} \neq \left(\frac{\partial M}{\partial x_i}\right)_{T,p,x{j\neq i}}</math>
                            左边下标表明除了i组分外其它组分含量都不变，所以方程中n是ni的一次函数而非常数；因此<math inline=1>x_j=n_j/n</math>会受i组分含量影响，所以左右的条件不一样，结果也不相等。<br>
                            不过如果条件是总摩尔数n不变，则左右相等。
                            
                        </p>
                        <md-button class="md-primary" @click="hide('s2')">So easy, close</md-button>
                    </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="3.1.2 吉布斯-杜亥姆方程" md-description ="Gibbs-Duhem，以及一致性判据" :md-done.sync="third">
                <div>
                    <p>
                        吉布斯杜亥姆方程式是简化计算的方法，可以用在各种热力学函数上，常用于温度、压力一定的条件下研究组分改变的对性质的影响。<br>
                        一般形式的GD方程为：
                        <math class="ms">\left(\frac{\partial M}{\partial T}\right)_{p,x}dT+\left(\frac{\partial M}{\partial p}\right)_{T,x}dp-\sum_ix_id\overline M_i=0</math>
                    </p>
                    <md-button class="md-primary" @click="show('s3')">推导过程</md-button>
                    <div v-show="s3">
                        <p>
                            <math class="ms">dM_t=d\left(nM\right)=\sum_i\left(n_id\overline M_i\right)+\sum_i\left(\overline M_idn_i\right)</math>
                            而<math inline=1>M_t</math>可以表示为：
                            <math class="ms">M_t=M_t(T,p,n_1,n_2,...)</math>
                            微分得到：
                            <math class="ms">dM_t=\left(\frac{\partial M_t}{\partial T}\right)_{p,n}dT+\left(\frac{\partial M_t}{\partial p}\right)_{T,n}dp+\sum_i\overline M_idn_i\\ =n\left(\frac{\partial M}{\partial T}\right)_{p,x}dT+n\left(\frac{\partial M}{\partial p}\right)_{T,x}dp+\sum_i\overline M_idn_i</math>
                            于是得到：
                            <math class="ms">n\left(\frac{\partial M}{\partial T}\right)_{p,x}dT+n\left(\frac{\partial M}{\partial p}\right)_{T,x}dp-\sum_in_id\overline M_i=0</math>
                            同除n：
                            <math class="ms">\left(\frac{\partial M}{\partial T}\right)_{p,x}dT+\left(\frac{\partial M}{\partial p}\right)_{T,x}dp-\sum_ix_id\overline M_i=0</math>
                        </p>
                        <md-button class="md-primary" @click="hide('s3')">close</md-button>
                    </div>
                    <p>
                        温度压力一定，得到常用的简化方程：
                        <math class="ms em">\sum \left(x_id\overline M_i\right)=0</math>
                    </p>
                    <h3>一致性判据</h3>
                    <p>
                        一致性判据用于判断实验获得的数据是否合理，在相平衡气液平衡部分将进一步说明。此处简要介绍GD方程导出的一致性判据。<br>
                        以二元体系为例。根据一般形式的GD方程，在一定的温度和压力下有：
                        <math class="ms">x_1d\overline M_1+x_2d\overline M_2=0</math>
                        对<math inline=1>x_1</math>偏导得到：
                        <math class="ms">x_1\left(\frac {\partial \overline M_1}{\partial x_1}\right)_{T,p}+x_2\left(\frac {\partial \overline M_2}{\partial x_1}\right)_{T,p}=0</math>
                        以上即为热力学一致性判据。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="3.1.3 超额函数" md-description ="" :md-done.sync="fourth">
                <div>
                    <p>
                        理想混合物的具体介绍见3.3理想混合物部分，此处直接使用。
                    </p> 
                    <h3>超额函数</h3>
                    <p>
                        
                        超额性质是实际混合物的热力学性质在同温同压同组成下，与理想混合物的差：
                        <math class="ms">M^E=M(T,p,\{x\})-M^{id}(T,p,\{x\})</math>
                        超额性质的变化表示为：
                        <math class="ms">\triangle M^E(T,p,\{x\})=\triangle M(T,p,\{x\})-\triangle M^{id}(T,p,\{x\})</math>
                        结合混合函数的内容，容易得到：
                        <math class="ms">\triangle M^E=\triangle M-\triangle M^{id}= M-\sum_i x_iM_i-\left(M^{id}-\sum_ix_iM_i\right)=M-M^{id}=M^E</math>
                        即超额性质的变化等于超额性质。
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
            s3: false,
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
        font-size: 10px;
        color: grey;
    }
</style>

