<template>
    <div>
        <md-steppers :md-active-step.sync="active" md-vertical >
            <md-step id="first" md-label="0.1 数学基础" md-description ="some math skills needed " :md-done.sync="first">
                <p>
                    这部分将简要介绍一些数学技巧，包括微积分基础内容、欧拉定理和勒让德变换。在之后的公式推导中，我们将应用这些内容。
                </p>
                <md-button class="md-raised md-primary" @click="setDone('first','second')">Let's go!</md-button>
            </md-step>
            <md-step id="second" md-label="0.1.1 导数和微分" md-description ="" :md-done.sync="second">
                <h3>偏微分和全微分</h3>
                <p>
                    一个多变量函数的偏导数，就是对其中一个变量求导，同时将其余变量视为常数。<br>
                    令<math inline="true">z=f(x,y)</math>，则z关于x的偏导可以表示为<math inline="true">{\left(\frac{\partial z}{\partial x}\right)}_y</math>，下标y表示y不变。<br>
                    热力学计算中，可以用偏微分表示状态函数随某系统条件的变化。不同下标表示不同的恒定系统条件，因此下标不同，同一个偏导数得到的结果也可能不同。<br><br>
                    对z求微分，得到：
                    <math> dz={\left(\frac{\partial z}{\partial x}\right)}_ydx+{\left(\frac{\partial z}{\partial y}\right)}_xdy</math>
                    简写为:<math>dz=Mdx+Ndy</math>
                    dz为全微分的充要条件为：
                    <math>{\left(\frac{\partial M}{\partial y}\right)}_x={\left(\frac{\partial N}{\partial x}\right)}_y</math>
                    此式称为Euler倒易关系。                    
                </p>
                <h3>复合函数微分法</h3>
                <p>
                    令<math inline="true">F=f[x,z(x,y)]</math>，则：
                    <math>{\left(\frac{\partial F}{\partial x}\right)}_y={\left(\frac{\partial F}{\partial x}\right)}_z+{\left(\frac{\partial F}{\partial z}\right)}_x{\left(\frac{\partial z}{\partial x}\right)}_y
                    </math>                    
                </p>
                <h3>传递关系</h3>
                <p>
                    令<math inline="true">z=f(x,y)</math>，则:
                    <math>{\left(\frac{\partial z}{\partial x}\right)}_y={\left(\frac{\partial z}{\partial t}\right)}_y{\left(\frac{\partial t}{\partial x}\right)}_y</math>其中t是中间变量。
                </p>
                <h3>循环关系</h3>
                <p>
                    设<math inline="true">f(x,y,z)=0</math>，则：
                    <math>{\left(\frac{\partial z}{\partial x}\right)}_y{\left(\frac{\partial x}{\partial y}\right)}_z{\left(\frac{\partial y}{\partial z}\right)}_x=-1</math>
                </p>
                <md-button class="md-raised md-primary" @click="setDone('second','third')">OK</md-button>
            </md-step>
            <md-step id="third" md-label="0.1.2 格林公式和状态函数" md-description ="" :md-done.sync="third">
                <div>
                    <h3>格林公式</h3>
                    <p>
                        对于定义域为x-y平面上一块面积为D、周长为C的区域的函数<math inline="true">z=f(x,y)</math>，其微分表示为<math inline="true">dz=Mdx+Ndy</math><br>得到格林公式：
                        <math>\oint_C(Mdx+Ndy)=\iint_D\lbrack{\left(\frac{\partial N}{\partial x}\right)}_y-{\left(\frac{\partial M}{\partial y}\right)}_x\rbrack dxdy</math>
                    </p>
                    <img class="pic" src="../../../public/img/fund/math1.png"/>
                    <h3>推论</h3>
                    <p>
                        1，z函数有全微分的充要条件为： <math>{\left(\frac{\partial M}{\partial y}\right)}_x={\left(\frac{\partial N}{\partial x}\right)}_y</math>
                        2. 将上式代入格林公式可以得到：<math>\oint_Cdz=0</math>即z函数环路积分为0；
                        3. 令A和B为曲线C上任意两点，则环路积分<math inline="true">\oint_Cdz=0</math>可以写为：
                        <math>\int_{C_1(A,B)}dz+\int_{C_2(B,A)}dz=0</math>
                        即：<math>\int_{C_1(A,B)}dz=\int_{C_2(A,B)}dz</math>
                        可见z函数的积分结果与路径无关，只与起点和终点有关。<br>
                        <br>以上三个推论由同一条件得到（dz为全微分），因此上述三个结论等价，满足条件的函数z称为状态函数。热力学中U,H,G,A等即为状态函数。
                    </p>
                </div>
                <md-button class="md-raised md-primary" @click="setDone('third','fourth')">OK</md-button>
            </md-step>
            <md-step id="fourth" md-label="0.1.3 齐次函数和欧拉定理" md-description ="" :md-done.sync="fourth">
                <p>
                    若同时用λx和λy（λ为一参数）分别取代函数f(x,y)中的x和y，所得到的新函数f(λx,λy)与原来函数的关系为:
                    <math>f(\lambda x,\lambda y)=\lambda^n\cdot f(x,y)</math>
                    则函数f(x,y)叫做n次齐函数，例如函数<math inline="1">f=ax^2+bxy+cy^2</math>即为二次齐函数。<br><br>齐函数具有如下两个性质：<br>
                    1. 若f(x,y)是n次齐函数，则:
                    <math>x(\frac{\partial f}{\partial x})_y+y(\frac{\partial f}{\partial y})_x=n\cdot f(x,y)</math>此关系称为齐函数欧拉定理；<br>
                    2. 若f(x,y)是n次齐函数，则
                    <math inline="true">(\frac{\partial f}{\partial x})_y和(\frac{\partial f}{\partial y})_x</math>是(n-1)次齐函数。
                </p>
                <md-button class="md-raised md-primary" @click="setDone('fourth','fifth')">OK</md-button>
            </md-step>
            <md-step id="fifth" md-label="0.1.4 勒让德变换" md-description ="" :md-done.sync="fifth">
                <div> 
                    <p>                  
                        勒让德变换（Legendre Transformation）在数学上是从一组独立变量到另一组独立变量的变换，在热力学函数H,U,G,A之间的变换关系中有着广泛的应用。下面介绍二元函数的Legendre变换。
                    </p> 
                    <p>
                        考虑二元函数f(x,y)，它的全微分表示为:
                        <math>df=(\frac{\partial f}{\partial x}{)_ydx}+(\frac{\partial f}{\partial y}{)_xdy}=udx+vdy</math>
                        从独立变量（x,y）到独立变量(u,v)可以表示为:
                        <math>x=x(u，v), y=y(u，v)</math>
                        则函数f(x,y)=f(x(u,v),y(u,v))；对(u,v)求偏导得：
                        <math>\frac{\partial f}{\partial u}=\frac{\partial f}{\partial x}\frac{\partial x}{\partial u}+\frac{\partial f}{\partial y}\frac{\partial y}{\partial u}=u\frac{\partial x}{\partial u}+v\frac{\partial y}{\partial u}=\frac{\partial ux}{\partial u}+v\frac{\partial y}{\partial u}-x</math>
                        <math>\frac{\partial f}{\partial v}=\frac{\partial f}{\partial x}\frac{\partial x}{\partial v}+\frac{\partial f}{\partial y}\frac{\partial y}{\partial v}=u\frac{\partial x}{\partial v}+v\frac{\partial y}{\partial v}=\frac{\partial vy}{\partial v}+u\frac{\partial x}{\partial v}-y</math>
                        即：
                        <math>x=\frac{\partial(ux+vy-f)}{\partial u}\equiv\frac{\partial f'}{\partial u}</math>
                        <math>y=\frac{\partial(ux+vy-f)}{\partial v}\equiv\frac{\partial f'}{\partial v}</math>
                        其中勒让德变换f'(u,v)为：
                        <math>f'(u,v)=ux+vy-f(x,y)</math><br>
                        以<math inline=1>y^{(a)}_{bc}</math>表示对函数y进行a次勒让德变换，并对第b个和第c个变量求偏导。有以下数学关系：
                        <math>
                            y^{(1)}_{11}=-\frac1{y^{(0)}_{11}},\;
                            y^{(1)}_{1i}=\frac{y^{(0)}_{1i}}{y^{(0)}_{11}},i\neq 1\\
                            y^{(1)}_{ij}=y^{(0)}_{ij}-\frac{y^{(0)}_{1i}y^{(0)}_{1j}}{y^{(0)}_{11}},i\neq j
                        </math>
                        只需要给出原基础函数的偏微分关系，便可以得到其他坐标下函数的偏微分关系。
                    </p>                    
                    <h3>热力学中的应用</h3>
                    <p>
                        该部分可参考1.3.3部分内容。
                        热力学基本方程式中，状态函数内能的微分表示为：
                        <math>dU=TdS-pdV</math>
                        对TdS项做勒让德变换得到亥姆霍兹自由能的微分：
                        <math>dA=-SdT-pdV</math>
                        对pdV项做勒让德变换得到焓的微分：
                        <math>dH=d(U+pV)=TdS+VdP</math>
                        再对TdS做勒让德变换得到吉布斯自由能的微分：
                        <math>dG=d(H-TS)=-SdT+Vdp</math> 
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
        name: "math_fund",
        data: () => ({
            active: 'first',
            first: false,
            second: false,
            
        }),
        methods: {
            setDone(id, index) {
                this[id] = true;
                if (index) {
                    this.active = index
                }
            },
        }
    })
 </script>

 <style lang="scss" scoped>
    .md-steppers {
        max-width: 700px;
        font-size: 15px;
        line-height: 25px;
        font-family: sans-serif;
        text-align: justify;
    }
    h3{
        font-size: 16.5px;
        color:rgb(32, 8, 165);
    }
    .pic{
        max-width:300px;
    }
</style>