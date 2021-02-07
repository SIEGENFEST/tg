<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical>
            <md-step id="first" md-label="1.2.2 热力学第二定律" md-description ="" :md-done.sync="first">
                <div>
                    由第二基本假设，孤立系统必然存在且唯一存在一个热力学稳定状态，那么这个状态由什么决定？由第三基本假设，并非所有封闭系统状态变化的过程都是绝热功相互作用过程，那么绝热功相互作用过程和非绝热功相互作用过程有什么差别？第一定律虽然揭示了能量守恒，却没有揭示过程的方向性。<br>
                    卡诺由工程中热机的相关现象提出了卡诺定理，指出<span class="em">热机的最大热效率只和其高温热源和低温热源的温度有关</span>。开尔文等人则由卡诺定理发展出热力学第二定律。因此热力学第二定律建立在实验的基础上。<br>
                    热力学第二定律是关于热和功转化极限的定律，又称为熵增定律。该定律揭示了过程的方向性，指出了热和功的差别，引出了熵的概念。可以运用该定律计算一定条件下系统通过热力学过程向外界做的最大功。
                    
                </div>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="热力学第二定律的描述" md-description ="以及可逆过程" :md-done.sync="second">
                <div>
                    <h3>克劳修斯描述</h3>
                    <p>
                        热量从低温物体向高温物体传递，而不对环境和系统产生其他任何影响的过程是不可能发生的。
                    </p>
                    <h3>开尔文描述</h3>
                    <p>
                        不可能从单一热源取热，使之完全转化成功而不发生其他变化。即第二类永动机是不可能的。<br><br>
                        例如：理想气体与单一热源接触发生等温膨胀，吸收的热量完全转化成功；但是系统体积发生了变化，所以并不违反热二定律。
                    </p>
                    <h3>热机循环描述</h3>
                    <p>
                        热机从高温热源获取热量，在低温热源释放热量，同时可以对外做功。
                    </p>
                    <h3>熵的描述</h3>
                    <p>
                        封闭系统中发生的绝热过程，系统的熵变大于等于0。当熵变等于0时，是一个可逆过程，当熵变大于0时，是不可逆过程。现实中自发过程都是不可逆过程。<br>
                        孤立系统条件下，平衡态熵最大。<br>
                        <strong class="em">可逆过程：</strong><br>
                        如果对于一个过程，存在至少一个另外的过程，使得系统和环境除了二阶导数以外都完全复原为原来的状态，则这个过程为可逆过程。<br>
                        可逆过程中，系统在任何时刻都处于平衡态；任何包含非平衡状态的过程都是不可逆的。简单系统可逆过程中，系统内部没有梯度。因此任何现实发生的过程都是不可逆过程。
                    </p>
                    <h3>勒夏特列描述</h3>
                    <p>
                        在任何给定环境下，任何系统都存在一个最稳定状态，即平衡态。如果环境不变，任何离开平衡态的过程都是非自发过程。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="热力循环与热机" md-description ="" :md-done.sync="third">
                <div>
                    
                    <h3>热力循环</h3>
                    <p>
                        热机中，变热为功的过程总是伴随着工质的膨胀（膨胀过程才能对外做功）；但是要用有限的工质使热机连续产生大量的功，就需要使膨胀后的工质经由其他热力学过程恢复到初态，然后再次膨胀。工质经历一系列状态变化后恢复初态，热力学上称为完成了一个“热力循环”。<br>
                        根据效果，循环分为正向和逆向。正向循环使热能转变为机械能，每次循环产生机械功如图a中阴影面积所示；所有热机都是正向循环。逆向循环通过消耗机械能使热量从低温向高温流动，这部分机械能转化为热能送往高温处；每次循环消耗机械功如图b阴影面积所示；制冷机、热泵等工作原理即为逆向循环。<br>
                        <img src="../../../public/img/basic/seclaw1.png" alt="" class="piclarge">
                    </p>
                    <h3>热机</h3>
                    <p>
                        热机是与一个或多个系统发生热交换，同时与功源发生功相互作用的封闭装置。它是封闭系统，本身并不积累能量。<br>
                        （功源：可以准静态可绝热操作的用于储存能量的装置，如重物在重力场中的不同位置的存在就可以作为功源。）<br><br>
                        <strong>热机热效率</strong><br>
                        热机的热效率η等于热力循环中，热机对外做的净功与从外界吸收热量之比。假设一次循环中吸热Q1，放热Q2，则<math inline=1>\eta =1-\frac{Q2}{Q1}</math>。<br>
                        可逆热机是循环中所有过程都可逆的热机。在确定的高温、低温热源条件下，可逆热机效率最大且为定值。其效率理论推导过程如下：<br>
                        假设以下所有热机都可逆。<br>
                        <img src="../../../public/img/basic/seclaw2.png" alt="" class="pic"><br>
                        如图所示，高温热源A与低温热源B之间有可逆热机<math inline=1>E_1</math>，可以得到其热效率：
                        <math>\eta_{E1}=\frac{W_{E1}}{Q_{A,E1}}=1-\frac{Q_{B,E1}}{Q_{A,E1}}</math>
                        在AB之间再加入一个中温热源C，如下图所示：<br>
                        <img src="../../../public/img/basic/seclaw3.png" alt="" class="pic"><br>
                        其中<math inline=1>E_2</math>传递给C的热量完全传递给<math inline=1>E_3</math>。系统(<math inline=1>E_2+E_3+</math>热源C)不积累能量，符合可逆热机的定义，将其视为可逆热机E'；可以得到以下方程：
                        <math>\eta_{E2}=1-\frac{Q_{C,E2}}{Q_{A,E2}},\;\eta_{E3}=1-\frac{Q_{B,E3}}{Q_{C,E3}},\;Q_{C,E2}=-Q_{C,E3}</math>
                        E'与<math inline=1>E_1</math>都为可逆热机且高低温热源都相同，根据卡诺定理，二者的效率应该相同。于是得到下式：
                        <math>\eta_{E1}-1=(1-\eta_{E2})(\eta_{E1}-1)</math>
                        因为热源C的温度<math inline=1>\theta_C</math>是任意选择的，所以上式与其无关，变化为：
                        <math>\eta_{E1}-1=\frac{f(\theta_A)}{f(\theta_B)}</math>
                        考虑形式为1/T的f(θ)（为什么选择这种形式参考课本），代入上式得到：
                        <math class="em">\eta_{E1}=1-\frac{T_A}{T_C}</math>


                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="克劳修斯定理" md-description ="" :md-done.sync="fourth">
                <div>
                    <p>
                        由热力循环可以推导克劳修斯定理，从而得到克劳修斯不等式，引出熵的概念。
                    </p>
                    
                    <h3>克劳修斯定理描述</h3>
                    <p>
                        任意的可逆过程总能被由绝热-等温-绝热过程组成的可逆过程替代，新的可逆过程吸收或放出的热量与原实际过程中吸收或放出的热量相等。
                    </p>
                    <h3>推导</h3>
                    <p>
                        假设一个为简单系统的可逆热机。由可逆条件可知，该系统内压等于边界上的压力，温度等于环境温度。如图所示，系统通过任意可逆路径，从初态i变化到末态f。<br>
                        <img src="../../../public/img/basic/seclaw4.png" alt="" class="pic"><br>
                        分别过i和f做绝热线。i和f之间必然存在一条等温线gh，使围成的如图所示的两部分面积相等：<br>
                        <img src="../../../public/img/basic/seclaw5.png" alt="" class="piclarge"><br>
                        因为两部分面积相等，所以两路径做功相等；初态末态与路径无关，所以两路径系统内能变化相等。所以过程中吸收或放出的热量相等。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('fourth','fifth')">OK</md-button>
            </md-step>
            <md-step id="fifth" md-label="克劳修斯不等式和熵" md-description ="" :md-done.sync="fifth">
                <div>
                    
                    <p>
                        这部分内容将由克劳修斯定理引出熵的概念和相关性质。<br><br>
                        如图所示，封闭曲线上每一个点都表示一个热力学状态。任意选择两个状态点i和f，做绝热线并交封闭曲线于c和d。<br>
                        <img src="../../../public/img/basic/seclaw6.png" alt="" width="350px"><br>
                        由克劳修斯定理，可以做出等温线gh和ab，使if过程和cd过程吸收或放出的热量分别与gh过程和ab过程吸收或放出的热量相等：<br>
                        <img src="../../../public/img/basic/seclaw7.png" alt="" class="piclarge"><br>
                        将gh过程和ab过程分别视为与高温热源<math inline=1>T_h</math>、低温热源<math inline=1>T_c</math>进行热交换的过程，构建一个循环为ghba的可逆热机。对于可逆热机，可以得到以下方程：
                        <math>\frac{Q_{gh}}{Q_{ab}}=-\frac{T_{gh}}{T_{ab}}</math>
                        变化得到
                        <math>\frac{Q_{gh}}{T_{gh}}+\frac{Q_{ab}}{T_{ab}}=0</math>
                        i和f之间可以划分出无数个状态点。令每个状态点无限接近，每相邻两点构建一个卡诺循环；这些卡诺循环的总效应就相当于i和f之间的卡诺循环ghba。<br>
                        令其中两个状态点为i'f'，构建的卡诺循环为g'h'b'a'；因为i'和f'无限接近，所以可以认为g'h'段温度等于i'的温度等于f'的温度；c'd'段同理。得到：
                        <math>\frac{\delta Q_{i'f'}}{T_{i'f'}}+\frac{\delta Q_{c'd'}}{T_{c'd'}}=0</math>
                        在整条封闭曲线上如上划分区域并加和，得到：
                        <math>\oint{\left(\frac{\delta Q}T\right)}_{rev}=0</math>
                        下标rev表示此处换热量为可逆过程换热量。<br>
                    </p>
                    <h3>熵</h3>
                    <p>
                        可以发现，从曲线上一点变化到另一点的正向与反向路径中，<math inline=1>\int{\left(\frac{\delta Q}T\right)}_{rev}</math>的值相等，即与路径无关。注意，此处换热量是两个状态之间<span class="em">可逆过程</span>的换热量。<br><br>
                        由此，引入<span class="em">状态函数，熵S</span>；两个状态间的熵变为：
                        <math>△\underline S \equiv \int{\left(\frac{\delta Q}T\right)}_{rev}</math>
                        <math class="em">d\underline S \equiv {\left(\frac{\delta Q}T\right)}_{rev}</math><br>
                        经典热力学中，熵的绝对值意义不大，但两个状态间的熵变则有重要意义。一个系统在状态变化过程中的熵变有以下性质：<br><br>
                        1. 此处熵变描述的是两个平衡态之间熵的差值，涉及非平衡态的熵变不能用<math inline=1>△\underline S \equiv \int{\left(\frac{\delta Q}T\right)}_{rev}</math>计算；此处不介绍非平衡态相关计算。<br>
                        2. 对熵的计算在复合系统中可以加和:
                        <math>d\underline S=\sum_i d\underline S_i=\sum_i \frac{\delta Q_i}{T_i}</math>
                        3. 熵的定义不需要任何热力学假设；<br>
                        4. 从物理意义上，熵反映了一个实际过程与可逆过程的接近程度。<br>
                        令环境和系统组成孤立系统，其总熵变为<math inline=1>△S_t</math>，可以得到：<br>
                        <math inline=1>△S_t>0</math>，不可逆过程；所有现实下自然发生的过程都是不可逆过程；<br><math inline=1>△S_t=0</math>，完全可逆过程，只存在于理想状态；<br>
                        <math inline=1>△S_t</math>小于0的过程在孤立系统中不存在（证明见下方）。<br>
                        由此可以得到<span class="em">克劳修斯不等式：</span>
                        <math class="em">\oint \frac{\delta Q}T\geq 0</math>
                        其中等号只有在可逆过程中才能取得。<br>
                        4. 熵不一定为定值。<br>
                    </p>
                    <div>
                        <p>
                            <strong class="lar">证明封闭系统绝热过程的熵变必定大于等于0：</strong><br>
                            如图所示，虚线为封闭系统从状态A变化到状态D的任意绝热过程；实线为构建的从状态D变化到状态A的可逆过程。<br>
                            <img src="../../../public/img/basic/seclaw8.png" alt="" class="pic"><br>
                            根据克劳修斯定理，对于可逆过程，可以得到下式：
                            <math>\underline U_A-\underline U_D=Q^{rev}_{D\rightarrow A}+W^{rev}_{D\rightarrow A}=T(S_A-S_D)+W^{rev}_{D\rightarrow A}</math>
                            T为等效的绝热-等温-绝热路径中等温过程的温度。
                            对于虚线过程，绝热，所以换热量为0：
                            <math>\underline U_A-\underline U_D=Q^{irr}_{D\rightarrow A}+W^{irr}_{D\rightarrow A}=W^{irr}_{D\rightarrow A}</math>
                            两式联立得到：
                            <math>T(S_A-S_D)+W^{rev}_{D\rightarrow A}-W^{irr}_{D\rightarrow A}=0</math>
                            如果<math inline=1>W^{rev}_{D\rightarrow A}</math>小于<math inline=1>W^{irr}_{D\rightarrow A}</math>，则<math inline=1>T(S_A-S_D)</math>大于0；相当于A到D到A的一个循环中，系统从单一热源吸热并完全转化为功，而这是不可能发生的。所以<math inline=1>W^{rev}_{D\rightarrow A}</math>只可能大于等于<math inline=1>W^{irr}_{D\rightarrow A}</math>，即，可逆功是系统可能对外做的最大功，而封闭系统绝热过程熵变只会大于等于0。同时，封闭系统绝热过程可以视为孤立系统，所以孤立系统的熵也不会减小。
                        </p>
                    </div>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('fifth','sixth')">OK</md-button>
            </md-step>
            <md-step id="sixth" md-label="熵的相关计算" md-description ="" :md-done.sync="sixth">
                <div>
                    <p>
                        <strong class="lar">对于简单封闭系统的可逆过程：</strong><br>
                        假设仅存在体积功，得到热力学第一定律方程：
                        <math>d\underline U=\delta Q+\delta W=Td\underline S+pdV</math>
                        <math>d\underline S=\frac{d\underline U}T+\frac{pd\underline V}T</math><br>
                        <strong class="lar">对于简单单相开放系统的可逆过程：</strong><br>
                        可逆过程中不能存在梯度，因此对于进入系统的<math inline=1>\delta n_{in}</math>和离开系统的<math inline=1>\delta n_{out}</math>，其强度量都相等，即：
                        <math>T_{in}=T_{out}=T,\;p_{in}p_{out}=p,\;V_{in}=V_{out}=V</math>
                        <math>U_{in}=U_{out}=U,\;S_{in}=S_{out}=S</math>
                        质量守恒：
                        <math>dN=\delta n_{in}-delta n_{out}</math>
                        假设仅存在体积功，得到热力学第一定律方程：
                        <math>d\underline U=(\delta Q)_{rev}-pd\underline V+(U+pV)dN</math>
                        系统熵变：
                        <math>d\underline S=\frac{(\delta Q)_rev}T+SdN</math>
                        代入第一定律方程并整理得到：
                        <math>d\underline U=Td\underline S-pd\underline V+(U+pV-TS)dN</math>
                        定义<span class="em">摩尔吉布斯自由能（即化学势）</span>：
                        <math>\mu =U+pV-TS=H-TS</math>
                        于是得到单组分简单单相开放系统可逆过程的第一定律方程：
                        <math>d\underline U=Td\underline S-pd\underline V+\mu dN</math>
                        多组分为：
                        <math>d\underline U=Td\underline S-pd\underline V+\sum_i \mu_i dN_i</math><br>
                        <strong class="lar">开放系统不可逆过程：</strong><br>
                        令不可逆性造成的总熵变为<math inline=1>S_gen</math>，其值与路径有关。得到系统熵变：
                        <math>d\underline S=\sum_i \frac{\delta Q_{\sigma ,i}}{T_i}+\sum_{in}S_{in}\delta n_{in}-\sum_{out} S_{out}\delta n_{out}+\delta \underline S_{gen}</math>
                        其中<math inline=1>T_i</math>为外温。


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
            sixth: false,
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
    h3{
        font-size: 16.5px;
        color:rgb(32, 8, 165);
    }
    .pic{
        max-width:320px;
    }
    .piclarge{
        max-width: 400px;
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

