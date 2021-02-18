<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="3.4.3 活度系数的应用及方程参数的确定" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        这部分介绍活度系数的应用以及二元体系中活度系数方程相关参数的求取。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="3.4.3.1 无限稀释活度系数" md-description ="求取方程参数" :md-done.sync="second">
                <div>
                    <h3>定义</h3>
                    <p>
                        溶液中某组分浓度无限趋近于0时，该组分的活度系数。
                        <math class="ms">\gamma_i^\infty=\lim_{x_1\rightarrow0}\gamma_i</math>
                    </p>
                    <h3>求取方法</h3>
                    <p>
                        无限稀释活度系数的求取主要有两种方法，一是通过色谱法测定，二是进行估算。此处简要介绍估算方法。<br><br>
                        <strong>溶解度参数法</strong><br>
                        只适用于正规溶液。此处介绍二元体系。
                        <math class="ms">\ln\gamma_1^\infty=\frac{V_1\left(\delta_1-\delta_2\right)^2}{RT}</math>
                        <math class="ms">\ln\gamma_2^\infty=\frac{V_2\left(\delta_1-\delta_2\right)^2}{RT}</math>
                        <math inline=1>V_1, V_2</math>分别是纯组分1和纯组分2的液相摩尔体积，<math inline=1>\delta_1，\delta_2</math>分别是组分1和组分2的溶解度参数。
                        <math class="ms">\delta_1=\left(\frac{\triangle U_1^V}{V_1}\right)^{0.5}\;\;\;\;\;\;\delta_2=\left(\frac{\triangle U_2^V}{V_2}\right)^{0.5}</math>
                        <math inline=1>\triangle U^V</math>是等温下将液体从饱和态汽化成理想气体所需的能量。<br><br>
                        <strong>Flory-Huggins无热溶液活度系数方程法</strong><br>
                        <math class="ms">\ln\gamma_1^\infty=\ln\frac{V_1}{V_2}+1-\frac{V_1}{V_2}</math>
                        <math class="ms">\ln\gamma_2^\infty=\ln\frac{V_2}{V_1}+1-\frac{V_2}{V_1}</math><br>
                        <strong>联合估算法</strong><br>
                        适用于具有混合热、熵的变化只受液体分子体积影响的非正规溶液体系。
                        <math class="ms">\ln\gamma_1^\infty=\ln\frac{V_1}{V_2}+1-\frac{V_1}{V_2}+\frac{V_1\left(\delta_1-\delta_2\right)^2}{RT}</math>
                        <math class="ms">\ln\gamma_2^\infty=\ln\frac{V_2}{V_1}+1-\frac{V_2}{V_1}+\frac{V_2\left(\delta_1-\delta_2\right)^2}{RT}</math>
                    </p>
                    <h3>应用</h3>
                    <p>
                        无限稀释活度系数与各种活度系数关联式中的配偶参数有简单关系，因此它的重要作用就是关联求取方程参数。以下以 van Laar 方程和 Wilson 方程为例说明。<br><br>
                        <strong>van Laar 方程</strong><br>
                        van Laar方程是Wohl方程的简化，形式为：
                        <math class="ms">\ln\gamma_1=\frac{A_{12}}{\left(1+{\displaystyle\frac{A_{12}}{A_{21}}}{\displaystyle\frac{x_1}{x_2}}\right)^2}\;\;\;\;\;\;\ln\gamma_2=\frac{A_{21}}{\left(1+{\displaystyle\frac{A_{21}}{A_{12}}}{\displaystyle\frac{x_2}{x_1}}\right)^2}</math>
                        组分1浓度趋近于0时，得到组分1的无限稀释活度系数：
                        <math class="ms">\ln\gamma_1^\infty=\lim_{x_1\rightarrow0}\ln\gamma_1=\lim_{x_1\rightarrow0}\frac{A_{12}}{\left(1+{\displaystyle\frac{A_{12}}{A_{21}}}{\displaystyle\frac{x_1}{x_2}}\right)^2}=A_{12}</math>
                        同理，组分2的无限稀释活度系数为：
                        <math class="ms">\ln\gamma_2^\infty=\lim_{x_2\rightarrow0}\ln\gamma_2=\lim_{x_2\rightarrow0}\frac{A_{21}}{\left(1+{\displaystyle\frac{A_{21}}{A_{12}}}{\displaystyle\frac{x_2}{x_1}}\right)^2}=A_{21}</math>
                        于是知道无限稀释活度系数就可以得到方程参数。<br><br>

                        <strong>Wilson 方程 </strong><br>
                        Wilson方程形式为：
                        <math class="ms">\ln\gamma_1=-\ln\left(x_1+\Lambda_{21}x_2\right)+x_2\left(\frac{\Lambda_{21}}{x_1+\Lambda_{21}x_2}-\frac{\Lambda_{12}}{x_2+\Lambda_{12}x_1}\right)</math>
                        <math class="ms">\ln\gamma_2=-\ln\left(x_2+\Lambda_{12}x_1\right)+x_1\left(\frac{\Lambda_{12}}{x_2+\Lambda_{12}x_1}-\frac{\Lambda_{21}}{x_1+\Lambda_{21}x_2}\right)</math>
                        求得无限稀释活度系数和参数的关系：
                        <math class="ms">\ln\gamma_1^\infty=\lim_{x_1\rightarrow0}\left[-\ln\left(x_1+\Lambda_{12}x_2\right)+x_2\left(\frac{\Lambda_{12}}{x_1+\Lambda_{12}x_2}-\frac{\Lambda_{21}}{x_2+\Lambda_{21}x_1}\right)\right]=1-\ln\Lambda_{12}-\Lambda_{21}</math>
                        <math class="ms">\ln\gamma_2^\infty=\lim_{x_2\rightarrow0}\left[-\ln\left(x_2+\Lambda_{21}x_1\right)+x_1\left(\frac{\Lambda_{21}}{x_2+\Lambda_{21}x_1}-\frac{\Lambda_{12}}{x_1+\Lambda_{12}x_2}\right)\right]=1-\ln\Lambda_{21}-\Lambda_{12}</math>
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="3.4.3.2 活度系数方程参数求取" md-description ="相平衡，共沸组成，总压-组成" :md-done.sync="third">
                <div>
                    <p>
                        除了以上介绍的通过无限稀释活度系数求取方程参数，还有通过相平衡求取、通过共沸组成求取等方法。<br>
                    </p>
                    <h3>通过气液相平衡求取</h3>
                    <p>
                        压力较低的情况下，气液平衡时，组分i 的气液相满足关系：<math class="ms">\widehat f_i^V=\widehat f_i^L</math>
                        并且：
                        <math class="ms">\widehat f_i^V=py_i\;\;\;\;\;\;\widehat f_i^L=p^*x_i\gamma_i</math>
                        其中p* 为组分i 的饱和蒸气压。
                        于是得到：
                        <math class="ms">\gamma_i=\frac{py_i}{p^*x_i}</math>
                        相关内容可见相平衡部分。<br>
                        由气液平衡的实验数据，可以得到不同组成下的活度系数；将数据代入选取的活度系数方程，即可得到多组结果。将结果平均，即为待求取的参数。<br>
                    </p><hr>
                    <p>
                        例题：<br>
                        丙酮(1)-甲醇(2) 体系在101，33kPa下的汽液平衡数据如下表所示，试计算van Laar方程的配偶参数<math inline=1>A_{12},A_{21}</math>。<br>
                        <img src="../../../public/img/mix/p1.png" alt="" class="piclarge"><br><br>
                        解答：<br>
                        根据汽液平衡数据计算活度系数，可以得到：
                        <math class="ms">\gamma_1=\frac{py_1}{p_1^0x_1}\;\;\;\;\;\;\gamma_2=\frac{py_2}{p_2^0x_2}</math>
                        得到：<br>
                        <img src="../../../public/img/mix/p2.png" alt="" class="piclarge"><br>
                        以第一点为例，计算配偶参数：
                        <math class="ms">A_{12}=lg\gamma_1\left(1+\frac{x_2lg\gamma_2}{x_1lg\gamma_1}\right)^2=0.1436\left(1+\frac{0.720\times0.0240}{0.280\times0.1436}\right)^2=0.294</math>
                        <math class="ms">A_{21}=lg\gamma_2\left(1+\frac{x_1lg\gamma_1}{x_2lg\gamma_2}\right)^2=0.0240\left(1+\frac{0.280\times0.1436}{0.720\times0.0240}\right)^2=0.266</math>
                        得到结果：<br>
                        <img src="../../../public/img/mix/p3.png" alt="" class="piclarge"><br><br>
                    </p>
                    <h3>通过共沸组成求取</h3>
                    <p>
                        共沸条件下，气液相组成相同；同时由相平衡条件可以得到：
                        <math class="ms">\gamma_i=\frac p{p^*}</math>
                    </p>
                        <hr>
                    <p>
                        例题：<br>
                        正丙醇（1）-水（2）二元体系在101.33kPa下形成均相混合物，实验测得其共沸温度为87.8℃，共沸组成为<math inline=1>x_1=0.432</math>,试应用van Laar方程求其汽液平衡曲线，并与实验数据进行对比。已知在87.8℃时纯组分的饱和蒸汽压为<math inline=1>p_1^{sat}=69.86kPa,p_2^{sat}=64.39kPa</math>。计算时可假设汽相服从理想气体定律。<br><br>
                        解答：<br>
                        1. 计算共沸组成下的液相活度系数：
                        <math class="ms">\gamma_1=\frac p{p_1^{sat}}=\frac{101.33}{69.86}=1.451\;\;\;\;\;\;\gamma_2=\frac p{p_2^{sat}}=\frac{101.33}{64.39}=1.575</math>
                        2. 计算van Laar方程中的配偶参数：
                        <math class="ms">A_{12}=\ln\gamma_1\left(1+\frac{x_2\ln\gamma_2}{x_1\ln\gamma_1}\right)^2=\ln1.451\left(1+\frac{0.568\ln1.575}{0.432\ln1.451}\right)^2=2.525</math>
                        <math class="ms">A_{21}=\ln\gamma_2\left(1+\frac{x_1\ln\gamma_1}{x_2\ln\gamma_2}\right)^2=\ln1.575\left(1+\frac{0.432\ln1.451}{0.568\ln1.575}\right)^2=1.197</math>
                        Van Laar方程求取活度：
                        <math class="ms">\ln\gamma_1=\frac{2.525}{\left(1+{\displaystyle\frac{2.525x_1}{1.197x_2}}\right)^2}\;\;\;\;\;\;\ln\gamma_2=\frac{1.197}{\left(1+{\displaystyle\frac{1.197x_2}{2.525x_1}}\right)^2}</math>
                        3. 根据van Laar方程计算汽液平衡数据，并于实验数据进行对比：
                        <math class="ms">y_1=\frac{p_1^{sat}x_1\gamma_1}p,y_2=\frac{p_2^{sat}x_2\gamma_2}p</math>
                        计算结果如下：<br>
                        <img src="../../../public/img/mix/p4.png" alt="" class="piclarge"><br>
                        从表中数据的对比，可以看出，使用van Laar方程进行关联与实验结果比较符合，说明用恒沸点数据计算配偶参数不仅方便而且也具有一定的可靠性。<br><br>
                    </p>
                    <h3>通过总压-组成数据求取</h3>
                    <p>
                        液相组成可以用秤量法配制，总压可以直接测得，而取得呈平衡的气相样品很困难，因此从p-x数据求出配偶参数具有重要实际意义。<br>
                        已知二元体系中：
                        <math class="ms">\gamma_1=\frac{y_1p}{x_1p_1^{sat}}=\frac{\left(1-y_2\right)p}{x_1p_1^{sat}}=\frac{p-x_2\gamma_2p_2^{sat}}{x_1p_1^{sat}}</math>
                        当<math inline=1>x_1\rightarrow0</math>，则<math inline=1>x_2\rightarrow1</math>，<math inline=1>\gamma_2\rightarrow1</math>，故：
                        <math class="ms">\lim_{x_1\rightarrow0}\gamma_1=\gamma_1^\infty=\frac{p-x_2p_2^{sat}}{x_1p_1^{sat}}\;\;\;\;\;\;\lim_{x_2\rightarrow0}\gamma_2=\gamma_2^\infty=\frac{p-x_1p_1^{sat}}{x_2p_2^{sat}}</math>
                        令：
                        <math class="ms">\gamma_1'=\frac{p-x_2p_2^{sat}}{x_1p_1^{sat}} \;\;\;\;\;\;\gamma_2'=\frac{p-x_1p_1^{sat}}{x_2p_2^{sat}}</math>
                        参数计算过程：<br>
                        1. 根据各点<math inline=1>p-x_1</math>数据（在较小范围的<math inline=1>x_1</math>内），计算不同<math inline=1>x_1</math>下的<math inline=1>\gamma_1'</math>，作出<math inline=1>\ln \gamma_1'-x_1</math>曲线，外延至<math inline=1>x_1\rightarrow0</math>，则所得的<math inline=1>\ln\gamma_1'</math>即为近似的<math inline=1>A_{12}</math>，用<math inline=1>A_{12}'</math>表示。同理表示出<math inline=1>A_{21}'</math>。<br>
                        2. 用<math inline=1>\gamma_1=\frac{p-x_2\gamma_2p_2^{sat}}{x_1p_1^{sat}}</math>重复计算不同<math inline=1>x_1下的<math inline=1>\gamma_1</math>。此时已引入了<math inline=1>\gamma_2</math>，因此得到的是液相活度系数\gamma_1</math>，式中<math inline=1>\gamma_2</math>可用近似的配偶参数<math inline=1>A_{21}'</math>和<math inline=1>A_{12}'</math>根据van Laar方程计算得到。因现在的浓度范围是<math inline=1>x_1</math>较小，<math inline=1>x_2</math>较大，此时<math inline=1>\gamma_2</math>值较接近于1，故用近似的配偶参数进行计算不会引起较大的误差。此时再做<math inline=1>\ln\gamma_1-x_</math>1曲线，外延至<math inline=1>x_1\rightarrow0</math>所得到的<math inline=1>\ln\gamma_1</math>即为配偶参数<math inline=1>A_{12}</math>。同样求出<math inline=1>A_{21}</math>。<br>
                        3. 得到配偶参数<math inline=1>A_{12}</math>和<math inline=1>A_{21}</math>后，即可建立该二元体系的活度系数与组成的关联式，并可进一步计算出<math inline=1>x_1-y_1</math>数据。<br><br>
                        根据沸点与组成数据求配偶参数也可采用上述类似方法。

                    </p>
                </div>

                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="3.4.3.3 超额吉布斯自由能混合规则" md-description ="简单介绍" :md-done.sync="fourth">
                <div>
                    <p>
                        前面介绍两种计算超额吉布斯自由能的方法：<br><br>
                        <strong>状态方程法</strong><br>
                        优点：从p-V-T性质出发，原则上可以计算流体在广阔温度和压力范围下的气体和液体状态下的所有热力学性质。<br>
                        缺点：在不同的区域需要注意计算精度的问题，如在临界区的计算；<br>
                        对于混合物，不同温度甚至不同浓度下需要不同的交互作用参数<math inline=1>k_{ij}</math>；<br>
                        对液体混合物特别是极性液体混合物的计算，精度不高。<br><br>
                        <strong>活度系数模型</strong><br>
                        优点：从溶液的微观结构出发，可以计算液体混合物的热力学性质，尤其对含有极性物质和强极性缔合物质的液体混合物的计算效果也很好。<br>
                        缺点：纯物质的性质如饱和蒸汽压需要由其他方法如状态方程或Antoine关系式提供；<br>
                        不能计算液体密度及其相关的性质，即p-V-T的完整性质；<br>
                        不能用到气体混合物的计算。<br><br>
                        <span class="em">可见两种方法优缺点互补，因此可以将状态方程和活度系数模型结合起来。将混合物的<math inline=1>G^E</math>用状态方程（EOS）表示，与活度系数模型（ACM）的<math inline=1>G^E</math>相等：</span>
                        <math class="ms">G_{EOS}^E=G_{ACM}^E</math>
                        已知超额吉布斯自由能和混合物及纯物质逸度系数的关系：
                        <math class="ms">G^E=RT\left[\ln\phi-\sum_{i=1}^nx_i\ln\phi_i^0\right]</math>
                        即可获得状态方程表示的超额吉布斯自由能的表达式。因此，可以从一种方法出发求取另一种模型的参数。
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
        max-width: 600px;
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

