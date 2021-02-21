<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="4.3 互溶体系气液平衡计算" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        在<router-link :to="{path:'sta?#second#yidu'}">4.1部分</router-link>已经说明，相平衡时组分在各相的逸度相等。对于气液相平衡体系，可以表示为：
                        <math class="ms">\widehat f_i^V=\widehat f_i^L\left(i=1,2,...,n\right)</math>
                        逸度是以 (T,p0) 下纯物质的理想气体状态作为参比态进行表示的。<br>
                        可以得到气相分逸度：
                        <math class="ms">\widehat f_i^V=py_i\widehat \phi_i^V</math>
                        液相分逸度：
                        <math class="ms">\widehat f_i^L=px_i\widehat \phi_i^L=f_i^0x_i\gamma_i^L</math>
                        其中<math inline=1>f^0_i</math>是 (T,p)下液态纯物质的逸度。<br><br>

                        液相分逸度的表达式表明，可以由状态方程计算<math inline=1>\widehat \phi_i^L</math>，或者用活度系数方程计算<math inline=1>f_i^0x_i\gamma_i^L</math>，从而进行相平衡的计算。以下分别介绍这两种方法。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="4.3.1 气液相平衡的热力学表示" md-description ="状态方程法，活度系数法" :md-done.sync="second">
                <div>
                    <h3>状态方程法</h3>
                    <p>
                        气液平衡，分逸度相等，得到：
                        <math class="ms">px_i\widehat \phi_i^L=py_i\widehat \phi_i^V</math>
                        得到气液平衡常数K：
                        <math class="ms">K=\frac{y_i}{x_i}=\frac{\widehat \phi_i^L}{\widehat \phi_i^V}</math>
                        采用同一种状态方程和混合规则，计算得到气液相的逸度系数，即可进行气液平衡计算。
                    </p>
                    <h3>活度系数法</h3>
                    <p>
                        对于气相和液相都以 (T,p0) 下纯物质理想气体状态为参比态。<br>
                        由<router-link :to="{path:'../mix/m-gas/mg-fu?#second#gasf'}">逸度部分</router-link>相关内容可以得到气相分逸度：
                        <math class="ms">\mu_i(T,p,y_i)-\mu^0(T,p_0)=RT\ln\widehat f_i^V </math>
                        <math class="ms">\widehat f_i^V=py_i\widehat \phi_i^V</math>
                        液相分逸度：
                        <math class="ms">\widehat f_i^L=p_i^*\phi_i^*x_i\gamma_iexp(\int_{p_i^*}^p\frac{V_i^L}{RT}dp)</math>
                        其中，<math inline=1>p_i^*</math> 表示 i 组分的饱和蒸气压，<math inline=1>\phi_i^*</math> 表示饱和蒸气压下的逸度系数。<br>
                        气液相分逸度相等，得到：
                        <math class="ms em">py_i\widehat \phi_i^V=p_i^*\phi_i^*x_i\gamma_iexp(\int_{p_i^*}^p\frac{V_i^L}{RT}dp)</math>
                    </p>
                    <md-button class="md-primary" @click="show('s1')">液相分逸度推导过程</md-button>
                    <div v-show="s1">
                        <p>
                            液相分逸度以 (T,p0) 下纯物质理想气体状态为参比态，即求：
                            <math class="ms">RT\ln\widehat f_i^L= \mu^L_i(T,p,x_i)-\mu_i^0(T,p_0)</math>
                            由<router-link :to="{path:'../mix/li-mix/act?#second#gamma'}">活度部分</router-link>相关内容可知，以 (T,p) 下纯液体为参比态时：
                            <math class="ms">\mu_i^L(T,p,x_i)-\mu_i^L(T,p)=RT\ln{x_i\gamma_i}</math>
                            由<router-link :to="{path:'../pu-sub/fugacity?#second#vdp'}">逸度相关内容</router-link>，可以得到 (T,p*) 下纯液体为参比态时，(T,p) 下纯液体的表示：
                            <math class="ms">\mu_i^L(T,p)-\mu^L_i(T,p^*)=\int^p_{p^*}V^L\operatorname dp </math>
                            蒸气压下，物质达到相平衡，液体部分的化学势等于气体部分的化学势：
                            <math class="ms">\mu^L_i(T,p^*)=\mu^V_i(T,p^*)</math>
                            由<router-link :to="{path:'../pu-sub/fugacity?#second#yd'}">逸度相关内容</router-link>，可以得到 (T,p0) 下理想气体为标准态下，(T,p*) 下气体的表示：
                            <math class="ms">\mu^V_i(T,p^*)-\mu^0_i(T,p_0)=RT\ln\frac{f^*}{f^0}=RT\ln p^*\phi_i^* </math>
                            将以上四式相加，得到液相分逸度：
                            <math class="ms">RT\ln\widehat f_i^L= \mu^L_i(T,p,x_i)-\mu_i^0(T,p_0)=RT\ln p_i^*\phi_i^*x_i\gamma_iexp(\int_{p_i^*}^p\frac{V_i^L}{RT}dp)</math>
                            即：
                            <math class="ms">\widehat f_i^L=p_i^*\phi_i^*x_i\gamma_iexp(\int_{p_i^*}^p\frac{V_i^L}{RT}dp)</math>
                        </p>
                        <md-button class="md-primary" @click="hide('s1')">close</md-button>
                    </div>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="4.3.2 不同压力下气液平衡计算" md-description ="" :md-done.sync="third">
                <div>
                    <p>
                        已经得到活度系数法下，气液平衡方程为：
                        <math class="ms em">py_i\widehat \phi_i^V=p_i^*\phi_i^*x_i\gamma_iexp(\int_{p_i^*}^p\frac{V_i^L}{RT}dp)</math>
                        以下介绍不同情况下方程的化简。
                    </p>
                    <h3>理想低压体系</h3>
                    <p>
                        压力低于 20bar 即可认为是低压。<br>
                        当体系可视为理想时：<br>
                        1. 气相视为理想气体，逸度系数视为1：
                        <math class="ms">\widehat \phi_i^V=1\;\;\; ,\;\;\;\phi_i^*=1</math>
                        2. 液相体积很小，一般可以忽略poynting因子：
                        <math class="ms">exp(\int_{p_i^*}^p\frac{V_i^L}{RT}dp)=1</math>
                        于是得到化简式：
                        <math class="ms em">py_i=p_i^*x_i\gamma_i</math>
                        如果液相也可以视为理想溶液，则活度系数为1，方程进一步化简为：
                        <math class="ms">py_i=p_i^*x_i</math>
                    </p>
                    <h3>一般中低压体系</h3>
                    <p>
                        一般中低压下，压力为 15~20bar。若压力没有接近临界压力，则可以认为poynting 因子趋近于1，且活度系数与压力无关。方程化简为：
                        <math class="ms em">py_i\widehat \phi_i^V=p_i^*\phi_i^*x_i\gamma_i</math>
                    </p>
                    <h3>高压体系</h3>
                    <p>
                        高压汽液相平衡：体系压力从10~20atm到临界压力的范围内所测定的汽液平衡。若体系温度、压力超过混合物的临界值，则汽液平衡不复存在（超临界流体）。<br>
                        含超临界组分的高压汽液相平衡：若体系的温度和压力超过某一组分的临界值，则该组分称为超临界组分，此平衡称为含有超临界组分的高压汽液相平衡。<br>
                        <img src="../../../public/img/eq/gaoya.png" alt="" class="piclarge"><br>
                        <small class="sma">（图片来源：高光华 化工热力学[M]. 第3版. 北京: 清华大学出版社, 2017；280）</small><br>
                        从相图看，乙烷（1）-戊烷（2）二元系高压下，在37.8℃以上时，y-x曲线出现极大值，且乙烷的摩尔分数不能达到1.0，即曲线在中途中断。<br>
                        纯乙烷的临界温度是33℃，临界压力是4883.87kPa；纯戊烷的临界温度是197℃，临界压力是3374.12kPa。<br>
                        在温度高于乙烷临界温度时，纯乙烷不能以液相存在，使得y-x曲线中途中断，因此y-x曲线与对角线的交点就表示该温度下的二元临界状态。<br><br>
                        高压下，原来的液相热力学函数与压力无关的假设不再成立，简单的二项维里式也不足以表达蒸汽的性质；超临界组分的出现使液相标准态逸度的计算变得困难。高压下，气液平衡计算模型主要有以下两种：<br><br>
                        1. 混合模型关联<br>
                        <math class="ms">K_i=\frac{y_i}{x_i}=\frac{\gamma_if_i^0}{\widehat \phi_ip}</math>
                        汽相逸度系数计算通常依据 van der Waals型硬球模型（一般用RK方程）；液相活度系数计算通常依据Scatchard-Hildebrand正规溶液模型。<br>
                        2. 状态方程法<br>
                        <math class="ms">K_i=\frac{y_i}{x_i}=\frac{\widehat \phi_i^L}{\widehat \phi_i^V}</math>
                        两种方法的优缺点：<br>
                        <img src="../../../public/img/eq/yqd.png" alt="" ><br>
                        <small class="sma">（图片来源：高光华 化工热力学[M]. 第3版. 北京: 清华大学出版社, 2017；283）</small><br>
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="4.3.3 气液平衡数据热力学校验" md-description ="" :md-done.sync="fourth">
                <div>
                    <p>
                        汽液平衡数据的热力学校验，即用热力学的普遍关系式来校验实验数据的可靠性。
                    </p>
                    <div>
                    <button class="bu" @click="show('s2')">恒温体系</button>
                    <div v-show="s2">
                        <p>
                            对于恒温体系，主要有GD方程的活度系数形式和积分校验两种方法。
                        </p>
                        <h3>GD方程</h3>
                        <p>
                            在<router-link :to="{path:'../mix/mix-exc?#third#yzx'}">3.1部分</router-link>，对GD方程和一致性判据进行了简单介绍。此处同理得到<span class="em">恒温恒压</span>下，活度系数表示的GD方程：
                            <math class="ms em">\sum_ix_i\operatorname d\ln\gamma_i =0</math>
                            由二元GD方程对组分偏导，得到热力学一致性校验判据：
                            <math class="ms em">x_1\left(\frac{\partial\ln\gamma_1}{\partial x_1}\right)_{T,p}+x_2\left(\frac{\partial\ln\gamma_2}{\partial x_1}\right)_{T,p}=0</math>
                            然而，二元体系存在矛盾：按照相律F=C-P+2，二元系的自由度为2，所以当T,p固定以后，液相组成不再改变。如果改变，则必然引起体系的温度或压力的改变。所以上式不能严格应用于二元体系气液平衡实验数据的校验。<br>
                            在压力不太高的情况下，压力的改变对液相活度系数的影响很小，可以将上式应用于恒温体系。
                        </p>
                        <h3>活度系数表示的GD方程具体应用</h3>
                        <p>
                            根据二元汽液平衡实验数据，作出 <math inline=1>\lg\gamma_1-x_1\; ,\;\lg\gamma_2-x_1</math> 曲线，若数据满足热力学同一性要求，则曲线应符合如下几条定性规律：<br>
                            1. 所有的数据点落在一条光滑曲线上，没有分散的数据点。如果有任何落在线外的点，则表明该数据点有误差；<br>
                            2. 当两个活度系数的曲线均以 <math inline=1>x_1</math>为横坐标时，则两条曲线的斜率的符号一定相反：
                            <math class="ms">x_1\left(\frac{\partial\ln\gamma_1}{\partial x_1}\right)_T+x_2\left(\frac{\partial\ln\gamma_2}{\partial x_1}\right)_T=0\;\;\;\Rightarrow\;\;\;\left(\frac{\partial\ln\gamma_1}{\partial x_1}\right)_T=-\frac{x_2}{x_1}\left(\frac{\partial\ln\gamma_2}{\partial x_1}\right)_T</math>
                            可见当 <math inline=1>x_1=0.5</math> 时，两条曲线的斜率相等，符号相反；<br>
                            3. 如果两个配偶参数相当，则中点值约为配偶参数的1/4；如果配偶参数不等，则配偶参数高的曲线的中点值低，配偶参数低的曲线的中点值高；<br>
                            4. 如果在<math inline=1>\lg\gamma-x</math>曲线上不出现最高点和最低点，那么在整个浓度范围内，两条曲线的斜率一定都是正的或是负的；若一曲线上出现极大值（或极小值），则在另一曲线上的同一组成处必定出现极小值（或极大值）；<br>
                            5. 若<math inline=1>\lg\gamma-x</math>曲线符合van Laar方程，则以<math inline=1>\left(\lg\gamma_1\right)^\frac12对\left(\lg\gamma_2\right)^\frac12</math>作图，得一直线；如不符合van Laar方程，则此线有曲变；<br>
                            6. <span class="em">两条<math inline=1>\lg\gamma-x</math>曲线下面所包含的面积应相等。</span><br>
                        </p>
                        <md-button class="md-primary" @click="show('s4')">推导过程</md-button>
                        <div v-show="s4">
                            <p>
                            以下为<math inline=1>\lg\gamma-x_1</math>图像示例：<br>
                            <img src="../../../public/img/eq/mianj.png" alt="" class="pic"><br>
                            <math inline=1>\lg\gamma_1-x_1</math>曲线下面所包含的面积应为：
                            <math class="ms">\int_{x_1=0}^{x_1=1}\left(\lg\gamma_1\right)\operatorname dx_1</math>
                            其微分：
                            <math class="ms">\operatorname d\left(x_1\lg\gamma_1\right)=x_1\operatorname d\lg\gamma_1+\left(\lg\gamma_1\right)\operatorname dx_1</math>
                            积分得到：
                            <math class="ms">\int_{x_1=0}^{x_1=1}\left(\lg\gamma_1\right)\operatorname dx_1=\left.x_1\lg\gamma_1\right|_{x_1=0}^{x_1=1}-\int_{x_1=0}^{x_1=1}x_\operatorname 1d\lg\gamma_1</math>
                            当<math inline=1>x_1=0\; ,\; x_1\lg\gamma_1=0\; ;\; x_1=1,\lg\gamma_1=0</math>，故：
                            <math class="ms">\left.x_1\lg\gamma_1\right|_{x_1=0}^{x_1=1}=0</math>
                            <math class="ms">\int_{x_1=0}^{x_1=1}\left(\lg\gamma_1\right)\operatorname dx_1=-\int_{x_1=0}^{x_1=1}x_1\operatorname d\lg\gamma_1</math>
                            对<math inline=1>\lg\gamma_1-x_1</math>曲线同理。再结合GD方程，即可得到：
                            <math class="ms">\int_{x_1=0}^{x_1=1}\left(\lg\gamma_1\right)\operatorname dx_1-\int_{x_1=0}^{x_1=1}\left(\lg\gamma_2\right)\operatorname dx_1=0</math>
                            即两曲线下面包含面积相等。
                            </p>
                            <md-button class="md-primary" @click="hide('s4')">close</md-button>
                        </div>
                        <h3>积分校验法</h3>
                        <p>
                            以上得到关系式：
                            <math class="ms">\int_{x_1=0}^{x_1=1}\left(\lg\gamma_1\right)\operatorname dx_1-\int_{x_1=0}^{x_1=1}\left(\lg\gamma_2\right)\operatorname dx_1=0</math>
                            变化后得到：
                            <math class="ms">\int_{x_1=0}^{x_1=1}\ln\frac {\gamma_1}{\gamma_2} \operatorname dx_1=0</math>
                            图像为：<br>
                            <img src="../../../public/img/eq/jfjy.png" alt="" class="pic"><br>
                            其中蓝色和绿色部分面积应该相等。当误差小于 2% 时可认为符合热力学一致性。
                        </p>
                        <md-button class="md-primary" @click="hide('s2')">close</md-button>
                    </div></div>
                    <div>
                    <br><button class="bu" @click="show('s3')">恒压体系</button>
                    <div v-show="s3">
                        <p>
                            等压气液平衡，得到GD方程：
                            <math class="ms">\sum_ix_i\operatorname d\ln\gamma_i=-\frac {\triangle H}{RT^2}\operatorname dT </math>
                            二元体系下，积分得到汽液平衡数据热力学同一性校验式：
                            <math class="ms em">\int_{x_1=0}^{x_1=1}\left(\ln\frac{\gamma_2}{\gamma_1}\right)\operatorname dx_1=-\int_{x_1=0}^{x_1=1}\frac{\triangle H_S}{RT^2}\operatorname dT</math>
                            其中，<math inline=1>\triangle H_S</math> 是溶液的积分溶解热，或溶解的积分混合热：
                            <math class="ms">\triangle H_S=H-(x_1H_1+x_2H_2)</math>
                            H 是溶液的摩尔焓，<math inline=1>H_i</math>为同温同压下纯组分 i 的摩尔焓。<br>
                            然而，实际应用时，由于<math inline=1>\triangle H_S</math> 数据很缺乏，方程右边的积分值很难确定。
                        </p>
                        <h3>Herrington 半经验方法</h3>
                        <p>
                            对于以上问题，Herrington 推荐一个半经验方法来检验二元等压数据的热力学同一性。类似积分校验法，根据实验数据以 <math inline=1>lg\frac{\gamma_2}{\gamma_1}</math> 对 <math inline=1>x_1</math> 作图：<br><br>
                            <img src="../../../public/img/eq/jfjy.png" alt="" class="pic"><br>
                            令：
                            <math class="ms">D=\left|\frac{\left(\mathrm{面积}A\right)-\left(\mathrm{面积}B\right)}{\left(\mathrm{面积}A\right)+\left(\mathrm{面积}B\right)}\right|\times100</math>
                            <math inline=1>\theta</math>表示组分的沸点范围，如无共沸物生成，则：
                            <math class="ms">\theta=\left|T_1-T_2\right|</math>
                            <math inline=1>T_1\;,\;T_2</math> 分别代表组分1和组分2的沸点。有共沸物生成时，<math inline=1>\theta</math> 可类似下图确定：<br>
                            <img src="../../../public/img/eq/theta.png" alt="" class="piclarge"><br>
                            <small class="sma">（图片来源：高光华 化工热力学[M]. 第3版. 北京: 清华大学出版社, 2017；293）</small><br>
                            令 <math inline=1>T_m\left(K\right)</math> 表示在 <math inline=1>x_1=0</math> 至 <math inline=1>x_1=1</math> 之间的最低沸点，J 定义为：
                            <math class="ms">J=150\frac\theta{T_m}</math>
                            若：
                            <math class="ms em">10>(D-J)</math>
                            则一般可认为该实验数据符合热力学同一性。
                        </p>
                        <md-button class="md-primary" @click="hide('s3')">close</md-button>
                    </div></div>
                    <p>
                    </p>
                </div>
                <br><md-button class="md-raised md-primary" @click="setDone('fourth','fifth')">OK</md-button>
            </md-step>
            <md-step id="fifth" md-label="4.3.4 气体溶解度" md-description ="修正 Henry 定律" :md-done.sync="fifth">
                <div>
                    <p>
                        对于二元体系，用 1 表示溶剂，2 表示溶质。对于常压下，且溶质在溶剂中不发生缔合或离解或化学反应的体系，可以采用 <router-link :to="{path:'../fund/bas-con/is?#fourth#henry'}">Henry 定律</router-link>计算气体溶解度：
                        <math class="ms">p_2=Hx_2</math>
                        可以看出，Henry定律中气相为理想气体。但是在高压下，气体行为偏离理想状态，Henry定律不再适用；对于溶解度较高的情况，定律也不适用。因此对其进行修正。<br>
                        用逸度表示相平衡，Henry定律变为：
                        <math class="ms">\widehat f^V_i=Hx_i</math>
                        而逸度又可以表示为：
                        <math class="ms">\widehat f^V_i=p_iy_i\widehat\phi^V_i=H_ix_i</math>
                        或者：
                        <math class="ms">\widehat f^V_i=\widehat f^L_i(T,p,x_i)=x_i\gamma_i f^L_i(T,p,pure) </math>
                        于是二元体系中，H 其实应该满足：
                        <math class="ms">H_{2,1}x_2=p_2y_2\widehat\phi^V_2</math>
                        <math class="ms">H_{2,1}=\gamma_i f^L_i(T,p,pure)</math>
                    </p>
                    <h3>高压下修正的 Henry 定律</h3>
                    <p>
                        一般情况下，高压下的难溶性气体在液体中的溶解度可以用Kritchevsky-Kasarnovsky导出的修正的Henry定律来表示：
                        <math class="ms">\ln\frac{\widehat f_2}{x_2}=\ln K+\frac{p\overline V_2}{RT}\left(T\mathrm{一定}\right)</math>
                        式中<math inline=1>\overline V_2</math>是液相中溶质的偏摩尔体积；K 是修正的 Henry 常数。<br>
                        例如：<br>
                        <img src="../../../public/img/eq/hx1.png" alt="" class="piclarge"><br><small class="sma">（图片来源：高光华 化工热力学[M]. 第3版. 北京: 清华大学出版社, 2017；294）</small><br>
                    </p>
                    <h3>全浓度范围的 Henry 定律</h3>
                    <p>
                        Henry定律适用于气体溶解度很低的情况。当溶解度增加时，需要考虑气体在溶剂中活度系数的改变。<br>
                        溶液中，溶剂的活度系数采用对称归一化活度系数：
                        <math class="ms">x_1\rightarrow 1\;\;\; ,\;\;\;\gamma_1\rightarrow 1</math>
                        而溶质采用 Henry 定律，其活度系数的参比态与溶液不同：
                        <math class="ms">x_2\rightarrow 0\;\;\; ,\;\;\;\gamma_2^\ast\rightarrow 1</math>
                        以上溶质的活度系数也称为以无限稀释为参考态的活度系数。其对应的标准态为假想的纯物质，无限稀释下活度趋近于 1。以理想气体为参考态时，该标准态的逸度就等于亨利系数：
                        <math class="ms">f^0=H_2</math>
                        <math inline=1>f_2 </math> 为对称归一化的活度系数。<br>
                        以理想气体为标准态，由亨利定律得到溶质的逸度：
                        <math class="ms">\widehat f_2=x_2\gamma_2^\ast f^0=x_2\gamma_2^\ast H_2</math>
                        从路易斯兰道尔定律出发则得到逸度：
                        <math class="ms">\widehat f_2=x_2\gamma_2 f_2</math>
                        以上逸度都是对溶质的描述，应该相等，即：
                        <math class="ms">\gamma_2^\ast H_2=\gamma_2 f_2</math>
                        当浓度趋于 1 时，<math inline=1>\gamma_2^\ast\rightarrow 1</math>，<math inline=1>\gamma_2\rightarrow \gamma_2^\ast</math> ，于是得到：
                        <math class="ms">H_2=\gamma_2^\infty f_2 </math>
                        <math class="ms em">\gamma_2^\ast =\gamma_2/\gamma_2^\infty</math>
                        可以参考下图。<br>
                        <img src="../../../public/img/fund/b_c_henry.png" alt="" class="piclarge"><br>
                        <small>图片来源：Introductiry Chemical Engineering Thermodynamics, Figure 11.12</small>
                    </p>
                    <h3>气体溶解度的推算法</h3>
                    <p>
                        1. Prausnitz-Shair法<br><br>
                        基础：正规溶液理论，混合过程中没有体积变化，因此不能直接应用于气体溶解在液体中有较大体积改变的过程。<br>
                        溶解过程：<br>
                        a. 具有单位逸度（<math inline=1>\widehat f_2^G=1</math>）的溶质气体在一定温度下凝聚，成为假想纯液体溶质；<br>
                        2. 凝聚的纯液体溶质溶解于溶剂中，形成溶液。<br>
                        设气相中溶质的偏摩尔自由能为<math inline=1>\overline G_2^G</math>，液相中溶质的偏摩尔自由能为<math inline=1>\overline G_2^L</math>，纯液体溶质的摩尔自由能和逸度分别为<math inline=1>G_2^L</math>和<math inline=1>f_2^L</math>。过程A的吉布斯自由能变化为：
                        <math class="ms">\triangle G_A=G_2^L-\overline G_2^G=RT\ln\frac{f_2^L}{\widehat f_2^G}=RT\ln f_2^L</math>
                        过程B的自由能变化为：
                        <math class="ms">\triangle G_B=\overline G_2^L-G_2^L=RT\ln\gamma_2x_2</math>
                        利用相平衡条件，得到：
                        <math class="ms">\triangle G_A+\triangle G_B=0</math>
                        于是：
                        <math class="ms em">-\ln x_2=\ln f_2^L+\ln\gamma_2</math>
                        当应用正规溶液方程表示液相中溶质的活度系数时，即得气体溶解度计算公式为：
                        <math class="ms">-\ln x_2=\ln f_2^L+\frac{V_2^L\left(\delta_1-\delta_2\right)^2}{RT}\phi_1^2</math>
                        其中<math inline=1>x_2</math>是温度T，100kPa气体分压下得溶质溶解度；<math inline=1>f_2^L\; ,\;V_2^L</math>及<math inline=1>\delta_2</math>分别是假想液体得纯溶质逸度、摩尔体积和溶解度参数，<math inline=1>\delta_1</math>是溶剂的溶解度参数；<math inline=1>\phi_1</math>是溶剂的体积分数（因难溶性气体的<math inline=1>x_2\approx 0</math>，故<math inline=1>\phi_1\approx 1</math>）
                        还可应用对比态原理来建立假想液体的逸度和对比温度的函数关系，有经验公式：
                        <math class="ms">f^L/p_c=0.827+6.403\ln T_r\;\;\; ,\;\;\; 1\leq T_r\leq2.5</math>
                        <math class="ms">f^L/p_c=0.935T_r^{6.5}\;\;\; ,\;\;\; T_r{<}1</math><br>
                        2. Yen-Mcketta法<br><br>
                        适用范围：溶质为非极性物质，溶剂为非（氢键）缔合极性物质体系。<br>
                        正规溶液的摩尔超额自由能可用更普遍化的公式表示，对于双元体系：
                        <math class="ms">G^E=\left(x_1V_1+x_2V_2\right)\left(C_{11}+C_{22}-2C_{12}\right)\phi_1\phi_2</math>
                        <math class="ms">\ln\gamma_2=V_2^L\left(C_{11}+C_{22}-2C_{12}\right)\phi_1^2/RT</math>
                        其中 <math inline=1>C_{11}=\delta_1^2\;\;\; ,\;\;\; C_{22}=\delta_2^2</math>
                        对于非（氢键）缔合极性物质，令：
                        <math class="ms">C_{12}=\delta_2\left(\delta_1^2+\triangle{}\right)^2</math>
                        可得：
                        <math class="ms">\ln\gamma_2=V_2^L\left[\delta_1^2+\delta_2^2-2\delta_2\left(\delta_1^2+\triangle{}\right)^\frac12\right]\phi_1^2/RT</math>
                        气体溶解度计算式为：
                        <math class="ms">-\ln x_2=\ln f_2^L+V_2^L\left[\delta_1^2+\delta_2^2-2\delta_2\left(\delta_1^2+\triangle{}\right)^\frac12\right]\phi_1^2/RT</math>
                        假想液体的逸度可以用下列经验关联式进行估算：
                        <math class="ms">\ln\frac{f_2^L}{p_c}=0.4551+1.5077\ln T_r\;\;\; ,\;\;\; 1.5\leq T_r\leq2.5</math>
                        <math class="ms">\ln\frac{f_2^L}{p_c}=-0.1891+2.9866\ln T_r\;\;\; ,\;\;\; 1{<}T_r{<}1.5</math>
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
            s3:false,
            s4:false,
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
        font-size: 18px;
        color:blue;
        border: gray;
        line-height: 27px;
        font-family: sans-serif;
        text-align: justify;
        font-weight: bold;
        cursor: pointer;
    }
</style>

