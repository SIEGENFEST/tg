<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="3.2.2 气体混合物" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        2.4部分介绍了纯物质逸度，相关计算方法在混合物逸度中也可以使用，不过相关参数受选择的混合规则影响。这部分内容对气体混合物逸度做简单介绍。<br>
                        
                        <br>
                        <strong>符号说明</strong><br>
                        以下部分符号含义均如下所示：<br>
                        <math inline=1>f_i</math>：组分i纯物质状态下的逸度；<br>
                        <math inline=1>f_m</math>：混合物的逸度；<br>
                        <math inline=1>\widehat f_i</math>：混合物中组分i的逸度；<br>
                        <math inline=1>\overline M_i</math>：混合物中组分i的偏摩尔性质；<br>

                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="3.2.2.1 逸度和逸度系数" md-description ="" :md-done.sync="second">
                <div>
                    <p>
                        纯物质i的逸度和逸度系数：
                        <math>RT\ln \frac {f_i}{f^0}=\mu_i(T,p) -\mu_i(T,p^0)\;,\;\phi_i=\frac{f_i}p</math>
                        在温度一定的情况下，微分得到：
                        <math>dG_i=RTd\ln f_i</math>
                        <br>
                    </p>
                    <h3>混合物总逸度</h3>
                    <p>
                        与纯物质逸度相似，得到混合物总的逸度和逸度系数：
                        <math >RT\ln\frac{f_m}{f^0_m}=\mu_m(T,p)-\mu_m(T,p^0)\;,\;\phi_m=\frac {f_m}p</math>
                        其中<math inline=1>f^0_m=p^0=1bar</math>；相当于将T,p0(ideal gas)下的混合物当做假想的“纯净物”作为参比态。<br><br>
                    </p>
                    <h3>混合物分逸度</h3>
                    <p>
                        对于混合物中的组分i，可以得到其逸度：
                        <math>RT\ln \frac {\widehat f_i}{f^0_i}=\mu_i(T,p,y_i)-\mu_i(T,p^0)</math>
                        相当于将T,p0(ideal gas)下的纯物质作为参比态。在温度一定的情况下，微分得到：
                        <math>d\overline G_i=RTd\ln \widehat f_i</math>
                        气相混合物中，组分i逸度系数的定义为：
                        <math>\widehat\phi_i \equiv \frac {\widehat f_i}{py_i}</math>
                        
                        同样，对于液相混合物有：
                        <math>\widehat\phi^L_i = \frac {\widehat f^L_i}{px_i}</math>

                    </p>
                    <md-button class="md-primary" @click="show('s2')">something interesting</md-button><br>
                    <div v-show="s2">
                        <p>
                            <strong>1. 混合物总的逸度与各组分逸度的关系。</strong><br>
                            总的逸度：
                            <math class="ms">RT\ln f_m=\mu_m(T,p)-\mu_m(T,p^0)</math>
                            其中：
                            <math class="ms">\mu_m(T,p)=\sum_iy_i\mu_i(T,p,y_i)\;,\;\mu_m(T,p^0)=\sum_iy_i\mu_i(T,p^0)</math>
                            各组分逸度：
                            <math class="ms">RT\ln {\widehat f_i}=\mu_i(T,p,y_i)-\mu_i(T,p^0)</math>
                            于是得到：
                            <math class="ms em">\ln f_m=\sum_iy_i\ln\widehat f_i</math><br>
                            <strong>2. 逸度系数含义。</strong><br>
                            对于理想气体混合物，组分的逸度<math inline=1>f_i^{ig}=py_i</math> ，于是容易得到：
                            <math class="ms">RT\ln \phi_i=RT(\ln f_i-\ln f_i^{ig})= \left[\mu_i(T,p,x_i)-\mu_i(T,p_0)\right]-\left[\mu_i^{ig}(T,p,x_i)-\mu_i(T,p_0)\right]</math>
                            变化后得到：
                            <math>RT\ln \phi_i=\mu_i(T,p,x_i)-\mu_i^{ig}(T,p,x_i)=\int_{p_0}^{py_i}V_i-V^{ig}dp </math>
                            即逸度系数相当于以理想气体混合物的组分i为参比态来表示实际混合物中组分i的化学势。<br><br>
                            <strong>3. 不同状态下逸度的表示。</strong><br>
                            对于气相纯组分：
                            <math class="ms">\ln\frac {f_i}{f_0}=\frac 1{RT} \left[\mu_i(T,p)-\mu(T,p^0)\right]=\int^p_{p_0} \frac V{RT}dp </math>
                            低压下可认为是理想气体，于是<math inline=1>{f_i}/{f_0}={p_i}/{p_0}</math>。<br><br>
                            对于液相纯组分：
                            <math class="ms">\ln\frac {f_i}{f_0}=\frac 1{RT} \left[\mu^L_i(T,p)-\mu^L(T,p^0)\right]=\int^p_{p_0} \frac {V^L}{RT} dp </math>
                            <math inline=1>exp\left(\int^p_{p_0} \frac {V^L}{RT} dp \right)</math> 称为Poynting因子，低压下一般省略。<br><br>
                            对于气相混合物：
                            <math class="ms">RT\ln\frac {\widehat f_i}{f_0}=\mu_i(T,p,y_i)-\mu_i(T,p_0)=RT\ln\phi_iy_ip</math>
                            低压下逸度系数一般为1，可以省略。<br><br>
                            

                        </p>
                        <md-button class="md-primary" @click="hide('s2')">So easy, close</md-button>
                    </div>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="3.2.2.2 计算" md-description ="" :md-done.sync="third">
                <div>
                    <p>
                        
                        同温度同组分下：
                        <math class="ms">RTd\ln \widehat f_i=\overline V_idp\;,\;\widehat\phi_i=\frac {\widehat f_i}{py_i} </math>
                        于是得到：
                        <math class="ms">\ln\widehat\phi_i=\int^p_{p_0}(\overline Z_i-1)\frac {dp}p\;,\;RTln\widehat\phi_i=\int^p_{p_0}\left[\left(\frac {\partial V_t}{\partial n_i}\right)_{T,p,{n_{j\neq i}}}-\frac {RT}p \right]dp</math>
                        <math class="ms">RT\ln\widehat \phi_i=\int_{V_t}^\infty\left[\left(\frac{\partial p}{\partial n_i}\right)_{T,V_t,n_j}-\frac{RT}{V_t}\right]dV_t-RT\ln Z_m</math>
                        
                    </p>
                    <md-button class="md-primary" @click="show('s1')">推导过程</md-button>
                    <div v-show="s1">
                        <p>
                            可参考《化工热力学》125页。<br>
                            <math class="ms">d\ln\widehat\phi_i=\frac{p\overline{V_i}}{RT}\frac{dp}p-\frac{dp}p=\left(\overline{Z_i}-1\right)\frac{dp}p</math>
                            <math class="ms">\ln\widehat \phi_i=\int_0^p\left(\frac{\overline{V_i}}{RT}dp-\frac{dp}p\right)</math>
                            <math class="ms">RT\ln\widehat \phi_i=\int_0^p\left[\left(\frac{\partial V_t}{\partial n_i}\right)_{T,p,n_j}-\frac{RT}p\right]dp</math>
                            <math class="ms">\left(\frac{\partial A_t}{\partial V_t}\right)_{T,n}=-p</math>
                            <math class="ms">A_t-A_t'=-\int_{V_t'}^{V_t}pdV_t</math>
                            <math class="ms">A_t-A_t'=-\int_\infty^{V_t}pdV_t-\int_{V_t'}^\infty pdV_t</math>
                            上式中右边第一项积分需要用等温下真实气体的p-V-T关系，第二项积分是对理想气体，可直接积分。
                            <math class="ms">A_t-A_t'=-\int_\infty^{V_t}\left(p-\frac{nRT}{V_t}\right)dV_t-nRT\ln\frac{V_t}{V_t'}</math>
                            <math class="ms">\left(\frac{\partial A_t}{\partial n_i}\right)_{T,V_t,n_j}-\left(\frac{\partial A_t'}{\partial n_i}\right)_{T,V_t,n_j}=-\int_\infty^{V_t}\left[\left(\frac{\partial p}{\partial n_i}\right)_{T,V_t,n_j}-\frac{RT}{V_t}\right]dV_t-RT\ln\frac{V_t}{V_t'}</math>
                            <math class="ms">\left(\frac{\partial A_t}{\partial n_i}\right)_{T,V_t,n_j}=\left(\frac{\partial G_t}{\partial n_i}\right)_{T,V_t,n_j}=\overline G_i</math>
                            <math class="ms">\left(\frac{\partial A_t'}{\partial n_i}\right)_{T,V_t,n_j}=\left(\frac{\partial G_t'}{\partial n_i}\right)_{T,V_t,n_j}=\overline G_i'</math>
                            <math class="ms">\overline{G_i}-\overline{G_i'}=-\int_\infty^{V_t}\left[\left(\frac{\partial p}{\partial n_i}\right)_{T,V_t,n_j}-\frac{RT}{V_t}\right]dV_t-RT\ln\frac{V_t}{V_t'}=RT\ln\frac{\widehat f_i}{\widehat f_i'}=RT\ln\frac{\widehat f_i}{y_ip_0}</math>
                            <math class="ms">RT\ln\frac{V_t}{V_t'}=RT\ln\left[\frac{\left({\displaystyle\frac{nZRT}p}\right)}{\left({\displaystyle\frac{nRT}{p_0}}\right)}\right]=RT\ln Z+RT\ln\frac{p_0}p</math>
                            <math class="ms">RT\ln\widehat \phi_i=\int_{V_t}^\infty\left[\left(\frac{\partial p}{\partial n_i}\right)_{T,V_t,n_j}-\frac{RT}{V_t}\right]dV_t-RT\ln Z</math>
                                                            
                        </p>
                        <md-button class="md-primary" @click="hide('s1')">close</md-button>
                    </div>
                    <h3>状态方程计算逸度系数</h3>
                    <p>
                        简要介绍用舍项维里方程和RK方程计算逸度系数。方程中相关参数由采用的混合规则和物性决定，此处不详细说明。<br><br>
                        <strong>舍项维里方程</strong><br>
                        <math class="ms">V_t=\frac{nRT}p+\frac{n^2B_m}n</math>
                        <math class="ms">n^2B_m=\sum_i\sum_jn_in_jB_{ij}</math>
                        在T,p和<math inline=1>n_j</math>为常数时，<math inline=1>T_t</math>对<math inline=1>n_i</math>微分：
                        <math class="ms">\overline{V_i}=\left(\frac{\partial V_t}{\partial n_i}\right)_{T,p,n_j}=\frac{RT}p+\left(2\sum_jy_jB_{ij}-B_m\right)</math>
                        代入逸度系数公式并积分得到：
                        <math class="ms">\ln\widehat \phi_i=\frac p{RT}\left(2\sum_jy_jB_{ij}-B_m\right)</math>
                        <math inline=1>B_{ij}</math>是表征分子i和j之间相互作用的第二维里系数。<br>
                        或表示成下列形式：
                        <math class="ms">\ln\widehat \phi_i=\frac p{RT}\left\{B_{ii}+\frac12\sum_i\sum_ky_iy_k\left(2\delta_{ji}-\delta_{ik}\right)\right\}</math>
                        其中：
                        <math class="ms">\delta_{ji}=2B_{ji}-B_{jj}-B_{ii}\;,\;\delta_{jk}=2B_{jk}-B_{jj}-B_{kk}</math><br>

                        <strong>RK方程</strong><br>
                        
                        <math class="ms">\ln\widehat \phi_i=\ln\frac V{V-b}+\frac{b_j}{V-b}-\frac{2{\displaystyle\sum_j}y_ja_{ij}}{RT^{1.5}b}\ln\frac{V+b}V+\frac{ab_i}{RT^{1.5}b^2}\left(\ln\frac{V+b}V-\frac b{V+b}\right)-\ln Z</math>
                        <math class="ms">a=\sum_i\sum_jy_iy_ja_{ij}\;,\;b=\sum_iy_ib_i</math>
                        其中<math inline=1>a_{ii},a_{jj},b_i,b_j</math>分别为组分i和j的RK方程常数，<math inline=1>a_{ij}</math>为双元相互作用常数。<br><br>
                        相关计算例题可见《化工热力学》128页，此处省略。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','third')">OK</md-button>
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

