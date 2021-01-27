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
                        <math>(p+\frac a{V_m^2})(V_m-b)=RT</math>
                        其中参数a表征分子间引力；参数b称为协体积，表征分子的体积。<br><br>
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
    .sma{
        color: grey;
    }
</style>

