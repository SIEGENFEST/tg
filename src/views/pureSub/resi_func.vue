<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="2.3 剩余性质" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        剩余性质又称为偏离函数(Departure Function)，是以同温同压下的理想气体状态为参考态所得到的真实流体的状态函数，可以表示出流体在非理想状态下和理想气体状态的差异。使用剩余性质可以较为方便地计算真实流体的热力学性质。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="2.3.1 剩余性质计算" md-description ="" :md-done.sync="second">
                <div>
                    <p>
                        剩余性质表示为：
                        <math class="ms">M^R=M(T,p)-M^{ig}(T,p)</math><br>
                        <strong>剩余性质计算</strong><br>
                        计算剩余性质时，设计状态变化路径：
                        <math class="ms">M(T,V)\rightarrow M(T,V^\infty)=M^{ig}(T,V^\infty)\rightarrow M^{ig}(T,V^0)</math>
                        以亥姆霍兹自由能的计算为例。<br>
                        对于真实流体部分，温度一定：
                        <math class="ms">dA=-SdT-pdV</math>
                        <math class="ms">A(T,V)-A(T,V^\infty)=-\int_\infty^VpdV</math>
                        与理想气体状态方程相减，得到偏离函数：
                        <math class="ms"> A^R= A(T,V)-A^{ig}(T,V^0)=-\int_\infty^V(p-\frac {RT}V)dV+RTln\frac {V^0}V</math>
                        同理可以得到焓和熵的剩余性质：
                        <math class="ms"> H^R=\int^p_{p_0}\left[V-T\left(\frac {\partial V}{\partial T}\right)_p\right] dp</math>
                        <math class="ms"> S^R=\int^p_{p_0}\left[\frac Rp-\left(\frac {\partial V}{\partial T}\right)_p\right] dp</math>
                        将p用真实流体状态方程p=p(T,V)代入，即可得到具体方程表示的剩余性质。<br><br>

                        <strong>真实流体热力学性质计算</strong><br>
                        通过偏离函数，可以简化真实流体的计算。如下所示，设计状态变化路径：<br>
                        <img src="../../../public/img/pure/dep2.png" alt="" class="pic"><br>
                        状态变化<math inline=1>(T_0,p_0)\rightarrow(T,p)</math>，相当于以理想气体状态为参考态表示(T,p)状态下的热力学函数。可见虚线部分路径先升温再升压，这样只需要<math inline=1>p_0</math>下的热容数据即可计算。<br>
                        可以得到：
                        <math class="ms">H_{p,T}=H^{ig}_{p_0,T_0}+\int^T_{T_0} C^{ig}_pdT+\int^p_{p_0}\left[V-T\left(\frac {\partial V}{\partial T}\right)_p\right]dp</math>
                        <math class="ms">S_{p,T}=S^{ig}_{p_0,T_0}+\int^T_{T_0} \frac {C^{ig}_p}TdT-Rln\frac p{p_0}+\int^p_{p_0}\left[\frac Rp-\left(\frac {\partial V}{\partial T}\right)_p\right]dp</math>
                        运用循环关系变化后可以得到dV的表达式：
                        <math class="ms">H^R=\int_{V_0}^V\left[T{\left(\frac{\partial p}{\partial T}\right)}_V-p\right]dV+(pV-RT)</math>
                        <math class="ms">S^R=Rln\frac p{p_0}+\int^V_{V_0}\left(\frac {\partial p}{\partial T}\right)_VdV</math>
                        
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="2.3.2 热力学性质计算" md-description ="" :md-done.sync="third">
                <div>
                    <p>
                        由上一部分的计算表达式可以看出，计算流体的热力学性质需要以下数据：<br>
                        1. 理想气体状态（即p0）下的热容数据。很多气体和液体的热容均是在1atm下测定的，在应用中可以视作理想气体状态。<br>
                        2. 流体的p-V-T数据，包括气体、饱和蒸汽和饱和液体。形式可能是状态方程，也可能是列表数据，或者绘制为压缩因子图。

                    </p>
                    <h3>焓计算</h3>
                    <p>
                        在1.3.4部分，已经推导得到：
                        <math class="ms">dH=C_PdT+\left[V-T{\left(\frac{\partial V}{\partial T}\right)}_P\right]dp</math>
                        因此：
                        <math class="ms">H_T-H'_T=\int_{p_0}^p\left[V-T\left(\frac{\partial V}{\partial T}\right)_p\right]\operatorname dp=\left(H-H'\right)_T</math>
                        其中<math inline=1>H_T</math>是<math inline=1>(T,p)</math>下的摩尔焓，<math inline=1>H'_T</math>是<math inline=1>(T,p_0)</math>下的摩尔焓。上式相当于以<math inline=1>(T,p_0)</math>下理想气体状态为参比态，来表达(T,p)下真实流体的焓。<br>
                        求解以上积分有如下方法：<br><br>
                        <strong class="lar">1. p-V-T数据的图解微分与积分</strong><br>
                        以实验数据绘制p-V-T图。以下图为例：<br>
                        <img src="../../../public/img/pure/res1.png" alt="" class="pic"><br>
                        在V-T曲线上做切线，斜率即为<math inline=1>{\left(\frac{\partial V}{\partial T}\right)}_p</math>；图解积分可以得到焓变。<br><br>

                        <strong class="lar">2. 剩余体积的图解微分与积分</strong><br>
                        剩余体积为同温同压下理想气体体积与真实气体体积的差：
                        <math class="ms">\alpha=\frac{RT}p-V</math>
                        可以得到：
                        <math class="ms">\left(H-H'\right)_T=\int_{p_0}^p\left(V-T\left[ \frac Rp-\left(\frac{\partial \alpha}{\partial T}\right)_T\right]\right)dp=\int_{p_0}^p\left[T\left(\frac{\partial \alpha}{\partial T}\right)_p-\alpha \right]dp</math>
                        由p-V-T数据求出α，再由图解微分得到<math inline=1>{\left(\frac{\partial\alpha}{\partial T}\right)}_p</math>-p图像，再由图解积分得到结果。<br><br>

                        <strong class="lar">3. 压缩因子数据图解微分积分</strong><br>
                        焓变积分可以变化为：
                        <math class="ms">\left(H-H'\right)_T=\int_{p_0}^p\left(\frac{ZRT}p-T\left[\frac{RZ}p+\frac{RT}p\left(\frac{\partial Z}{\partial T}\right)_p\right]\right)dp=-\int_{p_0}^p\frac{RT^2}p\left(\frac{\partial Z}{\partial T}\right)_pdp</math>
                        由图解微分得到<math inline=1>\left[\frac{RT^2}p\left(\frac{\partial z}{\partial T}\right)_p\right]</math>-p图像，积分得到结果。<br><br>

                        <strong class="lar">4. 使用状态方程计算</strong><br>
                        因为：
                        <math class="ms">\left(\frac{\partial V}{\partial T}\right)_p=-\left(\frac{\partial p}{\partial T}\right)_V\left(\frac{\partial V}{\partial p}\right)_T\;,\;\left(\frac{\partial V}{\partial T}\right)_pdp=-\left(\frac{\partial p}{\partial T}\right)_VdV</math>
                        <math class="ms">pV-p_0V_0=\int_{p_0}^pV\operatorname dp+\int_{V_0}^Vp\operatorname dV</math>
                        于是积分式可以变化为：
                        <math class="ms">\left(H-H'\right)_T=PV-RT-\int_{V_0}^VpdV+T\int_{V_0}^V\left(\frac{\partial p}{\partial T}\right)_VdV</math>
                        以RK方程为例计算，得到：
                        <math class="ms">\frac {\left(H-H'\right)_T}{RT}=Z-1-\frac {3a}{2bRT^{1.5}}\ln\left(1+\frac bV\right)</math>
                        令：
                        <math class="ms">A^2=\frac a{R^2T^{2.5}},\;B=\frac b{RT}</math>
                        得到：
                        <math class="ms">\frac{\left(H-H'\right)_T}{RT}=Z-1-\frac{3A^2}{2B}\ln\left(1+\frac{Bp}Z\right)</math>
                        只需将对应参数代入即可得到结果。为方便计算，人们将结果制作为图像：<br><br>
                        <img src="../../../public/img/pure/res2.png" alt="" class="pic"><img src="../../../public/img/pure/res3.png" alt="" class="pic"><br>
                        <small class="sma">（图片来源：高光华 化工热力学[M]. 第3版. 北京: 清华大学出版社, 2017；图3-2,3-3）</small>
                    </p>
                    <h3>熵计算</h3>
                    <p>
                        与焓的计算相似。<br>
                        <math>S_{T,p}-S'_{T,p_0}=\int_{p_0}^p\left[\left(\frac{\partial V}{\partial T}\right)_p\right]\operatorname dp,\;S'_{T,p}-S'_{T,p_0}=\frac Rp</math>
                        于是得到剩余熵：
                        <math class="ms">\triangle S'_T=S'_{T,p}-S_{T,p}=\int_{p_0}^p\left(\frac{\partial V}{\partial T}\right)_p\operatorname dp-R\ln\left(\frac p{p_0}\right)=\int_{p_0}^p\left[\left(\frac{\partial V}{\partial T}\right)_p-\frac Rp\right]\operatorname dp</math>
                        其中<math inline=1>S_{T,p}</math>是<math inline=1>(T,p)</math>下实际的摩尔熵，<math inline=1>S'_{T,p}</math>是<math inline=1>(T,p)</math>下理想气体状态的摩尔熵。<br>剩余熵相当于以<math inline=1>(T,p)</math>下理想气体状态为参比态，来表达(T,p)下真实流体的熵。<br><br>

                        1. 用剩余体积表示剩余熵：
                        <math class="ms">\frac{\triangle S_T'}R=-\frac1R\int_{p_0}^p\left(\frac{\partial\alpha}{\partial T}\right)_pdp</math>
                        2. 用压缩因子表示：
                        <math class="ms">\frac{\triangle S_T'}R=\int_{p_0}^p\left[\left(Z-1\right)+T\left(\frac{\partial Z}{\partial T}\right)_p\right]\frac{dp}p</math>
                        计算方法与剩余焓相同。<br>
                        3. 用状态方程表示（以RK为例）：
                        <math class="ms">\frac{\triangle S_T'}R=\frac12\frac{A^2}B\ln\left(1+\frac{Bp}Z\right)-\ln\left(Z-Bp\right)</math>
                        同样可以通过查找熵差图得到结果，此处省略。
                    </p>
                    <h3>计算状态变化</h3>
                    <p>
                        以上介绍了某状态下热力学性质的表达，以下介绍状态变化时热力学性质变化的计算。<br><br>
                        <strong class="lar">焓变：</strong>
                        <br>
                        <math class="ms">dH=C_PdT+\left[V-T{\left(\frac{\partial V}{\partial T}\right)}_P\right]dp</math>
                        由微分式可以看出，焓变受温度和压力影响。设计以下路径：<br>
                        <img src="../../../public/img/pure/res4.png" alt="" class="pic"><br>
                        于是焓变可以表示为：
                        <math class="ms">\triangle H=(H_2-H'_2)-(H_1-H'_1)+(H'_2-H'_1)</math>
                        代入方程即可得到：
                        <math class="ms">\triangle H=\int_{T_1}^{T_2}C'_p\operatorname dT+\int_{p_0}^{p_2}\left[V-T{\left(\frac{\partial V}{\partial T}\right)}_p\right]_{T_2}\operatorname dp-\int_{p_0}^{p_1}\left[V-T{\left(\frac{\partial V}{\partial T}\right)}_p\right]_{T_1}\operatorname dp</math><br>
                        <strong class="lar">熵变：</strong><br>
                        同理求得熵变：
                        <math class="ms">\triangle S=S_2-S_1=\int_{T_1}^{T_2}\frac{C_p'}T\operatorname dT+\int_{p_0}^{p_1}\left[{\left(\frac{\partial V}{\partial T}\right)}_p-\frac Rp\right]_{T_1}\operatorname dp-\int_{p_0}^{p_2}\left[{\left(\frac{\partial V}{\partial T}\right)}_p-\frac Rp\right]_{T_2}\operatorname dp-R\ln\left(\frac{p_2}{p_1}\right)</math>
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="2.3.3 普遍化热力学性质计算" md-description ="" :md-done.sync="fourth">
                <div>
                    <p>
                        前面部分（2.1.3.3)介绍，普遍化可以分为普遍化维里系数和普遍化压缩因子两种计算方式。同样，普遍化维里方程和普遍化压缩因子法的适用范围如下所示：<br>
                        <img src="../../../public/img/pure/co6.png" alt="" class="pic"><br>
                        <small class="sma">（图片来源：高光华 化工热力学[M]. 第3版. 北京: 清华大学出版社, 2017；图2-11）</small>
                    </p>
                    <h3>普遍化维里系数</h3>
                    <p>
                        由Pitzer方程：
                        <math class="ms">Z=1+\frac{Bp}{RT},\;(\frac {\partial Z}{\partial T}\right)_p=\frac pR\left(\frac {dB}{TdT}-\frac B{T^2}\right)
                        </math>
                        <math class="ms">B=\frac {RT_c}{p_c}(B^{(0)}+\omega B^{(1)})</math>
                        剩余焓可以表示为：
                        <math class="ms">H^R=-\int^p_{p_0}\frac {RT^2}p\left(\frac {\partial Z}{\partial T}\right)_pdp</math>
                        于是得到：
                        <math class="ms">\frac {H^R}{RT_c}=-p_rT_r\left[\left(\frac {dB^{(0)}}{dT_r}-\frac {B^{(0)}}{T_r} \right)+\omega\left(\frac {dB^{(1)}}{dT_r}-\frac {B^{(1)}}{T_r}\right)\right]</math>
                        同理得到剩余熵：
                        <math class="ms">\frac {S^R}R=-p_r\left(\frac {dB^{(0)}}{dT_r}+\omega\frac {dB^{(1)}}{dT_r}\right)</math>
                        其中，由Pitzer关系式，维里系数为：
                        <math class="ms">B^{(0)}=0.083-\frac{0.422}{T^{1.6}_r}\;,\;B^{(1)}=0.139-\frac{0.172}{T^{4.2}_r}</math>
                        <math class="ms">\frac {dB^{(0)}}{dT_r}=\frac {0.6752}{T_r^2.6}\;,\;\frac{dB^{(1)}}{dT_r}=\frac {0.7224}{T_r^5.2}</math>
                        代入计算即可得到结果。
                    </p>
                    <h3>普遍化压缩因子</h3>
                    <p>
                        普遍化压缩因子来构制普遍化热力学性质图，普适性强，使用方便，在化工中应用甚广。<br><br>
                        <strong class="lar">普遍化焓差图</strong><br>
                        两参数图：<br>
                        <img src="../../../public/img/pure/res5.png" alt="" class="pic"><img src="../../../public/img/pure/res6.png" alt="" class="pic"><br>
                        <small class="sma">（图片来源：高光华 化工热力学[M]. 第3版. 北京: 清华大学出版社, 2017；图3-6,3-7）</small><br>
                        三参数：
                        <math class="ms">\frac{(H'-H)_T}{RT_C}=\frac{(H'-H)_T^{(0)}}{RT_C}+\omega\frac{(H'-H)_T^{(1)}}{RT_C}</math>
                        其中，<math inline=1>\frac{(H'-H)_T^{(0)}}{RT_C}</math>是<math inline=1>T_r,p_r</math>的函数，是简单流体(ω≈0)的普遍化焓差；<math inline=1>\frac{(H'-H)_T^{(1)}}{RT_C}</math>也是<math inline=1>T_r,p_r</math>的函数，是校正函数。二者的取值可以由书本附录查找，此处省略。<br><br>
                        <strong class="lar">普遍化熵差图</strong><br>
                        前面2.2.2部分已经得到用压缩因子表示的剩余熵：
                        <math class="ms">\frac{\triangle S_T'}R=\int_{p_0}^p\left[\left(Z-1\right)+T\left(\frac{\partial Z}{\partial T}\right)_p\right]\frac{dp}p</math>
                        两参数：将剩余熵视为<math inline=1>(T_r,p_r)</math>的函数。<br>
                        <img src="../../../public/img/pure/res7.png" alt="" class="pic"><br>
                        <small class="sma">（图片来源：高光华 化工热力学[M]. 第3版. 北京: 清华大学出版社, 2017；图3-8）</small><br><br>
                        令<math inline=1>\triangle =S'_{T,p}-S_{T,p}</math><br>
                        当气体从低压<math inline=1>p_0</math>压缩至高压p时，熵变：
                        <math class="ms">\triangle S=-\triangle-R\ln\left(\frac p{p_0}\right)</math>
                        从高压膨胀到低压时，熵变：
                        <math class="ms">\triangle S=\triangle+R\ln\left(\frac p{p_0}\right)</math>
                        <br>
                        三参数：<br>
                        与熵的三参数<math inline=1>(T_r,p_r,\omega)</math>计算类似：
                        <math class="ms">\frac {\triangle S'_T}{R}=\frac{(S'-S)^{(0)}}{R}+\omega\frac{(S'-S)^{(1)}}{R}</math>
                        其中：
                        <math class="ms">\frac {\triangle S'_T}{R}=\frac {S'_{T,p_0}-S_{T,p}}R-ln\frac p{p_0}</math>
                        积分图解如下：<br>
                        <img src="../../../public/img/pure/res8.png" alt="" class="pic"><img src="../../../public/img/pure/res9.png" alt="" class="pic"><br>
                        <small class="sma">（图片来源：高光华 化工热力学[M]. 第3版. 北京: 清华大学出版社, 2017；图3-9,3-10）</small>
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
        font-size: 15.5px;
        color:rgb(34, 5, 202);
    }
    .ms{
        font-size: 11.5px;
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

