<template>
  <div>
    <md-steppers md-vertical :md-active-step.sync="active">
      <md-step id="first" md-label="Overview" md-description="Try it!" :md-done.sync="first">
        <p>Now that we have learnt the basic knowledge of several EOS, let’s take <span
            style="color:#46A3FF "><b>ethane</b></span> as an example!</p>
        <p>By looking up data of this matter, we can get
          <Math :inline="true"
                formula="\small p_c=49\times 10^5 \mathrm{kPa}, T_c=305.3 \mathrm{K}, V_c=0.147\times 10^{-3} \mathrm{m^3/mol}"/>
          ;
          If we take the properties of different matters into account, we get
          <Math :inline="true" formula="\small \omega=0.098"/>
          .
        </p>
        <p> Assuming that we have measured the temperature and pressure of this gas, that is:
          <Math inline="true" formula="\small T=366.48 \mathrm{K}"/>
          ,
          <Math inline="true" formula="\small p=3.446\times 10^6 \mathrm{Pa}"/>
          . How can we calculate the
          <span style="color: #46A3FF"><b>volume</b></span>?
        </p>
        <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
      </md-step>

      <md-step id="second" md-label="Calculation example" md-description="" :md-done.sync="second">
        <MultiTab :titles="['Ideal','VDW','RK','RKS','PR','Berthelot']">
          *
          <template v-slot:Ideal>
            <p>
              <Math>\scriptsize
                \begin{aligned}
                V&=\frac{RT}{p}
                \\&=\frac{8.314\times 366.48}{3.446\times 10^6}
                \\&=0.0008842 \mathrm{m^3/mol}
                \\&=8.842\times10^{-4} \mathrm{m^3/mol}
                \end{aligned}
              </Math>
              We can get
              <Math inline="true" formula="\small V=8.842\times10^{-4} \mathrm{m^3/mol}"/>
            </p>
          </template>
          *
          <template v-slot:VDW>
            <p>
              <Math>\scriptsize
                \begin{aligned}
                a&=\frac{27}{64} \frac{RT_c ^2}{p_c}
                \\ &=0.5547
                \\ b&=\frac{1}{8} \frac{RT_c}{p_c}
                \\&
                =6.475\times10^{-5}
                \end{aligned}
              </Math>
            </p>
            <p>
              According to
              <Math inline="true" formula="p=\frac{RT}{(V-b)}-\frac{a}{V^2}"/>
              ,we can get
              <Math inline="true" formula="\small V=7.537\times10^{-4} \mathrm{m^3/mol}"/>
            </p>
          </template>
          *
          <template v-slot:RK>
            <p>RK EOS:
              <Math>\scriptsize
                \begin{aligned}a&=0.42748 \frac{R^2 T_c^{2.5}}{p_c}\\&=0.42748\times\frac{8.314^2
                \times305.3^{2.5}}{49\times10^5}\\&=9.8210\\
                b&=0.08664 \frac{RT_c}{p_c}\\&=0.08664\times
                \frac{8.314\times305.3}{49\times10^5}\\&=4.488\times10^{-5}\end{aligned}
              </Math>
              According to
              <Math :inline="true" formula="pV=\frac{RT}{V-b}-\frac{a}{T^{0.5}V(V+b)}"/>
              , we solve this equation and get
              <Math inline="true" formula="\small V=7.538\times10^{-4} \mathrm{m^3/mol}"/>
            </p>
          </template>
          *
          <template v-slot:RKS>
            <p>RKS EOS:
              <Math>\scriptsize
                \begin{aligned}
                m&=0.480+1.574\omega-0.176\omega^2\\&=0.480+1.574\times0.098-0.176\times0.098^2\\&=0.6326
                \\
                \\\alpha(T)&=(1+m(1-T_{r}^{0.5}))^2\\&=(1+0.6326\times(1-(\frac{366.48}{305.3})^{0.5}))^2\\&=0.8827
                \\
                \\a&=0.42748 \frac{R^2T_c^{2}}{p_c}
                \\&=0.42748\times\frac{8.314^2\times305.3^{2}}{49\times10^5}
                \\&=0.5621
                \\
                \\a(T)&=a_{c}\alpha(T)\\&=0.5621\times0.8827\\&=0.4961
                \\
                \\b&=0.08664 \frac{RT_c}{p_c}\\&=0.08664\times
                \frac{8.314\times305.3}{49\times10^5}\\&=4.488\times10^{-5}\\
                \end{aligned}
              </Math>
              According to
              <Math :inline="true" formula="p=\frac{RT}{v-b}-\frac{a(T)}{v(v+b)}"/>
              , we solve this equation and get
              <Math inline="true" formula="\small V=7.609\times10^{-4} \mathrm{m^3/mol}"/>
            </p>
          </template>
          *
          <template v-slot:PR>
            <p>
              Calculate the parameters:
              <Math>\scriptsize
                \begin{aligned}
                b&=0.07780\frac{RT_{c}}{p_c}\\&=0.07780\frac{8.314\times305.3}{3446000}\\&=4.03\times10^{-5} \mathrm{m^3/mol}
                \\
                \\k&=0.3765+1.5423\omega-0.2699\omega^2\\&=0.377+1.542\times0.098-0.270\times0.098^2\\&=0.525
                \\
                \\\alpha(T)&=1+k(1-T_{r}^{0.5})\\&=(1+0.525(1-(\frac{366.48}{305.3})^{0.5})^2\\&=0.9021
                \\
                \\a(T)&=a_{c}\alpha(T)\\&=0.045724\frac{R^2T_{c}^2}{p_{c}}\alpha(T)\\&=0.5424 \mathrm{Pa·m^3/mol}
                \end{aligned}
              </Math>
              Solve the equation:
              <Math inline="true" formula="p=\frac{RT}{V-b}-\frac{a(T)}{V(V+b)+b(V-b)}"/>
              ,We can get
              <Math inline="true" formula="\small V=7.434\times10^{-4} \mathrm{m^3/mol}"/>
            </p>
          </template>
          *
          <template v-slot:Berthelot>
            <p>As for Berthelot equation,
              <Math>\scriptsize
                \begin{aligned}B&=\frac{9}{128}\frac{RT_{c}}{p_{c}}\left(1-6\frac{T^2}{T_{c}^2}\right)
                \\&=\frac{9}{128}\frac{8.314\times305.3}{49\times10^5}\left(1-6\times(\frac{366.48}{305.3})^2\right)
                \\&=-1.1523\times10^{-4} \mathrm{m^3/mol}
                \\
                \\Z&=\frac{pV}{RT}
                \\&=1+\frac{Bp}{RT}
                \\
                \\V&=\frac{RT}{p}+B
                \\&=\frac{8.314\times366.48}{3446000}-1.1523\times10^{-4}
                \\&=7.690\times10^{-4} \mathrm{m^3/mol}
                \end{aligned}
              </Math>
              We can get
              <Math inline="true" formula="\small V=7.690\times10^{-4} \mathrm{m^3/mol}"/>
            </p>
          </template>

        </MultiTab>

      </md-step>


      <md-step id="third" md-label="Comparison">
        <p>Until now, we have got a series of values of volume. How is the <b>accuracy</b> of these conclusion?
          We can
          calculate the <span style="color: #46A3FF"><b>relative error</b></span> between these results and
          the actual value:</p>
        <h3>Relative Errors</h3>
        actual value=
        <Math inline="true" formula="\small 7.598\times 10^{-4} \mathrm{m^3mol^{-1}}"/>

        <table class="re-table" style="width: 100%">
          <tr class="header">
            <th>EOS</th>
            <th>
              <Math formula="\frac{\rm Result}{10^{-4} \mathrm{m^3mol^{-1}}}"/>
            </th>
            <th>Relative<br/> error</th>
          </tr>
          <tr v-for="(line, name) in table">
            <td>{{name}}</td>
            <td>
              <Math :inline=true :formula="line.result"/>
            </td>
            <td>
              <Math :inline=true :formula="`${line.re>0?'+':''}${line.re}\\%25`"/>
            </td>
          </tr>
        </table>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
  import Math from "@/components/Math";
  import MultiTab from "@/components/MultiTab";

  export default {
    components: {Math, MultiTab},
    name: "HowToCalculate",
    data: () => ({
      active: 'first',
      first: false,
      second: false,
      table: {
        'Ideal gas': {result: 8.842, re: 16.37},
        vdw: {result: 7.537, re: -0.80},
        RK: {result: 7.538, re: -0.79},
        RKS: {result: 7.609, re: 0.14},
        PR: {result: 7.434, re: 1.94},
        Berthelot: {result: 7.690, re: 1.43}
      }
    }),
    methods: {
      setDone(id, index) {
        this[id] = true;
        if (index) {
          this.active = index
        }
      },
    }
  }
</script>

<style scoped>
  * {
    font-size: 15px;
    text-align: justify;
  }

  tr.header {
    background: #46A3FF;
    color: #FFFFFF
  }

  .re-table td, .re-table th {
    text-align: center;
  }
</style>