<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="1.3 Functions" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        本部分将介绍不同坐标下描述系统的热力学关系式，并简单介绍热力学函数偏导的意义和运用。
                    </p>              
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
                </div>
            </md-step>
            <md-step id="second" md-label="1.3.1 强度性质与广度性质" md-description ="" :md-done.sync="second">
                <div>
                    <p>
                        <strong >广度性质：</strong><br>
                        与系统质量成线性关系的变量，可加和；例如系统的总体积、总内能、总熵等；<br>
                        <strong >强度性质：</strong><br>
                        与系统质量无关的变量，不可加和；例如系统的摩尔体积、摩尔内能、摩尔熵等。<br><br>
                        由热力学第一基本假设可知，简单系统性质可以由两个独立变化的性质和系统内各个组分的物质的量进行描述；即对于n组分的简单系统，其热力学性质可以用独立变量数为n+2的函数描述。<br>
                        对于研究较多的单相简单系统，可以得到热力学第一基本假设的推论：<br>
                        系统任意强度性质变量可以用其它n+1个独立的强度性质变量来完全描述。<br>
                        该推论可以用欧拉定理证明，此处省略。

                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="1.3.2 吉布斯坐标下热力学关系式" md-description ="" :md-done.sync="third">
                <div>
                    <p>
                        热力学基本关系式是热力学第一定律和第二定律的定量描述，可以描述系统的平衡状态和可逆变化过程。其中仅涉及系统的广度性质，所有的自变量和因变量都是质量的一次函数。<br>
                        独立变量<math inline=1>（\underline S,\underline V,N_1,N_2,...,N_n）</math>称为吉布斯坐标系。吉布斯坐标系对简单系统的边界没有温度、压力的要求，也没有其他任何约束条件限制，因此被称为热力学自然坐标。
                    </p>
                    <h3>吉布斯坐标系下热力学基本关系式求取</h3>
                    <p>
                        对于简单系统，应用吉布斯坐标系，可以将系统的热力学性质用内能表示：
                        <math>\underline U=f_U(\underline S,\underline V,N_1,N_2,...,N_n)</math>
                        变化得到下式：
                        <math>\underline S=f_S(\underline U,\underline V,N_1,N_2,...,N_n)</math>
                        以上两式即为热力学基本关系式。<br>
                        注意：<br>
                        1. 计算时需要确定参考态；<br>
                        2. 尽管已知简单系统热力学基本关系式，但仍需要具体的物性参数等信息来准确描述某种材料的热力学性质和热力学关系。不同物质的特性不同，热力学关系式的表达形式也不同。<br>
                        
                    </p>
                    <h3>全微分</h3>
                    <p>
                        对热力学基本关系式取全微分，得到：
                        <math>d\underline U=(\frac{\partial \underline U}{\partial \underline S})_{\underline V,N_i}d\underline S+(\frac{\partial \underline U}{\partial \underline V})_{\underline S,N_i}d\underline V+\sum_i(\frac{\partial \underline U}{\partial N_i})_{\underline S,\underline V,N_{j\neq i}}dN_i</math>
                        联系之前推导得到的简单系统热力学关系式：
                        <math>d\underline U=Td\underline S-pd\underline V+\sum_i \mu_i dN_i</math>
                        得到：
                        <math>(\frac{\partial \underline U}{\partial \underline S})_{\underline V,N_i}=T=g_T(\underline S,\underline V,N_1,N_2,...,N_n)</math>
                        <math>(\frac{\partial \underline U}{\partial \underline V})_{\underline S,N_i}=-P=g_p(\underline S,\underline V,N_1,N_2,...,N_n)</math>
                        <math>(\frac{\partial \underline U}{\partial N_i})_{\underline S,\underline V,N_{j\neq i}}=\mu_i=g_{\mu_i}(\underline S,\underline V,N_1,N_2,...,N_n)</math>
                        方程中<math inline=1>T,P, μ_i</math>均为强度性质，与质量无关。以上三式即为吉布斯坐标下的状态方程（理想气体状态方程、van der Waals方程等理论方程，Peng-Robinson等实际状态方程即为上述状态方程的具体形式）。

                    </p>
                    <h3>积分式</h3>
                    <p>
                        吉布斯坐标系中，<math inline=1>\underline S,\underline V, N</math>都为广度性质，是质量的一次函数。<br>
                        根据欧拉定理，得到以下积分式：
                        <math>\underline U=\underline S(\frac{\partial \underline U}{\partial \underline S})_{\underline V,N_i}+\underline V(\frac{\partial \underline U}{\partial \underline V})_{\underline S,N_i}+\sum_iN_i(\frac{\partial \underline U}{\partial N_i})_{\underline S,\underline V,N_{j\neq i}}</math><math>
                            \underline U=T\underline S-p\underline V+\sum_iN_i\mu_i</math>
                        
                    </p>
                    <h3>图形表示</h3>
                    <p>
                        如上所示，系统热力学性质可以用(n+2)个变量的函数表示。数学上，式中(n+3)个变量（包括因变量）形成了(n+3)维空间，因此热力学基本关系式可以用一个多维超曲面表示。<br>
                        为了方便表示，通常将方程降维，将广度性质变为强度性质。举例而言，对于一个单组分简单系统：
                        <math>\underline U=U(\underline S,\underline V,N)</math>
                        系统总内能为广度性质，需要3个变量描述；为减少变量，对其降维，以强度性质摩尔内能描述系统，得到：
                        <math>U=U(S,V)</math>
                        仅需要摩尔熵和摩尔体积2个变量即可描述。<br>
                        以水的热力学基本关系式为例进行图形表示，如下所示：<br>
                        <img src="../../../public/img/basic/func1.png" alt="" class="pic"><br>
                        立体模型：<br>
                        <img src="../../../public/img/basic/func2.png" alt="" class="pic"><br>
                    </p>

                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="1.3.3 任意坐标下热力学关系式" md-description ="勒让德变换，UAHG" :md-done.sync="fourth">
                <div>
                    <p>
                        已经得到，吉布斯坐标系下，系统的热力学性质可以方便地用内能表示：
                        <math>d\underline U=Td\underline S-pd\underline V+\sum_i \mu_i dN_i</math>
                        但是系统的熵难以测量，于是考虑用其它坐标来表示系统的热力学性质。<br>
                        令<math inline=1>y^{(0)}=\underline U=U(\underline S,\underline V, N_1,N_2,...,N_n)</math>，微分得到：
                        <math>dy^{(0)}=d\underline U=Td\underline S-pd\underline V+\sum_i \mu_i dN_i</math>
                        一次勒让德变换得到：
                        <math>dy^{(1)}=-\underline SdT-pd\underline V +\sum_i \mu_idN_i</math>
                        定义此处<math inline=1>y^{(1)}</math>为亥姆霍兹自由能A，由欧拉定理得到：
                        <math>\underline A=-\underline ST-p\underline V+\sum_i\mu_iN_i</math>
                        将变量顺序改为<math inline=1>(\underline V,\underline S,N_1,N_2,...,N_n)</math>，再次进行一阶勒让德变换，得到：
                        <math>dy^{(1)}=\underline Vdp+Td\underline S+\sum_i \mu_idN_i</math>
                        定义此处<math inline=1>y^{(1)}</math>为焓H，由欧拉定理得到：
                        <math>\underline H=p\underline V+T\underline S+\sum_i\mu_iN_i</math>
                        对<math inline=1>y^{(0)}</math>进行二阶勒让德变换得到：
                        <math>dy^{(2)}=-\underline SdT+\underline Vdp +\sum_i \mu_idN_i</math>
                        定义此处<math inline=1>y^{(2)}</math>为吉布斯自由能G，由欧拉定理得到：
                        <math>\underline G=-\underline ST+\underline Vp+\sum_i\mu_iN_i</math>
                        综上，得到不同坐标下热力学基本方程的微分形式：
                        <math>
                            d\underline U=d\underline U=Td\underline S-pd\underline V+\sum_i \mu_i dN_i\\
                            d\underline A=-\underline SdT-pd\underline V +\sum_i \mu_idN_i\\
                            d\underline H=\underline Vdp+Td\underline S+\sum_i \mu_idN_i\\
                            d\underline G=-\underline SdT+\underline Vdp +\sum_i \mu_idN_i
                        </math>
                        积分形式：
                        <math>
                            \underline U=T\underline S-p\underline V+\sum_i\mu_iN_i\\
                            \underline A=-\underline ST-p\underline V+\sum_i\mu_iN_i\\
                            \underline H=p\underline V+T\underline S+\sum_i\mu_iN_i\\
                            \underline G=-\underline ST+\underline Vp+\sum_i\mu_iN_i
                        </math>
                        由此，可以在不同坐标下对系统的热力学性质进行描述，并可以通过热力学基本关系式由可测量参数计算不可测量的热力学参数；该部分可参考1.3.5。应尽可能选择可测量的参数来表征研究的系统。

                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('fourth','fifth')">OK</md-button>
            </md-step>
            <md-step id="fifth" md-label="1.3.4 有外场系统的热力学关系式" md-description ="" :md-done.sync="fifth">
                <div>
                    <p>
                        复杂系统在课程中几乎没有研究。该部分仅简单介绍。<br>
                        在有外场的情况下，热力学关系式为：
                        <math>d\underline U=d\underline U=Td\underline S-pd\underline V+\sum_i \mu_i dN_i+\overrightarrow Fd\underline{\overrightarrow X}</math>
                        <math inline=1>\overrightarrow F</math>为外场强度；<math inline=1>\underline{\overrightarrow X}</math>为系统在外场作用下的位移。例如，系统为磁性材料，则<math inline=1>\overrightarrow F=-\overrightarrow H</math>，表示磁场强度；<math inline=1>\underline{\overrightarrow X}=\underline{\overrightarrow B}</math>，表示材料磁矩。<br><br>
                        示例：<br>
                        <strong>
                        将一个弹性材料展开后突然松手。在松手瞬间，材料的温度升高还是降低？</strong><br><br>
                        列出热力学关系式：
                        <math>d\underline U=d\underline U=Td\underline S-pd\underline V+\sum_i \mu_i dN_i+\overrightarrow Fd\underline{\overrightarrow L}</math>
                        固体材料形变时密度近似不变，化简上式：
                        <math>d\underline U=d\underline U=Td\underline S+\overrightarrow Fd\underline{\overrightarrow L}</math>
                        由全微分的性质/麦克斯韦互等得到：
                        <math>(\frac{\partial T}{\partial \underline L})_{\underline S}=(\frac{\partial F}{\partial \underline S})_{\underline L}=(\frac{\partial F}{\partial T})_{\underline L}(\frac{\partial T}{\partial \underline S})_{\underline L}</math>
                        绝热条件下，材料被拉伸，外界对材料做功，材料的内能应增加，即应该有：
                        <math>(\frac{\partial T}{\partial \underline L})_{\underline S}>0</math>
                        同时，定长下熵随温度升高而增大，即：
                        <math>(\frac{\partial T}{\partial \underline S})_{\underline L}=(\frac{\partial \underline S}{\partial T})_{\underline L}^{-1}>0</math>
                        因此得到：
                        <math>(\frac{\partial F}{\partial T})_{\underline L}>0</math>
                        所以外力减小，温度也下降。

                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('fifth','sixth')">OK</md-button>
            </md-step>
            <md-step id="sixth" md-label="1.3.5 偏导" md-description ="麦克斯韦关系" :md-done.sync="sixth">
                <div>
                    
                    <p>
                        热力学函数的对自变量的一阶偏导可以获得系统状态。例如，对于简单系统：
                        <math>(\frac{\partial \underline U}{\partial \underline S})_{\underline V,N}=T,\;(\frac{\partial \underline U}{\partial \underline V})_{\underline S,N}=P</math>
                        二阶偏导可以获得物性。例如对于单组分简单系统，使用强度性质的表达式，得到：<br>
                        <strong>恒容热容：</strong>
                        <math>
                            U_{SS}=(\frac{\partial ^2 U}{\partial S^2})_V=(\frac{\partial T}{\partial S})_V=\frac T{C_V}</math>
                        <strong>等温压缩因子：</strong>反映等温条件下，系统摩尔体积随压力变化：
                        <math>
                            G_{pp}=(\frac{\partial^2 G}{\partial p^2})_T=(\frac{\partial V}{\partial p})_T=-V\kappa_T
                        </math>
                        <strong>热膨胀系数：</strong>反应恒压条件下，系统摩尔体积随温度变化：
                        <math>
                            G_{Tp}=G_{pT}={\left(\frac{\partial{\left({\displaystyle\frac{\partial G}{\partial p}}\right)}_T}{\partial T}\right)}_p=(\frac{\partial V}{\partial T})_p=V\alpha_p
                        </math>
                    </p>
                    <h3>麦克斯韦(Maxwell)关系</h3>
                    <p>
                        由全微分相关性质，可以由热力学关系式得到麦克斯韦关系：
                        <math>
                            (\frac{\partial T}{\partial V})_S=-(\frac{\partial p}{\partial S})_V
                        </math>
                        <math>
                            (\frac{\partial T}{\partial p})_S=(\frac{\partial V}{\partial S})_p
                        </math>
                        <math>
                            (\frac{\partial S}{\partial V})_T=(\frac{\partial p}{\partial T})_V
                        </math>
                        <math>
                            (\frac{\partial S}{\partial p})_T=-(\frac{\partial V}{\partial T})_p\\
                        </math>
                        利用该关系，结合数学技巧，可以将一些难以从实验测量得到的物理量（比如物态方程和热容等），用可测量得到的物理量（比如温度、压力等）表达。<br><br>
                        <strong>以求取<math inline=1>(\frac{\partial S}{\partial V})_p</math>为例：</strong><br>
                        熵变无法直接由实验测量得到，因此需要由其他可测量量来导出该偏导。具体过程如下：
                        <br>由麦克斯韦关系式可得：
                        <math>(\frac{\partial S}{\partial V})_p=(\frac{\partial p}{\partial T})_S</math>
                        由循环关系：
                        <math>(\frac{\partial p}{\partial T})_S(\frac{\partial T}{\partial S})_p(\frac{\partial S}{\partial p})_T=-1</math>
                        其中：
                        <math>(\frac{\partial T}{\partial S})_p=\frac T{C_p},\;(\frac {\partial S}{\partial p})_T=-(\frac{\partial V}{\partial T})_p=-V\alpha_p</math>
                        于是得到：
                        <math>(\frac{\partial S}{\partial V})_p=(\frac{\partial p}{\partial T})_S=\frac{C_p}{\alpha_pVT}</math>
                        如上所示，<math inline=1>(\frac{\partial S}{\partial V})_p</math>由物性及可测量物理量表示出来了。

                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('sixth','sixth')">OK</md-button>
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
        font-size: 16.3px;
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

