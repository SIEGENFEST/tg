import Vue from 'vue'
import Router, {RouteConfig} from 'vue-router'
import Home from './views/Home.vue'
// import PhaseDiagram from './components/PhaseDiagram.vue'
import IntroEOS from './views/IntroEOS.vue'
import EOS_ID_VDW_RK from './views/EOS-ID-VDW-RK.vue'
import VirialEOS from './views/VirialEOS.vue'
import HowToCalculate from './views/HowToCalculate.vue'
import EOS_Calc from './views/EOS_Calculator.vue'
import EOS_Diagram from './views/EOS_Diagram.vue'
import Entropy from './views/Entropy&Enthalpy.vue'
import Fugacity from './views/Fugacity_theory.vue'
import PhaseEquilibriumExample from './views/PhaseEquilibriumExample.vue'
import Mixture_Calculator from "@/views/Mixture_Calculator.vue";
import Mixture_Diagram from "@/views/Mixture_Diagram.vue";
import AboutUs from './views/AboutUs.vue'

import Math_fund from './views/fund/math_fund.vue'
import B_c_sys from './views/fund/bas_con_sys.vue'
import B_c_ig from './views/fund/bas_con_ig.vue'
import B_c_is from './views/fund/bas_con_is.vue'
import B_c_ref from './views/fund/bas_con_ref.vue'
import Purpose from './views/fund/purpose.vue'

import Postulates from './views/basic/postulates.vue'
import Firstlaw_exam from './views/basic/laws_example.vue'
import Firstlaw from './views/basic/firstlaw.vue'
import Secondlaw from './views/basic/secondlaw.vue'
import Thirdlaw from './views/basic/thirdlaw.vue'
import Functions from './views/basic/functions.vue'

import Real_gas_intro from './views/pureSub/realgasintro.vue'
import Mul_para from './views/pureSub/mul_para.vue'
import Cubic_eq from './views/pureSub/cubic_eq.vue'
import Pure_g_corre from './views/pureSub/pure_g_corre.vue'
import Pure_li from './views/pureSub/real_li.vue'
import Resi_func from './views/pureSub/resi_func.vue'
import Fuga from './views/pureSub/fugacity.vue'

import Mix_exc from './views/mix/mix_exc.vue'
import Mg_rule from './views/mix/mg_rule.vue'
import Mg_fu from './views/mix/mg_fu.vue'
import Id_so from './views/mix/ideal_s.vue'
import Act from './views/mix/act.vue'
import Act_mo from './views/mix/act_mo.vue'
import Act_app from './views/mix/act_app.vue'

import Sta_cri from './views/equi/sta_cri.vue'

import {parsePageConfig} from './lib/ObjectAnalysingUtil'
import { component } from 'vue/types/umd'
// import LocalTest from './views/LocalTest.vue'

Vue.use(Router);

export const pages: MenuItem[] = [
  {
    // icon: 'favicon',
    path: '',
    name: 'Home',
    component: Home
  },
  {
    // icon:'pure',
    name: '0 Fundamentals',
    path: 'fund',
    children:[
      {
        path: 'math-fund',
        name: '0.1 Math Fundamentals',
        component: Math_fund,
      },
      {
        path: 'bas-con',
        name: '0.2 Basic Concepts',
        children:[
          {
            path: 'sys',
            name: '0.2.1 System and Boundary',
            component: B_c_sys,
          },
          {
            path: 'ig',
            name:' 0.2.2 Ideal Gas',
            component: B_c_ig,
          },
          {
            path:'is',
            name:'0.2.3 Ideal Solution',
            component: B_c_is,
          },
          {
            path:'ref',
            name:'0.2.4 Reference State',
            component: B_c_ref,
          },
        ],
      },
      {
        path: 'pur',
        name: '0.3 Purpose',
        component: Purpose,
      },
    ],
  },
  {
    // icon: 'intro',
    name: '1 Basics',
    path: 'basics',
    children:[
      {
        path: 'post',
        name: '1.1 Postulates',
        component:Postulates,
      },
      {
        path: 'laws',
        name: '1.2 Laws of Thermodynamics',
        children:[
          {
            path: 'firstlaw',
            name: '1.2.1 First Law',
            component: Firstlaw,
          },
          {
            path: 'first-exam',
            name: 'First Law-Examples',
            component: Firstlaw_exam,
          },
          {
            path: 'secondlaw',
            name: '1.2.2 Second Law',
            component: Secondlaw,
          },
          {
            path: 'thirdlaw',
            name: '1.2.3 Third Law',
            component: Thirdlaw,
          },
        ],
      },
      {
        path:'functions',
        name:'1.3 Functions',
        component:Functions,
      },
    ],
  },
  {
    // icon: 'pure',
    name: '2 Pure Substance',
    path: 'pu-sub',
    children:[
      {
        path:'real-gas',
        name:'2.1 Real Gas',
        children:[
          {
            path:'intro',
            name:'Introduction',
            component: Real_gas_intro,
          },
          {
            path:'mul-para',
            name:'2.1.1 Virial-Type EOS',
            component: Mul_para,
          },
          {
            path:'cubic-eq',
            name:'2.1.2 Cubic(vdW) EOS',
            component: Cubic_eq,
          },
          {
            path:'corre',
            name:'2.1.3 Corresponding States',
            component: Pure_g_corre,
          },
        ],
      },
      {
        path: 'pure-liquid',
        name:'2.2 Pure Liquid',
        component:Pure_li,
      },
      {
        path: 'resi-func',
        name: '2.3 Residual Properties',
        component: Resi_func,
      },
      {
        path: 'fugacity',
        name: '2.4 Fugacity',
        component: Fuga,
      },
    ],
  },
  {
    // icon:'mixture',
    path:'mix',
    name:'3 Mixture',
    children:[
      {
        path:'mix-exc',
        name:'3.1 Mixing Functions, Excess Functions',
        component: Mix_exc,
      },
      {
        path:'m-gas',
        name:'3.2 Gas Mixture',
        children:[
          {
            path:'m-rule',
            name:'3.2.1 Mixing Rules',
            component: Mg_rule,
          },
          {
            path:'mg-fu',
            name:'3.2.2 Fugacity',
            component:Mg_fu,
          },
        ],
      },
      {
        path:'id-so',
        name:'3.3 Ideal Solution',
        component:Id_so,
      },
      {
        path:'li-mix',
        name:'3.4 Liquid Mixture',
        children:[
          {
            path:'act',
            name:'3.4.1 Activity',
            component:Act,
          },
          {
            path:'act-mo',
            name:'3.4.2 Activity Coefficient Model',
            component:Act_mo,
          },
          {
            path:'act-cal',
            name:'3.4.3 Application',
            component:Act_app,
          },
        ],
      },
    ],
  },
  {
    // icon:'mixture',
    path:'phase-equi',
    name:'4 Phase Equilibrium',
    children:[
      {
        name:'4.1 Stability',
        path:'sta',
        component:Sta_cri,
      },
    ],
  },
  {
    // icon:'calc',
    name:'5 Calculator',
    path:'calcu',
    children:
    [
      {
        path:'pure-gram',
        name:'5.1 EOS Diagram (vdW, ideal gas)',
        component: EOS_Diagram,
      },
      {
        path:'calcu',
        name:'5.2 Pure Gas Calculator',
        component: EOS_Calc,
      },
      {
        path:'mix-cal',
        name:'5.3 Mixture Calculator',
        component: Mixture_Calculator,
      },
    ],
  },
  {
    // icon: 'smile',
    path: 'about-us',
    name: 'About Us',
    component: AboutUs,
  }/*,
  {
    icon: '',
    path: 'local-text',
    name: 'Local Test',
    component: LocalTest,
  },*/


];
/*try {
  routes.push({path: '/local-test', name: 'localTest', component: () => import('./views/LocalTest.vue')})
} catch (e) {
}*/
// const routes: RouteConfig[] = [];


export default new Router({routes: parsePageConfig(pages)})


export interface ParentMenu {
  icon: string
  name: string
  path: string
  children: MenuItem[]
}

export interface SubMenu  {
  icon: string
}

export declare type MenuItem = (ParentMenu | SubMenu | RouteConfig)
