<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="2.1.2 立方型状态方程" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        立方型状态方程由范德华(van der Waals)方程衍生。本部分将介绍范德华方程和RK方程、SRK方程、Wilson方程、PR方程。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="2.1.2.1 van der Waals方程及图像" md-description ="" :md-done.sync="second">
                <div>
                    <p>
                        范德华认为，真实气体分子间存在引力，施加于器壁的压力比理想气体状态小；分子有体积，气体总体积V包含分子本身的体积；于是修正理想气体方程得到范德华方程，如下所示：
                        <math>(p+\frac a{V^2})(V-b)=RT</math>
                        V表示摩尔体积。方程中参数a表征分子间引力；参数b称为协体积，表征分子的体积。<br><br>
                        <strong class="lar">p-V图像</strong><br>
                        在p和T一定的情况下，上式为关于V的三次方程，因此有三个根（包括虚根和实根）。根据方程绘制得到等温线p-V图像如下所示：<br>
                        <img src="../../../public/img/pure/vdw1.png" alt="" class="piclarge"><br>
                        <small class="sma">（图片来源：高光华 化工热力学[M]. 第3版.北京: 清华大学出版社, 2017；图2-5）</small><br>
                        范德华方程是第一个能从气态到液态连续表达的状态方程。图像中，AC线由不同温度下饱和液相体积连接而成，其左侧为液相；CG线由不同温度下饱和气相体积连接而成，其右侧为气相；ACG中间部分表示气液平衡。<br><br>

                        由图像可以看出：<br>
                        <math inline=1>T_c>T,p_1>p>p_3\;</math>时，方程有三个实根A,E,G。其中A表示该温度下饱和液相体积，G点表示饱和汽相体积，而E没有物理意义。同时，在<math inline=1>p_1,p_3</math>之间的等温线<math inline=1>(\partial p/\partial V)_T>0</math>，与真实流体的行为违背且不符合稳定性条件（见平衡与稳定部分），不可能存在；而AD、FG部分是亚稳态，可以存在但不稳定。<br>
                        随温度升高，三个实根逐渐接近；三个根合并时，即达到临界点<math inline=1>T=T_c</math>，此时体积为临界体积<math inline=1>V_c</math>。临界温度是物质的特性参数。临界点以上温度，流体仅有气相没有液相。<br><br>
                        
                        
                        <strong class="lar">实际流体表现</strong><br>
                        若不考虑亚稳态，临界点<math inline=1>T_c</math>以下的实际流体表现出的状态图像为AG相连，如下所示：<br>
                        <img src="../../../public/img/pure/vdw2.png" alt="" class="piclarge"><br><br>
                        <math inline=1>T_c>T,\;p=p_2\;</math>时，流体气液相平衡；<br>
                        <math inline=1>T_c>T,\;p\neq p_2\;</math>时，方程有一个实根两个虚根，流体为单相，状态可以确定;<br>
                        <math inline=1>T>T_c\;</math>时，流体仅有气相。<br><br>
                        <strong>ps.</strong> 曲线ADEFG被AG分成的上下两个部分ADE和EFG面积相等，称为"Maxwell Construction"。假设气体沿着ADEFG可逆变化到G，再沿着直线GA可逆变化到A。这是一个循环，所以总体而言没有热转化为功（否则就从单一热源取热违反热二定律）；又因为A点和G点的 T、p 相等，所以内能相等。所以总过程做功为0，即上下两部分面积相等。<br>
                        <strong>pps.</strong> A点、G点代表的流体饱和气液相体积可以通过实验获得，也可以运用 Maxwell Construction 进行理论计算。RK方程等其它理论方程也可以这样计算饱和流体气液相体积。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="2.1.2.2 临界参数和临界压缩因子" md-description ="" :md-done.sync="third">
                <div>
                    <p>
                        <strong class="lar">求取临界参数</strong><br>
                        求取范德华方程下临界点<math inline=1>T_c</math>处临界参数<math inline=1>V_c,\;p_c</math>的方法主要有以下两种：<br>
                        1. 直接求解。<br>
                        范德华方程变化：
                        <math>V^3-(\frac{bp_c+RT_c}{p_c})V^2+\frac a{p_c}V-\frac {ab}{p_c}=0</math>
                        令V表示同值的三个实根，得到：
                        <math>(V-V_c)^3=0</math>
                        展开后：
                        <math>V^3-3V_cV^2+3V_c^2V-V_c^3=0</math>
                        由同级系数相等即可解出：
                        <math>V_c=3b,\;p_c=\frac a{27b^2},\;T_c=\frac{8a}{27Rb}</math><br>
                        2. 利用临界点为拐点的条件（临界点为拐点可见平衡与稳定部分）。
                        可以得到临界点处有：
                        <math>\left(\frac{\partial p}{\partial V}\right)_{T_c}=0,\;\left(\frac{\partial^2 p}{\partial V^2}\right)_{T_c}=0</math>
                        将范德华方程代入即可解出结果。<br><br>

                        <strong class="lar">临界压缩因子</strong><br>
                        用以上求取临界参数的方法还可以求出范德华方程的理论临界压缩因子：
                        <math>Z_c=\frac{p_cV_c}{RT_c}=\frac38</math>
                        可见临界压缩因子为定值0.375。但实际上不同物质的临界压缩因子并不相同，其数值范围为0.23~0.29。所以需要对范德华方程进行进一步修正。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="2.1.2.3 衍生方程" md-description ="RK, SRK, Wilson, PR" :md-done.sync="fourth">
                <div>
                    <h3>Redlich-Kwong 方程（RK方程）</h3>
                    <p>
                        方程形式为：
                        <math>p=\frac{RT}{V-b}-\frac a{T^{0.5}V(V+b)}</math>
                        其中V为摩尔体积。方程可以表示为摩尔体积的三次幂形式：
                        <math>
                            V^3-\frac{RT}pV^2+(\frac a{T^{0.5}p}-\frac{bRT}p-b^2)V-\frac {ab}{T^{0.5}p}=0
                        </math>
                        同样可以用2.1.2.2介绍的方法求得临界参数，此处省略。同理求出理论临界压缩因子，得到：
                        <math>Z_c=\frac 13</math>
                        同样是常数，因此RK方程在临界区也不准确。
                        为了求解方便，将RK方程用压缩因子Z表示为：
                        <math>Z^3-Z^2+(A-B-B^2)Z-AB=0</math>
                        其中：
                        <math>A=0.42748\frac{p_r}{T_r^{2.5}},\;B=0.08664\frac{p_r}{T_r}</math>
                    </p>
                    <h3>Wilson 方程</h3>
                    <p>
                        RK方程可以改写为：
                        <math>p=\frac{RT}{V-b}-\frac a{V(V+b)}</math>
                        其中：
                        <math>a=a_c\alpha,\;a_c=0.42748\frac{(RT_c)^2}{p_c}</math><br>
                        <math inline=1>\alpha</math>是温度函数，在原始RK方程中<math inline=1>\alpha=T_r^{-0.5}</math>。<br>
                        Wilson定义参数<math inline=1>g=g(T_r,\omega)</math>，在偏心因子<math inline=1>\omega</math>一定的情况下g与<math inline=1>\frac 1{T_r}</math>呈线性关系；再将斜率m与ω关联，得到方程：
                        <math>m=1.57+1.62\omega,\;g=1+m(\frac 1{T_r}-1)</math>
                        <math>\alpha=gT_r=T_r[1+(1.57+1.62\omega)(T_r^{-1}-1)]</math>
                        将<math inline=1>\alpha</math>代入原方程即得到Wilson方程。
                        
                    </p>
                    <h3>Soave方程（SRK方程）</h3>
                    <p>
                        Soave改进Wilson对RK方程的修正，令：
                        <math>m=0.480+1.574\omega-0.176\omega^2</math>
                        <math>\alpha^{0.5}=1+m(1-T_r^{0.5})</math>
                        得到的SRK方程在计算纯烃和烃类混合物体系的汽-液平衡方面具有较高的精度。<br>
                        为了求解方便，将SRK方程用压缩因子Z表示为：
                        <math>Z^3-Z^2+(A-B-B^2)Z-AB=0</math>
                        <math>A=\frac {\alpha p}{(RT)^2}=0.42748\frac{\alpha p_r}{T_r},\;B=\frac{bp}{RT}=0.08664\frac{p_r}{T_r}</math>
                    </p>
                    <h3>Peng-Robinson方程（PR方程）</h3>
                    <p>
                        上述RK方程及其修正方程在预测液相密度时精度很差。Peng和Robinson又对Redlich-Kwong方程进行了改进，提出如下PR方程：
                        <math>p=\frac{RT}{V-b}-\frac a{V(V+b)+b(V-b)}</math>
                        计算得到理论临界压缩因子：
                        <math>Z_c=0.307</math>
                        相比于RK方程，有较明显的改进，但仍和实际流体的真实临界压缩因子有差别。<br>
                        为求解方便，同样将PR方程用压缩因子表达：
                        <math>Z^3-(1-B)Z^2+(A-2B-3B^2)Z-(AB-B^2-B^3)=0</math>
                        其中：
                        <math>A=\frac{\alpha p}{(RT)^2}=0.457235\frac{\alpha p_r}{T_r^2},\;B=\frac{bp}{RT}=0.077796\frac{p_r}{T_r}</math>
                        <math>m=0.37646+1.54226ω-0.26992ω^2,\;\alpha^{0.5}=1+m(1-T^{0.5}_r)</math>
                        Soave方程和Peng-Robinson方程在预测蒸汽压时显示出优点，其重要原因是由于它们有了很好的温度函数α。在预测稠密区的摩尔体积方面，Peng-Robinson方程比Soave方程更优越。
                    </p>
                    <h3>多参数立方型方程</h3>
                    <p>
                        上述两参数状态方程的局限性的根本原因在于各方程本身所固有的理论临界压缩因子是定值。考虑引入其它参数，使得立方型状态方程的理论临界压缩因子值随物质不同而变化。<br>
                        Schmidt和Wenzel：<br>
                        <math>p=\frac {RT}{V-b}-\frac a{V^2+ubV+\omega b^2}</math>
                        Patel和Teja：<br>
                        <math>p=\frac {RT}{V-b}-\frac a{V(V+b)+c(V-b)}</math>
                        童景山和刘裕品：<br>
                        <math>p=\frac {RT}{V-b}-\frac a{(V+mb)(V-nb)}</math>
                        多参数状态方程可提高液相计算精度。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('fourth','fifth')">OK</md-button>
            </md-step>
            <md-step id="fifth" md-label="计算例题" md-description ="" :md-done.sync="fifth">
                <div>
                    <p>
                        <strong>
                            质量为0.5kg的气态氨，贮于浸没在338.2K的恒温浴的0.03立方米高压容器内，试按下列方法计算气体的压力: <br>
                            1. 理想气体状态方程；2. SRK方程；3. PR方程。
                        </strong><br><br>
                        查得氨的物性数据：
                        <math>M=17,\;T_c=405.6K,\;p_c=11.28MPa,\;Z_c=0.242,\;\omega=0.250</math>
                        1. 计算摩尔体积：
                        <math>V_m=\frac V{m/M}</math>
                        代入理想气体方程：
                        <math>p=\frac{RT}{V_m}=2.753MPa</math>
                        2. <math>b=0.08664\frac{RT_C}{P_C}=0.08664\frac{8.314\times10^6\times405.6}{11.28\times10^6}=25.90</math>
                        <math>a_c=0.42748\frac{\left(RT_C\right)^2}{P_C}=0.42748\times\frac{\left(8.314\times10^6\times405.6\right)^2}{11.28\times10^6}=4.3095\times10^{11}</math>
                        <math>m=0.480+1.574\times0.250-0.176\times0.250^2=0.8625</math>
                        <math>\alpha=\left[1+0.8625\left(1-0.833^{0.5}\right)\right]=1.156</math>
                        <math>a=a_c\alpha=4.9817\times10^{11}</math>
                        得到：
                        <math>p=\frac{8.314\times10^6\times338.15}{1021-25.90}-\frac{4.9817\times10^{11}}{1021\left(1021+25.90\right)}=2.359\times10^3kPa</math>
                        3. <math>b=0.077796\frac{RT_C}{P_C}=0.077796\times\frac{8.314\times10^{6\times405.6}}{11.28\times10^6}=23.264</math>
                        <math>a_c=0.45724\frac{\left(RT_C\right)^2}{P_C}=0.45724\times\frac{\left(8.314\times10^6\times405.6\right)^2}{11.28}=4.6095\times10^{11}</math>
                        <math>m=0.37646+1.54226\times0.25-0.26992\times\left(0.25\right)^2=0.74515</math>
                        <math>\alpha=\left[1+0.74516\left(1-0.833^{0.5}\right)\right]=1.13435</math>
                        <math>a=a_c\alpha=5.22875\times10^{11}</math>
                        得到：<math>p=2.3378\times10^3kPa</math>

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

