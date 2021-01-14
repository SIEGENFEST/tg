<template>
    <div>
        <md-steppers: md-active-step.sync="active" md-vertical md-linear>
            <md-step id="first" md-label="0.1 Math Fundamentals" md-description ="some math skills needed in following parts">
                <p>
                    这部分将简要介绍一些数学技巧，包括微积分基础内容、欧拉定理和勒让德变换。在之后的公式推导中，我们将应用这些内容。
                </p>
                <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Let's go!</md-button>
            <md-step id="second" md-label="0.1.1 导数和微分" md-description ="">
                <h3>偏微分和全微分</h3>
                <p>
                    一个多变量函数的偏导数，就是对其中一个变量求导，将其余变量视为常数。<br>
                    令<math inline="true">z=f(x,y)</math>，则z关于x的偏导可以表示为<math inline="true">{\left(\frac{\partial z}{\partial x}\right)}_y</math>，下标y表示y不变。热力学计算中，可以用偏微分表示状态函数随某系统条件的变化。不同下标可能得到不同的结果。<br>
                    对z求微分，得到：
                    <math> dz={\left(\frac{\partial z}{\partial x}\right)}_ydx+{\left(\frac{\partial z}{\partial y}\right)}_xdy</math>
                    简写为<math>dz=Mdx+Ndy</math>
                    dz为全微分的充要条件为：
                    <math>{\frac{\partial M}{\partial y}}_x={\frac{\partial N}{\partial x}}_y</math>
                    此式称为Euler倒易关系。由微积分相关知识可知，多元函数偏导连续即可微。
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
                    <math>{\left(\frac{\partial z}{\partial x}\right)}_y={\left(\frac{\partial z}{\partial t}\right)}_y{\left(\frac{\partial t}{\partial x}\right)}_y</math>

                </p>
    </div>

</template>
 
 <script >
    import Math from "@/components/Math";
    
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
        width: 600;
        font-size: 15px;
        font-family: sans-serif;
        text-align: justify;
    }
</style>