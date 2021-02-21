<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="3.4.2 活度系数模型" md-description ="" :md-done.sync="first">
                <div>
                    <p>
                        为了相平衡的相关计算，需要得到溶液的化学势，因此需要求取活度系数。<br>
                        在前一部分，得到活度系数方程：
                        <math class="ms">RT\ln  \gamma_i=\overline G^E_i=\left(\frac {\partial nG^E}{\partial n_i}\right)_{T,p,n_{j\neq i}}</math>
                        通过构建溶液的物理模型，可以获得超额吉布斯自由能表达式，再由上述方程得到活度系数的表达式。以下对常用的活度系数模型进行介绍。

                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="3.4.2.1 理论模型" md-description ="SH方程，FH方程" :md-done.sync="second">
                <div>
                    <p>
                        以下介绍<span class="em">二元体系</span>下，由理论模型获得的Scatchard-Hildebrand方程，Flory-Huggins方程。<br>
                    </p>
                    <button class="bu" @click="show('sh')">Scatchard-Hildebrand方程</button>
                    <div v-show="sh">
                        <p>
                            预测性方程，不包含经验参数。方程得到的活度系数恒大于1，所以只能预测正偏差。<br><br>
                            <strong>方程适用范围：</strong>正规溶液<br><br>
                            <strong>方程形式：</strong><br>
                            <math class="ms em">\ln\gamma_1=\frac{V_1\left(\delta_1-\delta_2\right)^2}{RT}\phi_2^2\;\;\;\;\;\;\ln\gamma_2=\frac{V_2\left(\delta_1-\delta_2\right)^2}{RT}\phi_1^2</math>
                            其中，<math inline=1>\phi_i</math>表示组分i的体积分数：
                            <math class="ms">\phi_1\equiv\frac {x_1V_1}{x_1V_1+x_2V_2}\;\;\;\;\;\;\phi_2\equiv\frac {x_2V_2}{x_1V_1+x_2V_2}</math>
                            <math inline=1>\delta_i</math>表示组分i的溶解度参数，可以查表得到。<br><br>
                            <strong>方程推导：</strong><br><br>
                            假想将溶液混合过程拆分为如下路径：<br><br>
                            <img src="../../../public/img/mix/sh1.png" class="piclarge" alt=""><br>
                            <small>（图片来源：高光华 化工热力学[M]. 第3版. 北京: 清华大学出版社, 2017；图7-1）</small><br><br>
                            定义<math inline=1>c</math>为内聚能密度，与完全蒸发能<math inline=1>\triangle U^{evp}_i</math>有如下关系：
                            <math class="ms">c\equiv\frac {\triangle U^{evp}}{V^L}</math>
                            于是对于二元体系有：
                            <math class="ms">U_1=c_{11}V_1\;\;\;\;U_2=c_{22}V_2</math>
                            <math class="ms">U^E=\triangle U^E=U-x_1U_1-x_2U_2=(c_{11}+c_{22}-2c_{12})\phi_1\phi_2(x_1V_1+x_2V_2) </math>
                            假设对于吸引力主要为色散力的分子，其内聚能密度有：
                            <math class="ms">c_{12}=(c_{11}c_{22})^{1/2}</math>
                            定义溶解度参数<math inline=1>\delta_i</math>：
                            <math class="ms">\delta_i=c_{ii}^{1/2}=\left(\frac {\triangle U_i^{evp}}{V_i^L}\right)^{1/2}</math>
                            因为是正规溶液，所以摩尔超额吉布斯自由能等于摩尔超额内能：
                            <math class="ms">G^E=U^E=(x_1V_1+x_2V_2)\phi_1\phi_2(\delta_1-\delta_2)^2 </math>
                            再由方程：
                            <math class="ms">RT\ln\gamma_i=\left(\frac {\partial nG^E}{\partial n_i}\right)_{T,p,n_{j\neq i}}</math>即可得到SH方程。<br>
                            SH方程预测实际溶液与理想溶液偏离的程度，如果两种分子溶解度系数相近则溶液与理想溶液相近，方程预测结果反而可能不准确。<br><br>
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('sh')">close</md-button>
                    </div>
                    <br><br><button class="bu" @click="show('fh')">Flory-Huggins方程</button>
                    <div v-show="fh">
                        <p><br>
                            <strong>适用范围：</strong><br>
                            分子尺寸大小明显不同的液体混合物，特别是由有机溶剂和聚合物为溶质组成的高聚物溶液。<br><br>

                            <strong>方程形式：</strong><br>
                            对于无热溶液，只能预测负偏差：
                            <math class="ms">\ln\gamma_1=\ln\left(\phi_1/x_1\right)+1-\phi_1/x_1\;\;\;\;\;\;\ln\gamma_2=\ln\left(\phi_2/x_2\right)+1-\phi_2/x_2</math>

                            改进后，考虑混合焓不为0的溶液：
                            <math class="ms em">\ln\gamma_1=\ln\frac{\phi_1}{x_1}+\left(1-\frac1m\right)\phi_2+\chi\phi_2^2\;\;\;\;\;\;\ln\gamma_2=\ln\frac{\phi_2}{x_2}-\left(m-1\right)\phi_1+m\chi\phi_1^2</math>
                            <br><br>
                            <strong>方程推导：</strong><br>
                            对高分子溶液做如下假设：<br>
                            1. 高分子链由m个链接组成，每个链接大小与溶剂分子相同；<br>
                            2. 高分子和溶剂分子只能出现在晶格上；<br>
                            3. 所有晶格点被高分子或者溶剂分子占据。<br><br>
                            由假设可以看出，FH方程只考虑了分子的体积，并未考虑表面积等其它性质。<br>
                            根据以上假设可以得到，对于摩尔量为<math inline=1>N_1</math>的有机溶剂和摩尔量为<math inline=1>N_2</math>聚合物组成的二元混合物，组分的体积分数等于所占数密度：
                            <math class="ms">\phi_1=\frac {N_1}{N_1+mN_2}\;\;\;\;\;\;\phi_2=\frac {mN_2}{N_1+mN_2}</math>
                            计算得到摩尔混合熵：
                            <math class="ms">\triangle S_{mix}=-R(x_1\ln\phi_1+x_2\ln\phi_2)</math>
                            超额混合熵：
                            <math class="ms">S^E=\triangle S_{mix}-\triangle S^{id}_{mix}=-R\left[x_1\ln\frac {\phi_1}{x_1}+x_2\ln\frac {\phi_2}{x_2}\right]</math>
                            考虑无热溶液<math inline=1>H^E=0</math>，得到：
                            <math class="ms">G^E=-TS^E=RT\left(x_1\ln\frac {\phi_1}{x_1}+x_2\ln\frac {\phi_2}{x_2}\right)</math>
                            偏导后即得到组分i的活度系数。可见活度系数恒小于1，即只能预测负偏差。<br><br>
                            改进无热FH方程，假设聚合物与溶剂分子间存在相互作用，即存在混合热：
                            <math class="ms">\triangle H_mix=H^E=\chi RT(x_1+mx_2)\phi_1\phi_2</math>
                            其中<math inline=1>\chi</math>为Flory相互作用参数。于是对于超额吉布斯自由能，可以得到方程：
                            <math class="ms">\frac {G^E}{RT}=\frac 1{RT}(H^E-TS^E)=\left(x_1\ln\frac {\phi_1}{x_1}+x_2\ln\frac {\phi_2}{x_2}\right)+ \chi RT(x_1+mx_2)\phi_1\phi_2</math>
                            前面一项为混合熵的贡献，后面一项为混合焓的贡献。偏导后即可得到改进后的FH活度系数方程，可以预测正偏差和负偏差。
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('fh')">close</md-button>
                    </div>
                </div>
                <br><br><md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="3.4.2.2 经验模型" md-description ="Wohl方程，Wilson方程，NRTL方程，UNIQUAC模型" :md-done.sync="third">
                <div>
                    <p>
                        以下介绍含有经验参数的模型。
                    </p>
                    <button class="bu md-raised" @click="show('woh')">Wohl方程</button>
                    <div v-show="woh">
                        <p>
                            <strong>适用范围：</strong>正规溶液<br><br>
                            <strong>方程形式：</strong><br>
                            <math class="ms">\ln\gamma_1=Z_2^2\left[A_{12}+2Z_1\left(A_{21}\frac{q_1}{q_2}-A_{12}\right)\right]</math>
                            <math class="ms">\ln\gamma_2=Z_1^2\left[A_{21}+2Z_2\left(A_{12}\frac{q_2}{q_1}-A_{21}\right)\right]</math><br>

                            <strong>方程推导：</strong><br>
                            对于正规溶液，<math inline=1>S^E=0</math>，因此<math inline=1>G^E=H^E</math>；Wohl提出超额自由焓的表达式：
                            <math class="ms">G^E/(RT\sum_ix_iq_i)=\sum_i\sum_jZ_iZ_ja_{ij}+\sum_i\sum_j\sum_kZ_iZ_jZ_ka_{ijk}+...</math>
                            其中，<math inline=1>q_i</math>是组分i的有效摩尔体积。有效体积分数：
                            <math class="ms">Z_i=x_iq_i/\sum_jx_jq_j=n_iq_i/\sum_jn_jq_j</math>
                            其中<math inline=1>a_{ij},\;a_{ijk}</math>分别是ij两分子和ijk三分子之间的交互作用参数，而<math inline=1>a_{ii},\;a_{iii}</math>均为0；将以上方程应用于二元体系，并只保留到三分子相互作用的贡献，得到：
                            <math class="ms">\frac{G^E}{RT\left(q_1x_1+q_2x_2\right)}=Z_1Z_2a_{12}+Z_2Z_1a_{21}+Z_1Z_1Z_2a_{112}\\
                                +Z_1Z_2Z_1a_{121}+Z_2Z_1Z_1a_{211}+Z_1Z_2Z_2a_{122}+Z_2Z_1Z_2a_{212}+Z_2Z_2Z_1a_{221}
                            </math>
                            因为相互作用与排列次序无关，于是有：
                            <math class="ms">a_{12}=a_{21},\;a_{112}=a_{121}=a_{211},\;a_{221}=a_{212}=a_{122}</math>
                            于是得到简化的方程：
                            <math class="ms">\frac{G^E}{RT}=\left(x_1+\frac{q_2}{q_1}x_2\right)Z_1Z_2\left[Z_1q_1\left(2a_{12}+3a_{112}\right)+Z_2q_1\left(2a_{12}+3a_{122}\right)\right]</math>
                            令<math inline=1>A_{12}=q_1\left(2a_{12}+3a_{122}\right),\;A_{21}=q_2\left(2a_{12}+3a_{112}\right)</math>，得到：
                            <math class="ms">\frac{G^E}{RT}=\left(x_1+\frac{q_2}{q_1}x_2\right)Z_1Z_2\left[Z_1A_{21}\frac{q_1}{q_2}+Z_2A_{12}\right]</math>
                            <math class="ms">\frac{nG^E}{RT}=\frac{n_1^2n_2A_{21}+n_1n_2^2\left({\displaystyle\frac{q_2}{q_1}}\right)^2A_{12}}{\left(n_1+n_2{\displaystyle\frac{q_2}{q_1}}\right)^2}</math>
                            偏导后即得到活度系数公式：
                            <math class="ms">\ln\gamma_1=Z_2^2\left[A_{12}+2Z_1\left(A_{21}\frac{q_1}{q_2}-A_{12}\right)\right]</math>
                            <math class="ms">\ln\gamma_2=Z_1^2\left[A_{21}+2Z_2\left(A_{12}\frac{q_2}{q_1}-A_{21}\right)\right]</math><br>

                            <strong>不同假设下的简化：</strong><br>
                            采用不同的简化假设，从Wohl方程衍生如下方程：<br><br>
                            <span class="bl">1. Scatchard-Hamer方程</span><br>
                            用纯组分的摩尔体积来取代有效摩尔体积<math inline=1>q_1,\;q_2</math>，方程简化为：
                            <math class="ms">\ln\gamma_1=Z_2^2\left[A_{12}+2Z_1\left(A_{21}\frac{V_1}{V_2}-A_{12}\right)\right]</math>
                            <math class="ms">\ln\gamma_2=Z_1^2\left[A_{21}+2Z_2\left(A_{12}\frac{V_2}{V_1}-A_{21}\right)\right]</math>
                            <span class="bl"> 2. van Laar方程</span><br>
                            对于化学上差别不大但分子大小不同的两组分，并且只考虑两分子间的相互作用，可以得到：
                            <math class="ms">\frac {q_2}{q_1}=\frac {A_{21}}{A_{12}}</math>
                            方程简化为：
                            <math class="ms">\ln\gamma_1=\frac{A_{12}}{\left(1+{\displaystyle\frac{A_{12}}{A_{21}}}{\displaystyle\frac{x_1}{x_2}}\right)^2}\;\;\;\;\;\;\ln\gamma_2=\frac{A_{21}}{\left(1+{\displaystyle\frac{A_{21}}{A_{12}}}{\displaystyle\frac{x_2}{x_1}}\right)^2}</math>
                            该方程仅适用于一定的温度或压力下非极性或弱极性流体。<br><br>
                            <span class="bl"> 3. Margules方程</span><br>
                            对于化学上差别不大且组分分子大小差不多的二元溶液，可以令<math inline=1>q_2=q_1</math>，得到方程：
                            <math class="ms">\ln\gamma_1=x_2^2\left[A_{12}+2x_1\left(A_{21}-A_{12}\right)\right]</math>
                            <math class="ms">\ln\gamma_2=x_1^2\left[A_{21}+2x_2\left(A_{12}-A_{21}\right)\right]</math>
                            <span class="bl"> 4. 对称性方程</span><br>
                            令<math inline=1>A_{12}=A_{21}</math>，得到<math inline=1>q_1=q_2</math>，方程简化为：
                            <math class="ms">\ln\gamma_1=A_{12}x_2^2\;\;\;\;\;\;\ln\gamma_2=A_{21}x_1^2</math>
                            该方程显然不适用于实际情况，只能用于估算。
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('woh')">close</md-button>
                    </div>
                    <br><br><button class="bu" @click="show('wil')" id="wil">Wilson方程</button>
                    <div v-show="wil">
                        <p>
                            <strong>适用范围：</strong><br>
                            注意，Wilson方程不适用于部分互溶体系，例如不能用于萃取过程的计算。<br><br>

                            <strong>方程形式：</strong><br>
                            超额吉布斯自由能：
                            <math class="ms">G^E/RT=-x_1\ln\left(x_1+\Lambda_{21}x_2\right)-x_2\ln\left(x_x+\Lambda_{12}x_1\right)</math>
                            活度系数方程：
                            <math class="ms">\ln\gamma_1=-\ln\left(x_1+\Lambda_{21}x_2\right)+x_2\left(\frac{\Lambda_{21}}{x_1+\Lambda_{21}x_2}-\frac{\Lambda_{12}}{x_2+\Lambda_{12}x_1}\right)</math>
                            <math class="ms">\ln\gamma_2=-\ln\left(x_2+\Lambda_{12}x_1\right)+x_1\left(\frac{\Lambda_{12}}{x_2+\Lambda_{12}x_1}-\frac{\Lambda_{21}}{x_1+\Lambda_{21}x_2}\right)</math>
                            其中：
                            <math class="ms">\Lambda_{21}=\frac{V_2}{V_1}exp\left(-\frac{\lambda_{21}-\lambda_{11}}{RT}\right)</math>
                            <math class="ms">\Lambda_{12}=\frac{V_1}{V_2}exp\left(-\frac{\lambda_{12}-\lambda_{22}}{RT}\right)</math><br>

                            <strong>方程推导：</strong><br>
                            提出“局部浓度”的概念。因为分子间作用力的不同，溶液中局部区域内分子浓度可能和总体浓度不同，所以用分子的“局部组成”取代体积分数。<br>
                            考虑一个二元体系，令溶液内中心分子1周围出现的1类分子的几率为<math inline=1>x_{11}</math>，周围出现的2类分子的几率为<math inline=1>x_{21}</math>，称为局部摩尔分数。可以得到：
                            <math class="ms">\frac{x_{21}}{x_{11}}=\frac{x_2exp\left(-\lambda_{21}/RT\right)}{x_1exp\left(-\lambda_{11}/RT\right)}</math>
                            其中<math inline=1>\lambda_{11}</math>是1和1分子接触时分子间相互作用能值，<math inline=1>\lambda_{21}</math>是1和2分子接触时分子间相互作用能值，<math inline=1>\lambda_{21}=\lambda_{12}</math>；结合<math inline=1>x_{11}+x_{21}=1</math>解方程得到：
                            <math class="ms">\xi_1=\frac{x_{11}V_1}{x_{11}V_1+x_{21}V_2}=\frac1{1+{\displaystyle\frac{V_2}{V_1}}{\displaystyle\frac{x_{21}}{x_{11}}}}=\frac1{1+{\displaystyle\frac{V_2}{V_1}}{\displaystyle\frac{x_2}{x_1}}{\displaystyle\frac{exp\left(-\lambda_{21}/RT\right)}{exp\left(-\lambda_{11}/RT\right)}}}</math>
                            <math class="ms">\xi_2=\frac{x_{22}V_2}{x_{12}V_1+x_{22}V_2}=\frac1{1+{\displaystyle\frac{V_1}{V_2}}{\displaystyle\frac{x_{12}}{x_{22}}}}=\frac1{1+{\displaystyle\frac{V_1}{V_2}}{\displaystyle\frac{x_1}{x_2}}{\displaystyle\frac{exp\left(-\lambda_{21}/RT\right)}{exp\left(-\lambda_{22}/RT\right)}}}</math>
                            使用局部体积分数<math inline=1>\xi_1,\xi_2</math>代替FH方程(无热)中的体积分数<math inline=1>\phi_1,\phi_2</math>，FH方程变化为：
                            <math class="ms">G^E/RT=x_1\ln\left(\xi_1/x_1\right)+x_2\ln\left(\xi_2/x_2\right)</math><br>
                            <strong>方程改进：</strong><br>
                            原本的Wilson方程不适用于部分互溶体系，因此进行修正。此处介绍一种修正，T-K-Wilson方程。<br>
                            <math class="ms">\frac{G^E}{RT}=x_1\ln\frac{x_1+V_{12}x_2}{x_1+\Lambda_{12}x_2}+x_2\ln\frac{x_2+V_{21}x_1}{x_2+\Lambda_{21}x_1}</math>
                            其中<math inline=1>V_{ij}=V_j/V_i</math>是摩尔体积之比。二元体系活度系数方程为：
                            <math class="ms">\ln\gamma_1=\ln\frac{x_1+V_{12}x_2}{x_1+\Lambda_{12}x_2}+\left(\beta-\beta_V\right)x_2</math>
                            <math class="ms">\ln\gamma_2=\ln\frac{x_2+V_{21}x_1}{x_2+\Lambda_{21}x_1}-\left(\beta-\beta_V\right)x_1</math>
                            其中：
                            <math class="ms">\beta_V=\frac{V_{12}}{x_1+V_{12}x_2}-\frac{V_{21}}{x_2+V_{21}x_1}</math>
                            <math class="ms">\beta=\frac{\Lambda_{12}}{x_1+\Lambda_{12}x_2}-\frac{\Lambda_{21}}{x_2+\Lambda_{21}x_1}</math>
                            T-K-Wilson方程不仅能满足汽液平衡的计算，而且也适用于液液平衡的分析。
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('wil')">close</md-button>
                    </div>
                    <br><br><button class="bu" @click="show('nrtl')">NRTL方程</button>
                    <div v-show="nrtl">
                        <p>
                            <strong>方程形式：</strong><br>
                            <math class="ms">\frac{G^E}{RT}=x_1x_2\left(\frac{\tau_{21}G_{21}}{x_1+x_2G_{21}}+\frac{\tau_{12}G_{12}}{x_2+x_1G_{12}}\right)</math>
                            <math class="ms">\ln\gamma_1=x_2^2\left[\frac{\tau_{21}G_{21}^2}{\left(x_1+x_2G_{21}\right)^2}+\frac{\tau_{12}G_{12}^2}{\left(x_2+x_1G_{12}\right)^2}\right]</math>
                            <math class="ms">\ln\gamma_2=x_1^2\left[\frac{\tau_{12}G_{12}^2}{\left(x_2+x_1G_{12}\right)^2}+\frac{\tau_{21}G_{21}^2}{\left(x_1+x_2G_{21}\right)^2}\right]</math><br>
                            <strong>方程特点：</strong><br>
                            1.与Wilson方程大致相同的拟合和预测精度；<br>
                            2.仅有二元体系数据拟合的参数可预测多元系得活度系数；<br>
                            3.克服了Wilson方程得局限性，可扩展应用于部分互溶体系。<br><br>
                            <strong>方程推导：</strong><br>
                            将局部摩尔分数表达式修改为：
                            <math class="ms">\frac{x_{21}}{x_{11}}=\frac{x_2exp\left(-\alpha_{12}g_{21}/RT\right)}{x_1exp\left(-\alpha_{12}g_{11}/RT\right)}\;\;\;\;\;\;\frac{x_{12}}{x_{22}}=\frac{x_1exp\left(-\alpha_{12}g_{12}/RT\right)}{x_2exp\left(-\alpha_{12}g_{22}/RT\right)}</math>
                            其中<math inline=1>g_{12}\left(=g_{21}\right),g_{11},g_{22}</math>分别表示分子对1-2，1-1和2-2之间的相互作用能。新引入的<math inline=1>\alpha_{12}\left(=\alpha_{21}\right)</math>表示组分1和组分2混合的有序特性参数。<br>
                            Scott双流体理论：假设在二元混合物中有两种微元，一种以分子1为中心，另一种以分子2为中心，整个混合物等价于这两种微元所组合成的虚拟混合物。对微元(1)和(2)，其能量分别为：
                            <math class="ms">g^{\left(1\right)}=x_{11}g_{11}+x_{21}g_{21}\;\;\;\;\;\;g^{\left(2\right)}=x_{22}g_{22}+x_{12}g_{12}</math>
                            整个溶液的能量（按1mol计）为：
                            <math class="ms">U=x_1g^{\left(1\right)}+x_2g^{\left(2\right)}=x_1\left(x_{11}g_{11}+x_{21}g_{21}\right)+x_2\left(x_{22}g_{22}+x_{12}g_{12}\right)</math>
                            对于纯组分，只有一种微元：
                            <math class="ms">g_纯^{\left(1\right)}=g_{11},g_纯^{\left(2\right)}=g_{22}</math>
                            假设虚拟的混合物为严格的正规溶液：
                            <math class="ms">G^E=U-x_1U_1-x_2U_2=x_1\left(x_{11}g_{11}+x_{21}g_{21}-g_{11}\right)+x_2\left(x_{22}g_{22}+x_{12}g_{12}-g_{22}\right)=x_1x_{21}\left(g_{21}-g_{11}\right)+x_2x_{12}\left(g_{12}-g_{22}\right)</math>
                            <math class="ms">x_{21}=\frac{x_2exp\left[-\alpha_{12}\left(g_{21}-g_{11}\right)/RT\right]}{x_1+x_2exp\left[-\alpha_{12}\left(g_{21}-g_{11}\right)/RT\right]}</math>
                            <math class="ms">x_{12}=\frac{x_1exp\left[-\alpha_{12}\left(g_{12}-g_{22}\right)/RT\right]}{x_2+x_1exp\left[-\alpha_{12}\left(g_{12}-g_{22}\right)/RT\right]}</math>
                            设：
                            <math class="ms">\tau_{21}=\left(g_{21}-g_{11}\right)/RT\;\;\;\;\;\;\tau_{12}=\left(g_{12}-g_{22}\right)/RT</math>
                            <math class="ms">G_{12}=exp\left[-\alpha_{12}\tau_{12}\right]\;\;\;\;\;\;G_{21}=exp\left[-\alpha_{12}\tau_{21}\right]</math>
                            可得：
                            <math class="ms">\frac{G^E}{RT}=x_1x_2\left(\frac{\tau_{21}G_{21}}{x_1+x_2G_{21}}+\frac{\tau_{12}G_{12}}{x_2+x_1G_{12}}\right)</math>
                            <math inline=1>\alpha_{12}</math>的选定：一般认为<math inline=1>\alpha_{12}</math>与温度及溶液组成无关，只取决于溶液的类型，是溶液的特征函数。根据似化学理论，将<math inline=1>\alpha_{12}</math>值定在0.2~0.47，并把溶液分为7类，每类溶液有对应取值。
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('nrtl')">close</md-button>
                    </div>
                    <br><br><button class="bu" @click="show('unic')">UNIQUAC模型</button>
                    <div v-show="unic">
                        <p>
                            <strong>方程形式：</strong><br>
                            1. 与组分活度系数密切相关的超额吉布斯自由能分为两个组成部分，组合部分和剩余部分：
                            <math class="ms">G^E=G^E_{\mathrm{组合}}+G^E_{\mathrm{剩余}}</math>
                            2. 将Guggenheim的似晶体理论与Flory-Huggins的无热溶液理论结合，用以计算组合部分的超额吉布斯自由能。引入体积参数<math inline=1>r_i</math>和面积参数<math inline=1>q_i</math>。对于二元体积混合物，可求得各组分的平均体积分数<math inline=1>\phi_1,\phi_2</math>和平均面积分数<math inline=1>\Theta_1,\Theta_2</math>：
                            <math class="ms">\phi_1=\frac{x_1r_1}{x_1r_1+x_2r_2}\;\;\;\;\;\;\phi_2=\frac{x_2r_2}{x_1r_1+x_2r_2}</math>
                            <math class="ms">\Theta_1=\frac{x_1q_1}{x_1q_1+x_2q_2}\;\;\;\;\;\;\Theta_2=\frac{x_2q_2}{x_1q_1+x_2q_2}</math>
                            3. 对于剩余部分的超额吉布斯自由能，UNIQUAC模型推广应用了Wilson提出的局部组成概念，对二元体系混合物可得出代表晶格微观结构的4个参数，称为局部面积分数<math inline=1>\Theta_{11}，\Theta_{12}，\Theta_{21}，\Theta_{22}</math>，符合关系：
                            <math class="ms">\Theta_{11}+\Theta_{21}=1，\Theta_{12}+\Theta_{22}=1</math>
                            <math class="ms">\Theta_{21}=\frac{\Theta_2exp\left(-{\displaystyle\frac{U_{21}-U_{11}}{RT}}\right)}{\Theta_1+\Theta_2exp\left(-\frac{U_{21}-U_{11}}{RT}\right)}</math>
                            <math class="ms">\Theta_{12}=\frac{\Theta_1exp\left(-{\displaystyle\frac{U_{12}-U_{22}}{RT}}\right)}{\Theta_2+\Theta_1exp\left(-\frac{U_{12}-U_{22}}{RT}\right)}</math>
                            式中<math inline=1>U_{12},\;U_{21}</math>分别是分子1和分子2之间的相互作用能，符合<math inline=1>U_{12}= U_{21}</math>
                            得到：
                            <math class="ms">\frac{G^E_{\mathrm{组合}}}{RT}=x_1\ln\frac{\phi_1}{x_1}+x_2\ln\frac{\phi_2}{x_2}+\frac z2\left(q_1x_1\ln\frac{\Theta_1}{\phi_1}+q_2x_2\ln\frac{\Theta_2}{\phi_2}\right)</math>
                            式中Z是晶格配位数，一般取Z=10。
                            <math class="ms">\frac{G^E_{\mathrm{剩余}}}{RT}=-x_1q_1\ln\left(\Theta_1+\Theta_2\tau_{21}\right)-x_2q_2\ln\left(\Theta_2+\Theta_1\tau_{12}\right)</math>
                            <math class="ms">\tau_{21}=exp\left(-\frac{U_{21}-U_{11}}{RT}\right)\;\;\;\;\;\;\tau_{12}=exp\left(-\frac{U_{12}-U_{22}}{RT}\right)</math>
                            组合部分的活度系数方程为：
                            <math class="ms em">\ln\gamma_1^c=\ln\frac{\phi_1}{x_1}+\frac z2q_1\ln\frac{\Theta_1}{\phi_1}+\phi_2\left(l_1-\frac{r_1}{r_2}l_2\right)=\ln\frac{\phi_1}{x_1}+\frac z2q_1\ln\frac{\Theta_1}{\phi_1}+l_1-\frac{\phi_1}{x_1}\left(x_1l_1+x_2l_2\right)</math>
                            <math class="ms">\ln\gamma_2^c=\ln\frac{\phi_2}{x_2}+\frac z2q_2\ln\frac{\Theta_2}{\phi_2}+l_2-\frac{\phi_2}{x_2}\left(x_1l_1+x_2l_2\right)</math>
                            剩余部分的活度系数方程为：
                            <math class="ms em">\ln\gamma_1^R=-q_1\ln\left(\Theta_1+\Theta_2\tau_{21}\right)+\Theta_2q_1\left(\frac{\tau_{21}}{\Theta_1+\Theta_2\tau_{21}}-\frac{\tau_{12}}{\Theta_2+\Theta_1\tau_{12}}\right)</math>
                            <math class="ms">\ln\gamma_2^R=-q_2\ln\left(\Theta_2+\Theta_1\tau_{12}\right)+\Theta_1q_2\left(\frac{\tau_{12}}{\Theta_2+\Theta_1\tau_{12}}-\frac{\tau_{21}}{\Theta_1+\Theta_2\tau_{21}}\right)</math>
                            总的活度系数：
                            <math class="ms em">\ln\gamma_1=\ln\gamma_1^c+\ln\gamma_1^R\;\;\;\;\;\;\ln\gamma_2=\ln\gamma_2^c+\ln\gamma_2^R</math><br>
                            <strong>模型特点：</strong><br>
                            UNIQUAC模型考虑了体积大小的影响，对于体积差别较大且含有极性物质的体系，可以获得更好的的计算精度，如对于甲基叔丁基醚和甲醇、乙醇的气液平衡的计算，计算精度较Wilson、NRTL可提高15%~25%。
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('unic')">close</md-button>
                    </div>
                </div>
                <br><br><md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="3.4.2.3 基团贡献模型" md-description ="ASOG法，UNIFAC模型" :md-done.sync="fourth">
                <div>
                    <button class="bu" @click="show('asog')">ASOG法（基团解析法）</button>
                    <div v-show="asog">
                        <p>
                            <strong>特点：</strong>以基团的配偶参数为基础来计算活度系数。<br><br>
                            <strong>方程形式：</strong><br>
                            溶液中某一组分i的活度系数：
                            <math class="ms">lg\gamma_i=lg\gamma_i^{FH}+lg\gamma_i^G</math>
                            其中<math inline=1>lg\gamma_i^{FH}</math>是由分子大小所引起的，可由Flory-Huggins方程计算：
                            <math class="ms">lg\gamma_i^{FH}=lg\frac{\nu_i^{FH}}{\displaystyle\sum_jx_j\nu_j^{FH}}+0.4343\left(1-\frac{\nu_i^{FH}}{\displaystyle\sum_jx_j\nu_j^{FH}}\right)</math>
                            其中<math inline=1>\frac{\nu_i^{FH}}{\displaystyle\sum_jx_j\nu_j^{FH}}</math>相当于FH方程中的分子体积分数<math inline=1>\phi_i</math>；
                            <math inline=1>\nu_i^{FH}</math>是组分i中除氢外的原子数目；
                            <math inline=1>\sum_jx_j\nu_j^{FH}</math>可由溶液中的分子分数及各组分除氢外的原子数目来确定。
                            <math inline=1>lg\gamma_i^G</math>是由分子间相互作用力引起的：
                            <math class="ms">lg\gamma_i^G=\sum_k\nu_k^{\left(i\right)}\left(lg\Gamma_k-lg\Gamma_k^i\right)</math>
                            
                            式中<math inline=1>\nu_k^{\left(i\right)}</math>是分子i中基团k的数目，<math inline=1>\Gamma_k</math>是基团k的集团活度系数，<math inline=1>\Gamma_k^i</math>是基团k在标准态下（常取纯组分i）的基团活度系数。
                            <math class="ms">lg\Gamma_k=-lg\left(\sum_lX_lA_{kl}\right)+0.4343\left(1-\sum_l\frac{X_lA_{lk}}{\displaystyle\sum_m X_mA_{lm}}\right)</math>
                            其中<math inline=1>A_{kl},\;A_{lk}</math>分别是基团k和l的Wilson配偶参数：
                            <math class="ms">A_{kl}\neq A_{lk},A_{kk}=A_{ll}=1</math>
                            <math inline=1>X_k</math>是基团k的摩尔分数：
                            <math class="ms">X_k=\frac{\displaystyle\sum_ix_i\nu_{ki}}{\displaystyle\sum_ix_i\displaystyle\sum_k\nu_{ki}}</math>
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('asog')">close</md-button>
                    </div>
                    <br><br><button class="bu" @click="show('unif')">UNIFAC模型</button>
                    <div v-show="unif">
                        <p>
                            <strong>特点：</strong>吸收了ASOG模型和UNIQUAC模型各自的优点，并将两者很好的结合起来。<br><br>
                            <strong>方程形式：</strong><br>
                            1. 组分i的活度系数：
                            <math class="ms">\ln\gamma_i=\ln\gamma_i^c+\ln\gamma_i^R</math>
                            <math inline=1>\gamma_i^c</math>对于UNIFAC模型取决于溶液中各种基团的形状和大小。基团体积参数<math inline=1>R_k</math>，基团面积参数<math inline=1>Q_k</math>具有加和性。令纯组分i的体积参数和面积参数分别为<math inline=1>r_i,\;q_i</math>。由加和性得到：
                            <math class="ms">r_i=\sum_k\nu_k^{\left(i\right)}R_k</math>
                            <math class="ms">q_i=\sum_k\nu_k^{\left(i\right)}Q_k</math>其中<math inline=1>\nu_k^{\left(i\right)}</math>为分子i中基团k的数目。<br>
                            2.剩余部分活度系数：
                            <math class="ms">\ln\gamma_i^R=\sum_i\nu_k^{\left(i\right)}\left[\ln\Gamma_k-\ln\Gamma_k^{\left(i\right)}\right]</math>
                            <math class="ms">\ln\Gamma_k=Q_k\left[1-\ln\left(\sum_m\Theta_m\psi_{mk}\right)-\sum_m\frac{\Theta_m\psi_{km}}{\displaystyle \sum_n \Theta_n \psi_{nm}}\right]</math>
                            其中<math inline=1>\Theta_m</math>为基团m的面积分数：
                            <math class="ms">\Theta_m=\frac{Q_mX_m}{\displaystyle\sum_nQ_nX_n}</math>
                            <math inline=1>Q_m</math>是基团m的面积参数，<math inline=1>X_m</math>是基团m的摩尔分数：
                            <math class="ms">X_m=\frac{\displaystyle \sum_ix_i\nu_{mi}}{\displaystyle \sum_ix_i \displaystyle\sum_m\nu_{mi}}</math>
                            <math inline=1>\psi_{mn}</math>和<math inline=1>\psi_{nm}</math>是n与m基团相互作用参数：
                            <math class="ms">\psi_{mn}=exp\left(-\frac{U_{mn}-U_{nn}}{RT}\right)=exp\left(-\frac{a_{mn}}T\right)</math>
                            <math class="ms">\psi_{nm}=exp\left(-\frac{U_{nm}-U_{mm}}{RT}\right)=exp\left(-\frac{a_{nm}}T\right)</math>
                            <math inline=1>U_{nm}</math>和<math inline=1>U_{mn}}</math>表征配偶基团m与n之间的相互作用，称为基团配偶参数；<math inline=1>a_{nm}}</math>和<math inline=1>a_{mn}}</math>是基团配偶能量参数，是由汽液平衡数据确定的。
                        </p>
                        <md-button class="md-primary" :md-ripple="false" @click="hide('unif')">close</md-button>
                    </div>
                </div>
                <br><br><md-button class="md-raised md-primary" @click="setDone('fourth','fourth')">OK</md-button>
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
            sh:false,
            fh:false,
            woh:false,
            wil:false,
            unic:false,
            nrtl:false,
            asog:false,
            unif:false,
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
    small{
        font-size: 10px;
        color: grey;
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
    .bl{
        color:rgb(0, 0, 184);
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

