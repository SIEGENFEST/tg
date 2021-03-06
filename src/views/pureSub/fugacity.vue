<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="2.4 纯物质逸度" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        本部分介绍的逸度是以理想气体状态为参比态的情况下，物质化学势的表示方法。先介绍单组分真实气体的逸度，再延伸至凝聚态物质（液体，固体等）的逸度。后面部分内容中，逸度会应用于混合物。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="2.4.1 定义" md-description ="" :md-done.sync="second">
                <div>
                    <p>
                        对于单组分封闭系统：
                        <math class="ms">dG=d\mu=-SdT+Vdp</math> <br>
                        因此恒温下：
                        <math  class="ms" id="vdp">\mu-\mu^0=G-G^0=\int^p_{p_0}Vdp</math>
                        其中<math inline=1>\mu^0</math>是<math inline=1>p_0</math>（一般为1bar/atm）下理想气体状态的化学势。<br>
                    </p>
                    <h3>逸度</h3>
                    <p>
                        假设研究对象是理想气体，可以得到：
                        <math  class="ms">\mu=\mu^0+RTln\frac p{p_0}</math>
                        而实际气体的状态方程与理想气体不同；为表示差异，将以上方程修正为：
                        <math class="ms em">\mu=\mu^0+RTln\frac f{f^0}</math>
                        其中f 是实际气体逸度，<math inline=1>f^0</math>是同温度 <math inline=1>p_0=1bar\;</math>下的逸度。逸度单位与压力单位相同，可视为“校正压力”或“有效压力”。<br>
                        当 <math inline=1>p\rightarrow 0</math> 时，气体状态趋近于理想气体，因此有 <math inline=1>f\rightarrow p</math>。
                        其实在一定压力范围下（一般低于15bar)，就可以认为<math inline=1>f=p</math>。<br>
                        因此在<math inline=1>p^0=1bar</math>下，气体可视为理想，<math inline=1>f^0=p_0=1bar</math>。所以一般省略<math inline=1>f^0</math>，得到：
                        <math class="em">RT\ln f=\mu-\mu^0</math>
                        
                    </p>
                    <h3>逸度系数</h3>
                    <p>
                        定义逸度系数：
                        <math class="ms"> \phi \equiv \frac fp</math> 
                        容易得到如下方程：
                        <math class="ms">\mu^{real}(T,p)=\mu^{ig}(T,p_0)+RT\ln \frac f{p^0}</math>
                        <math class="ms">\mu^{ig}(T,p)=\mu^{ig}(T,p_0)+RT\ln \frac p{p^0}</math>
                        因此：
                        <math class="ms em" id="yd">RT\ln \phi=\mu^{real}(T,p)-\mu^{ig}(T,p)</math>
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="2.4.2 计算逸度系数" md-description ="压缩因子法、状态方程法" :md-done.sync="third">
                <div>
                    <p>
                        由定义可以得到，逸度可以表示为：
                        <math class="ms">ln\frac f{f^0}=\mu-\mu^0=\int^p_{p_0}Vdp</math>
                        而逸度系数<math inline=1>\phi=\frac fp</math>，因此求取逸度系数需要获得V和p的关系。可以通过压缩因子或者状态方程计算。
                    </p>
                    <h3>压缩因子法计算</h3>
                    <p>
                        与2.1.3.3部分介绍的方法相似。由方程 <math inline=1>pV=ZRT</math> 可以得到：
                        <math class="ms">\ln\frac f{f^0}=\int_{p_0}^p\frac{Zdp}p</math>
                        <math inline=1>p_0</math> 趋近0时，上式积分困难，因此改写为：
                        <math class="ms">\ln\frac f{f^0}=\int_{p_0}^p\frac{dp}p-\int_{p_0}^p\frac{1-Z}pdp</math>
                        <math inline=1>f^0=p_0</math>，上式变化得到：
                        <math class="ms">\ln \phi =\ln\frac fp=-\int_{p_0}^p\frac{1-Z}pdp</math>
                        普遍化，得到：
                        <math class="ms">\ln \phi=-\int_{p_{r,0}}^{p_r}\frac{1-Z}{p_r}d{p_r}</math>
                        两参数法，<math inline=1>Z=Z(T,p_r),\;\phi =\phi (T,p_r)</math>，得到下图：<br>
                        <img src="../../../public/img/pure/fu1.png" alt="" class="piclarge"><br><br>
                        三参数法：
                        <math class="ms">\phi =\phi (T,p_r,\omega),\;\lg\phi=\lg \phi^{(0)}+\omega \lg\phi^{(1)}</math>
                        其中 <math inline=1>\lg \phi^{(0)},\;\lg\phi^{(1)}</math> 分别是简单流体的逸度系数和校正项，可以查教材附录得到。
                    </p>
                    <h3>状态方程计算</h3>
                    <p>
                        逸度系数可以表示为：
                        <math class="ms" >\ln\phi=\ln\left(\frac fp\right)=\frac1{RT}\int_{P_0}^P\left(V-\frac{RT}P\right)dp=\frac1{RT}\int_{P_0}^PVdp-\ln\frac p{p_0}</math>
                        当p很大时，后一项趋近于无穷；因此将方程改写为：
                        <math class="ms em">\ln\phi=(Z-1)-lnZ-\frac 1{RT}\int^V_{V_0}(p-\frac {RT}V)dV</math>
                        将状态方程代入使p=p(T,V)即可求得结果。<br><br>
                        使用截断的维里方程，代入方程得到：
                        <math>\ln\phi=\frac {Bp}{RT}</math>
                        
                        使用RK方程，代入方程得到：
                        <math class="ms">\ln \phi =\ln\frac fp=Z-1-\ln\frac{pV-bp}{RT-bp_0}+\frac a{bRT^{1.5}}\ln\left[\left(\frac V{V_0}\right)\left(\frac{V_0+b}{V+b}\right)\right]</math>
                        可见当 <math inline=1>p_0\rightarrow0,\;V_0\rightarrow\infty </math> 时，有 <math inline=1>\left(RT-p_0b\right)\rightarrow RT,\frac{V_0+b}{V_0}\rightarrow1</math>，方程变化为：
                        <math class="ms">\ln\frac fp=Z-1-\ln\left(Z-\frac{bp}{RT}\right)-\frac a{bRT^{1.5}}\ln\left(1+\frac bv\right)</math>
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="2.4.3 逸度和温度、压力的关系" md-description ="" :md-done.sync="fourth">
                <div>
                    <h3>对温度偏导</h3>
                    <p>
                        由定义得：
                        <math>\ln f=\frac{\mu-\mu^\circleddash}{RT}</math>
                        压力一定，对T求导得到：
                        <math class="ms">{\left(\frac{\partial\ln f}{\partial T}\right)}_p=\frac1R{\left[\frac{\partial\left({\displaystyle\frac\mu T}\right)}{\partial T}\right]}_p-\frac1R\left[\frac{d\left({\displaystyle\frac{\mu^\circleddash}T}\right)}{dT}\right]_p</math>
                        其中：
                        <math class="ms">\frac1R{\left[\frac{\partial\left({\displaystyle\frac\mu T}\right)}{\partial T}\right]}_p=\frac1{RT}{\left(\frac{\partial\mu}{\partial T}\right)}_p-\frac\mu{RT^2}=\frac S{RT}-\frac\mu{RT^2}=-\frac H{RT^2}</math>
                        <math class="ms">\frac1R\left[\frac{d\left({\displaystyle\frac{\mu^\circleddash}T}\right)}{dT}\right]_p=-\frac {H_0}{RT^2}</math>
                        因此：
                        <math class="ms">{\left(\frac{\partial\ln f}{\partial T}\right)}_p=\frac{H'-H}{RT^2},\;\left(\frac {\partial \ln f}{\partial (1/T)}\right)_p=\frac {H-H_0}R
                        </math>
                    </p>
                    <h3>对压力偏导</h3>
                    <p>
                        <math class="ms">{\left(\frac{\partial\ln f}{\partial p}\right)}_T=\frac1{RT}{\left[\frac{\partial\left(\mu-\mu^\circleddash\right)}{\partial p}\right]}_T=\frac1{RT}{\left(\frac{\partial\mu}{\partial p}\right)}_T=\frac V{RT}</math>
                        于是可以得到，在一定温度下，单组分系统从状态1到状态2有：
                        <math>\ln f_2=\ln f_1+\int^{p_2}_{p_1}\frac V{RT}dp</math>
                        
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('fourth','fifth')">OK</md-button>
            </md-step>
            <md-step id="fifth" md-label="2.4.4 凝聚态物质逸度" md-description ="" :md-done.sync="fifth">
                <div>
                    <p>
                        以上讨论了气体的逸度和计算方法。对于凝聚态物质，其逸度定义同样为：
                        <math class="ms">\mu=\mu^0+RT\ln f</math>
                        对温度和压力的偏导关系式：
                        <math class="ms">\left(\frac{\partial\ln f^L}{\partial T}\right)_P=\frac{H^0-H^L}{RT^2}</math>
                        <math class="ms">\left(\frac{\partial\ln f^L}{\partial p}\right)_T=\frac{V^L}{RT}</math>
                        其中 <math inline=1>H^L,V^L</math> 分别是液态物质的摩尔焓和摩尔体积；<math inline=1>H^0</math>是同温度下该物质理想气体状态的摩尔焓。<br><br>
                        当一个纯物质达到相平衡时，它在α，β两相中的化学势应该相等：
                        <math class="ms">\mu^{(0,\alpha)}+RT\ln f^\alpha=\mu^{(0,\beta)}+RT\ln f^\beta</math>
                        一般情况下，参比态都为<math inline=1>(T,p^0)</math>下的理想气体，因此<math inline=1>\mu^{(0,\alpha)}=\mu^{(0,\beta)}=\mu^0</math>；此时两相的逸度相等：
                        <math class="ms">f^\alpha=f^\beta</math>
                        具体可见相平衡部分。

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
            show:function(t){
               this[t]=true;
            },
            
            hide:function(t){
                this[t]=false;
            },
        },
        mounted: function () {
        var _this=this;
        var hash = window.location.hash;
        var index = hash.lastIndexOf("#");
        var sk=hash.lastIndexOf('#', index - 1);
        if ((index != -1) &&(sk >0)) {
        var id = hash.substring(index + 1, hash.length + 1);
        var act=hash.substring(sk+ 1, index);
        _this.active=act;
        var div = document.getElementById(id);
        if (div) {
            this.$nextTick(() => {
            div.scrollIntoView();
            });
        }
        }
    },
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
    .ms{
        font-size: 12px;
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

