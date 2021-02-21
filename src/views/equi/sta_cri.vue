<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="4.1 平衡与稳定" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        本部分简单介绍稳定性判据和应用以及相平衡的判据。原理和推导省略。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="4.1.1 相平衡判据" md-description ="" :md-done.sync="second">
                <div>
                    <h3>相平衡定义</h3>
                    <p>
                        混合物（或溶液）形成若干相，这些相之间保持着物理平衡而处于多相共存状态。热力学上，相平衡意味着整个物系的自由能为极小状态；从传递速度的观点，可以认为相平衡是表观速度为零的状态。
                    </p>
                    <h3>相平衡判据</h3>
                    <p>
                        对于p个相、c种物质，相平衡判据为：
                        <math class="ms em">T^\alpha=T^\beta=...=T^p</math>
                        <math class="ms em">p^\alpha=p^\beta=...=p^p</math>
                        <math class="ms em">\mu_i^\alpha=\mu_i^\beta=...=\mu_i^p</math>
                        即每个相的温度、压力相等，每种组分在各相的化学势（逸度）相等。
                    </p>
                    <h3>相平衡判据推导</h3>
                    <div>
                        <p>
                            由热力学第二定律推导可得，在孤立系统中（U,V,N恒定），平衡状态的熵最大。
                            考虑一个孤立系统，内部划分为系统α和系统β。对于总系统：
                            <math class="ms">\delta S=\delta S^\alpha+\delta S^\beta</math>
                            由热力学函数可以得到：
                            <math class="ms">\delta S^\alpha=\frac1{T^\alpha}\delta U^\alpha+\frac{p^\alpha}{T^\alpha}\delta V^\alpha-\frac{\mu^\alpha}{T^\alpha}\delta N^\alpha</math>
                            <math class="ms">\delta S^\beta=\frac1{T^\beta}\delta U^\beta+\frac{p^\beta}{T^\beta}\delta V^\beta-\frac{\mu^\beta}{T^\beta}\delta N^\beta</math>
                            由平衡相关判据可以得到：
                            <math class="ms">\delta U=\delta U^\alpha+\delta U^\beta=0\;\;\;\Rightarrow\;\;\;\delta U^\alpha=-\delta U^\beta</math>
                            <math class="ms">\delta V=\delta V^\alpha+\delta V^\beta=0\;\;\;\Rightarrow\;\;\;\delta V^\alpha=-\delta V^\beta</math>
                            <math class="ms">\delta N=\delta N^\alpha+\delta N^\beta=0\;\;\;\Rightarrow\;\;\;\delta N^\alpha=-\delta N^\beta</math>
                            <math class="ms">\delta S=\left(\frac1{T^\alpha}-\frac1{T^\beta}\right)\delta U^\alpha+\left(\frac{p^\alpha}{T^\alpha}-\frac{p^\beta}{T^\beta}\right)\delta V^\alpha-\left(\frac{\mu^\alpha}{T^\alpha}-\frac{\mu^\beta}{T^\beta}\right)\delta N^\alpha</math>
                            因此：
                            <math class="ms">\frac1{T^\alpha}-\frac1{T^\beta}=0\;\;\;\Rightarrow\;\;\; T^\alpha=T^\beta</math>
                            <math class="ms">\frac{p^\alpha}{T^\alpha}-\frac{p^\beta}{T^\beta}=0\;\;\;\Rightarrow\;\;\; p^\alpha=p^\beta</math>
                            <math class="ms">\frac{\mu^\alpha}{T^\alpha}-\frac{\mu^\beta}{T^\beta}=0\;\;\;\Rightarrow\;\;\; \mu^\alpha=\mu^\beta</math>
                            由化学势和逸度的关系，可得某组分在各相的逸度相等：
                            <math class="ms">RT\ln\widehat f_i=\mu_i\left(T,p,\left\{x\right\}\right)-\mu_i^0\left(T,p^0\right)</math>
                            <math class="ms">RT\ln\widehat f_i^\alpha=\mu_i^\alpha\left(T,p,\left\{x\right\}\right)-\mu_i^0\left(T,p^0\right)</math>
                            <math class="ms">RT\ln\left(\widehat f_i^\alpha/\widehat f_i^\beta\right)=\mu_i^\alpha\left(T,p,\left\{x\right\}\right)-\mu_i^\beta\left(T,p,\left\{x\right\}\right)=0\;\;\;\Rightarrow\;\;\; \widehat f_i^\alpha=\widehat f_i^\beta</math>
                            <math class="ms em" id="yidu">\widehat f_i^\alpha=\widehat f_i^\beta=...=\widehat f_i^p\left(i=1,2,...,C\right)</math>
                        </p>
                        <h3>相平衡推论</h3>
                        <p>
                            1.当（S,V,N）确定的条件下，平衡态U最低；<br>
                            2.当（T,V,N）确定的条件下，平衡态A最低；<br>
                            3.当（T,P,N）确定条件下，平衡态G最低；<br>
                            4.当（S,P,N）确定条件下，平衡态H最低。<br>
                        </p>
                    </div>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="4.1.2 稳定性判据" md-description ="" :md-done.sync="third">
                <div>
                    <p>
                        稳定性可以由图像表示为：<br>
                        <img src="../../../public/img/eq/eq1.png" alt="" class="piclarge"><br><br>
                    </p>
                    <h3>稳定性数学表示</h3>
                    <p>
                        稳定性：
                        <math class="ms em">\frac{\operatorname dU}{\operatorname dx}=0\;\;\;\;\;\;\frac{\operatorname d^2U}{\operatorname dx^2}>0</math>
                        稳定极限：
                        <math class="ms">\frac{\operatorname dU}{\operatorname dx}=0\;\;\;\;\;\;\frac{\operatorname d^2U}{\operatorname dx^2}=0</math>
                        <math class="ms"></math>
                        已经知道，一个封闭系统的内能可以表示为熵、体积和摩尔量的函数，其微分为：
                        <math class="ms">\operatorname d\underline U=T\operatorname d\underline S-p\operatorname d\underline V+\sum_i\mu_i\operatorname d N_i </math>
                        对于一元体系，将微分代入稳定性的数学表示，得到稳定条件的热力学描述：
                        <math class="ms">\left(\frac{\partial^2U}{\partial S^2}\right)_{V,N}>0\;\;\;\Rightarrow\;\;\;\left(\frac{\partial T}{\partial S}\right)_{V,N}>0\;\;\;\Rightarrow\;\;\;\frac T{NC_V}>0</math>
                        得到<span class="em">热稳定性</span>判据：
                        <math class="ms em">\frac T{C_V}>0</math>
                        同理可以得到<span class="em" id="lix">力学稳定性</span>判据：
                        <math class="ms em">\left(\frac{\partial^2A}{\partial V^2}\right)_{T,N}>0\;\;\;\Rightarrow\;\;\;0>\left(\frac{\partial p}{\partial\underline V}\right)_T</math>
                        <math class="ms em">\left(\frac{\partial^2H}{\partial S^2}\right)_{p,N}>0\;\;\;\Rightarrow\;\;\;\frac T{C_p}>0</math>
                        力学稳定性比热稳定性充分。即满足力学稳定性包含满足热稳定性。<br><br>
                        对于二元体系，其稳定判据为：
                        <math class="ms" id="ery">\left(\frac {\partial^2 G}{\partial N_1^2}\right)_{T,p,N_2}>0\;\;\Rightarrow\;\; \left(\frac {\partial^2 G}{\partial x_i^2}\right)_{T,p}>0</math>
                        <math class="ms"></math>
                    </p>
                    <h3>临界点</h3>
                    <p>
                        <img src="../../../public/img/eq/crp.png" alt="" class="piclarge"><br>
                        如图所示，两个稳态相互靠近，融合时得到临界点。可见临界点三阶导数为0。热力学上，临界点表示气相和液相刚好融合的状态，数学上可以表示为：
                        <math class="ms">\left(\frac{\partial^3A}{\partial V^3}\right)_{T,N}=0\;\;\;\Rightarrow\;\;\;\left(\frac{\partial^2p}{\partial^2\underline V}\right)_T=0</math>

                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="4.1.3 稳定性判据应用" md-description ="" :md-done.sync="fourth">
                <div>
                    <h3>Maxwell Construction</h3>
                    <p>
                        在<router-link :to="{path:'../pu-sub/real-gas/cubic-eq?#second#maxwc'}">Van der Waals方程部分</router-link>已经介绍过，此处省略。<br><br>
                    </p>
                    <h3>双节线，旋节线</h3>
                    <p>
                        Van der Waals方程得到的p-V图：<br>
                        <img src="../../../public/img/eq/vdw.png" alt="" class="piclarge"><br>
                        已知力学稳定性：
                        <math class="ms">0>\left(\frac{\partial p}{\partial\underline V}\right)_T</math>
                        可见红色部分不符合力学稳定性，不稳定，实际上不存在；而虚线部分为亚稳态，可以存在。<br>
                        亚稳态一边端点（红色点）为稳定极限，相连构成<span class="em">旋节线</span>；另一边端点（黑色点）表示饱和液体/汽体，相连构成<span class="em" id="sjx">双节线</span>。由Maxwell Construction可知上下两部分面积相等，从而计算得到构成双节线的端点，或由实验数据得到。<br>
                        结合临界点，可以得到相图：<br><br>
                        <img src="../../../public/img/eq/xt.png" alt="" class="piclarge"><br>
                        根据以上说明，可知系统条件处于旋节线内部时，体系会分相；处于双节线与旋节线之间时，受到扰动后体系会分相，一般直接按照分相计算；双节线以外体系可以稳定存在。因此相平衡部分即考虑双节线内部分相的情况。
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

