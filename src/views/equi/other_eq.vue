<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="4.4 其它平衡体系的计算" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        4.3部分介绍了气液平衡体系。以下将介绍液液平衡、气液液平衡、固液平衡等其它平衡体系。这些体系的相平衡计算与气液平衡相似，均通过温度、压力、化学势相等来列方程求取。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="4.4.1 液液平衡" md-description ="" :md-done.sync="second">
                <div>
                    <p>
                        低压下所有气体可以任意比例互溶，但这一事实对液体并不普遍成立：<br>
                        <img src="../../../public/img/eq/li4.png" alt="" class="piclarge"><br>
                        <small class="sma">（图片来源：高光华 化工热力学[M]. 第3版. 版. 北京: 清华大学出版社, 2017；301）</small><br>
                        以下对二元体系液液平衡进行简单介绍。
                    </p>
                    <h3>液液相分离原理</h3>
                    <p>
                        理想二元混合物的吉布斯自由能为：
                        <math class="ms">G^{IM}=x_1G_1+x_2G_2+RT\left(x_1\ln x_1+x_2\ln x_2\right)</math>
                        显然，<math inline=1>G^{IM}</math>小于 <math inline=1>x_1G_1+x_2G_2</math>，即纯组分吉布斯自由能的摩尔分数权重加和。<br>
                        对于真实混合物：
                        <math class="ms">G=G^E+G^{IM}</math>
                        假定采用单常数Margules方程，可以得到：
                        <math class="ms">G^E=Ax_1x_2</math>
                        <math class="ms">G=x_1G_1+x_2G_2+RT\left(x_1\ln x_1+x_2\ln x_2\right)+Ax_1x_2</math>
                        得到 G-x 图像：<br>
                        <img src="../../../public/img/eq/eq2.png" alt="" class="piclarge"><br>
                        <small class="sma">（图片来源：高光华 化工热力学[M]. 第3版. 版. 北京: 清华大学出版社, 2017；303）</small><br>
                        由<router-link :to="{path:'../phase-equi/sta?#third#ery'}">平衡稳定</router-link>相关内容可知，封闭体系在恒温恒压下平衡判据是体系的吉布斯自由能最小。对于c曲线，G的最小值是混合物分离成两相时得到的，因此出现液液分离。<br>
                        采用其它方程也同理。但是采用 <router-link :to="{path:'../mix/li-mix/act-mo?#third#wil'}">Wilson</router-link> 方程时，吉布斯自由能没有极小值，所以 Wilson 方程不能用于液液分离的计算。
                    </p>
                    <h3>临界溶解温度范围的求取</h3>
                    <p>
                        已知流体稳定性的必要条件为：
                        <math class="ms">d^2G>0\left(\mathrm{在恒}M,T和p下\right)</math>
                        上共溶温度<math inline=1>T_{uc}</math>：
                        <math class="ms">\left(\frac{\partial^2G}{\partial x_1^2}\right)_{T,p}=0\left(在T=T_{uc}下x_1\mathrm{的某个值}\right)</math>
                        <math class="ms">\left(\frac{\partial^2G}{\partial x_1^2}\right)_{T,p}>0\left(在T>T_{uc}下x_1\mathrm{的所有值}\right)</math>
                        下共溶温度<math inline=1>T_{lc}</math>：
                        <math class="ms">\left(\frac{\partial^2G}{\partial x_1^2}\right)_{T,p}=0\left(在T=T_{lc}下x_1\mathrm{的某个值}\right)</math>
                        <math class="ms">\left(\frac{\partial^2G}{\partial x_1^2}\right)_{T,p}>0\left(在T_{lc}>T下x_1\mathrm{的所有值}\right)</math>
                    </p>
                    <h3>液液平衡的热力学计算</h3>
                    <p>
                        
                        <math class="ms">\widehat f_i^1\left(T,p,x_i^1\right)=\widehat f_i^2\left(T,p,x_i^2\right)</math>
                        纯组分的逸度相等，因此引入活度系数后：
                        <math class="ms">x_i^1\gamma_i^1\left(T,p,x_i^1\right)=x_i^2\gamma_i^2\left(T,p,x_i^2\right)</math>
                        <br>
                        示例：<br>
                        1.单常数的Margules方程表示活度系数，则相组成关系式为：
                        <math class="ms">x_i^1exp\left[\frac{A\left(1-x_i^1\right)^2}{RT}\right]=x_i^2exp\left[\frac{A\left(1-x_i^2\right)^2}{RT}\right]</math>
                        2.正规溶液模型表示活度系数，则：
                        <math class="ms">x_i^1exp\left[\frac{V_i^L\left(\phi_i^1\right)^2\left(\delta_1-\delta_2\right)^2}{RT}\right]=x_i^2exp\left[\frac{V_i^L\left(\phi_i^2\right)^2\left(\delta_1-\delta_2\right)^2}{RT}\right]</math>
                    </p>
                    <h3>从液液互溶度求配偶参数</h3>
                    <p>
                        以 van Laar 方程和 Margules 方程为例。<br>
                        <br>1. van Laar 方程<br>
                        以<math inline=1>\alpha,\beta</math>分别表示在恒温恒压下两个平衡共存的液相，1，2表示溶剂和溶质。<br>
                        可以得到方程约束条件：
                        <math class="ms">x_1^{\left(\alpha\right)}\gamma_1^{\left(\alpha\right)}=x_1^{\left(\beta\right)}\gamma_1^{\left(\beta\right)}\;\;\;\;\;\; x_2^{\left(\alpha\right)}\gamma_2^{\left(\alpha\right)}=x_2^{\left(\beta\right)}\gamma_2^{\left(\beta\right)}</math>
                        <math class="ms">{x_1^{\left(\alpha\right)}+x_2}^{\left(\alpha\right)}=1\;\;\;\;\;\; {x_1^{\left(\beta\right)}+x_2}^{\left(\beta\right)}=1</math>
                        <math class="ms">lg\gamma_1^{\left(\alpha\right)}=\frac A{\left(1+{\displaystyle\frac{Ax_1^{\left(\alpha\right)}}{Bx_2^{\left(\alpha\right)}}}\right)^2}\;\;\;\;\;\; lg\gamma_2^{\left(\alpha\right)}=\frac B{\left(1+{\displaystyle\frac{Bx_2^{\left(\alpha\right)}}{Ax_1^{\left(\alpha\right)}}}\right)^2}</math>
                        <math class="ms">lg\gamma_2^{\left(\beta\right)}=\frac B{\left(1+{\displaystyle\frac{Bx_2^{\left(\beta\right)}}{Ax_1^{\left(\beta\right)}}}\right)^2}</math>
                        根据以上方程可以得到A和B：
                        <math class="ms">\frac AB=\frac{\left({\displaystyle\frac{x_1^{\left(\alpha\right)}}{x_2^{\left(\alpha\right)}}}+\frac{x_1^{\left(\beta\right)}}{x_2^{\left(\beta\right)}}\right)\left[{\displaystyle\frac{\lg\left({\displaystyle\frac{x_1^{\left(\beta\right)}}{x_1^{\left(\alpha\right)}}}\right)}{\lg\left(\frac{x_2^{\left(\alpha\right)}}{x_2^{\left(\beta\right)}}\right)}}\right]-2}{\left(\frac{x_1^{\left(\alpha\right)}}{x_2^{\left(\alpha\right)}}+\frac{x_1^{\left(\beta\right)}}{x_2^{\left(\beta\right)}}\right)-{\displaystyle\frac{2x_1^{\left(\alpha\right)}x_1^{\left(\beta\right)}}{x_2^{\left(\alpha\right)}x_2^{\left(\beta\right)}}}\left[\frac{\lg\left({\textstyle\frac{x_1^{\left(\beta\right)}}{x_1^{\left(\alpha\right)}}}\right)}{\lg\left(\frac{x_2^{\left(\alpha\right)}}{x_2^{\left(\beta\right)}}\right)}\right]}</math>
                        <math class="ms">A=\frac{\lg\left(\frac{x_1^{\left(\beta\right)}}{x_1^{\left(\alpha\right)}}\right)}{\frac1{\left(1+\frac{Ax_1^{\left(\alpha\right)}}{Bx_2^{\left(\alpha\right)}}\right)^2}-\frac1{\left(1+{\textstyle\frac{Ax_1^{\left(\beta\right)}}{Bx_2^{\left(\beta\right)}}}\right)^2}}</math>
                        <br>2. Margules 方程<br>
                        <math class="ms">B-A=\frac{\left[x_1^{\left(\alpha\right)}+x_1^{\left(\beta\right)}\right]lg{\displaystyle\frac{x_1^{\left(\beta\right)}}{x_1^{\left(\alpha\right)}}}+\left[x_2^{\left(\alpha\right)}+x_2^{\left(\beta\right)}\right]lg\frac{x_2^{\left(\beta\right)}}{x_2^{\left(\alpha\right)}}}{\left[x_1^{\left(\alpha\right)}-x_1^{\left(\beta\right)}\right]^3}</math>
                        <math class="ms">A=\frac{lg{\displaystyle\frac{x_1^{\left(\beta\right)}}{x_1^{\left(\alpha\right)}}}}{\left(x_2^{\left(\alpha\right)}\right)^2-\left(x_2^{\left(\beta\right)}\right)^2}-2\left(B-A\right)\left[\frac{\left(x_2^{\left(\alpha\right)}\right)^2x_1^{\left(\alpha\right)}-\left(x_2^{\left(\beta\right)}\right)^2x_1^{\left(\beta\right)}}{\left(x_2^{\left(\alpha\right)}\right)^2-\left(x_2^{\left(\beta\right)}\right)^2}\right]</math>
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="4.4.2 升华平衡/气固平衡" md-description ="" :md-done.sync="third">
                <div>
                    <p>
                        简单介绍挥发性固体和压缩气体之间的相平衡。在这种体系中，固体几乎均为纯晶体，而气相为蒸汽与“惰性”气体的混合物。
                    </p>
                    <h3>热力学计算</h3>
                    <p>
                        升华组分 i 达到平衡分配时，在固相和气相中的逸度相等：
                        <math class="ms">f_i^S=\widehat f_i^V</math>
                        体系压力 p 由于“惰性”气体的存在，比固体蒸汽压 <math inline=1>p_i^{sat}</math> 高。<br>
                        容易得到固体的逸度：
                        <math class="ms">f_i^S=f_i^{sat,S}exp\left[\frac{V_S\left(p-p_i^{sat}\right)}{RT}\right]=p_i^{sat}\phi_i^{sat}exp\left[\frac{V_S\left(p-p_i^{sat}\right)}{RT}\right]</math>
                        其中，从一般压力到100atm的范围内，Poynting因子近似为1。<br>
                        气体的逸度：
                        <math class="ms">\widehat f_i^V=\widehat \phi_i^Vy_ip</math>
                        相平衡下组分逸度相等：
                        <math class="ms">\widehat \phi_i^Vy_ip= p_i^{sat}\phi_i^{sat}exp\left[\frac{V_S\left(p-p_i^{sat}\right)}{RT}\right]</math>
                        定义增强因子：
                        <math class="ms">E_i=\frac{y_ip}{p_i^{sat}}=\frac{\phi_i^V}{\widehat \phi_i^V}exp\left[\frac{V_S\left(p-p_i^{sat}\right)}{RT}\right]</math>
                        低压缩体，增强因子近似等于 1；高压缩体，<math inline=1>\widehat \phi_i^V</math> 小于 1，增强因子比 1 大。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="4.2.3 固液平衡" md-description ="" :md-done.sync="fourth">
                <div>
                    <h3>热力学计算</h3>
                    <p>
                        <math class="ms">f_1^S\left(T,p\right)=\widehat f_1^L\left(T,p,x\right)</math>
                        <math inline=1>f_1^S\left(T,p\right)</math> 是组分1作为纯固相的逸度；<math inline=1>\widehat f_1^L\left(T,p,x\right)</math> 是组分 1 在液体中的分逸度。<br><br>
                        1. 纯固体在正常熔点T_m下达到固液平衡：<br>
                        <math class="ms">f_1^S\left(T_m\right)=f_1^L\left(T_m\right)</math>
                        2. 固体在低于其正常熔点下溶解：<br>
                        <math class="ms">\frac{\triangle G^{fus}\left(T,p\right)}{RT}=\frac{G_1^L\left(T,p\right)-G_1^S\left(T,p\right)}{RT}=\frac{\left(\mu_1^\circleddash+RT\ln f_1^L\right)-\left(\mu_1^\circleddash+RT\ln f_1^S\right)}{RT}=\ln\frac{f_1^L\left(T,p\right)}{f_1^S\left(T,p\right)}</math>
                        变化后得到：
                        <math class="ms">-\frac{\triangle G^{fus}\left(T,p\right)}{RT}=\ln\left(x_1\gamma_1\right)</math><br>
                        求取<math inline=1>\triangle G^{fus}\left(T\right)</math>：
                        <math class="ms">\triangle G^{fus}\left(T\right)=\triangle H^{fus}\left(T\right)-T\triangle S^{fus}\left(T\right)</math>
                        设计路径：固体在固定压力下，从温度T加热到正常熔点<math inline=1>T_m</math>，在正常熔点时变成液体，再作为液体从熔点冷却到混合物的温度。从而得到：
                        <math class="ms">\triangle H^{fus}\left(T\right)=\int_T^{T_m}C_p^sdT+\triangle H^{fus}\left(T_m\right)+\int_{T_m}^TC_p^LdT=\triangle H^{fus}\left(T_m\right)+\int_{T_m}^T{\triangle C_p}dT</math>
                        <math class="ms">\triangle S^{fus}\left(T\right)=\int_T^{T_m}\frac{C_p^s}TdT+\triangle S^{fus}\left(T_m\right)+\int_{T_m}^T\frac{C_p^L}TdT=\triangle S^{fus}\left(T_m\right)+\int_{T_m}^T\frac{\triangle C_p}TdT</math>
                        其中<math inline=1>\triangle C_p=C_p^L-C_p^S</math>；
                        于是得到：
                        <math class="ms">\ln x_1\gamma_1=\triangle G^{fus}\left(T\right)=-\frac{\triangle H^{fus}\left(T_m\right)}{RT}\left(1-\frac T{T_m}\right)-\frac1{RT}\int_{T_m}^T\triangle C_pdT+\frac1R\int_{T_m}^T\frac{\triangle C_p}TdT</math><br>
                    </p>
                    <h3>简化</h3>
                    <p>
                        1. 假定<math inline=1>\triangle C_p</math>与温度无关：
                        <math class="ms">\ln x_1\gamma_1=-\left\{\frac{\triangle H^{fus}\left(T_m\right)}{RT}\left(1-\frac T{T_m}\right)+\frac{\triangle C_p}R\left[1-\frac{T_m}T+\ln\left(\frac{T_m}T\right)\right]\right\}</math>
                        2. 再假设固体溶解在液体溶剂中形成理想溶液：
                        <math class="ms">\ln x_1=-\left\{\frac{\triangle H^{fus}\left(T_m\right)}{RT}\left(1-\frac T{T_m}\right)+\frac{\triangle C_p}R\left[1-\frac{T_m}T+\ln\left(\frac{T_m}T\right)\right]\right\}</math>
                        3. 若固体和液体的热容相等，则可以得到：
                        <math class="ms">\ln x_1=-\ln\gamma_1-\frac{\triangle H^{fus}\left(T_m\right)}{RT}\left(1-\frac T{T_m}\right)</math>
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

