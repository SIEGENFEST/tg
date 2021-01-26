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
import Pure_g_corre from './views/pureSub/pure_g_corre.vue'

import {parsePageConfig} from './lib/ObjectAnalysingUtil'
import { component } from 'vue/types/umd'
// import LocalTest from './views/LocalTest.vue'

Vue.use(Router);

export const pages: MenuItem[] = [
  {
    icon: 'favicon',
    path: '',
    name: 'Home',
    component: Home
  },
  {
    icon:'pure',
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
    icon: 'intro',
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
    icon: 'pure',
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
        ],
      },
      {
        path:'corre',
        name:'2.1.3.1 Corresponding States',
        component: Pure_g_corre,
      },
    ],
  },
  {
    icon: 'pure',
    name: 'Pure substance',
    path: 'pure-substance',
    children: [
      {
        children: [
          {
            path: 'eos-intro',
            name: 'Introduction of EOS',
            component: IntroEOS,
          },
          {
            path: 'eos-id-vdw-rk',
            name: 'Cubic EOS',
            component: EOS_ID_VDW_RK,
          },
          {
            path: 'virial-eos',
            name: 'Virial EOS',
            component: VirialEOS,
          },
          {
            icon: 'blub',
            path: 'calculation-example',
            name: 'Calculation Example',
            component: HowToCalculate,
          },
          {
            icon: 'gas',
            path: 'eos-diagram',
            name: 'EOS Diagram',
            component: EOS_Diagram,
          }],
        icon: 'gas',
        path: 'eos',
        name: "EOS"
      },
      {
        icon: 'flame',
        path: 'entropy-and-enthalpy',
        name: 'Entropy & Enthalpy',
        component: Entropy,
      },
      {
        icon: 'intro',
        path: 'fugacity',
        name: 'Fugacity theory',
        component: Fugacity,

      },
      {
        icon: 'calc',
        path: 'calculator',
        name: 'Calculator',
        component: EOS_Calc,
      }
    ]
  },
  {
    icon: 'mixure',
    path: 'mixture',
    name: 'Mixture',
    children: [
      {
        icon: 'blub',
        path: 'phase-equ-example',
        name: 'Phase Equilibrium Example',
        component: PhaseEquilibriumExample,
      },
      {
        icon: 'calc',
        path: 'mixture-calc',
        name: 'Mixture Calculator',
        component: Mixture_Calculator,
      }
    ]
  },
  {
    icon: 'smile',
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
  icon?: string
  name: string
  path: string
  children: MenuItem[]
}

export interface SubMenu  {
  icon?: string
}

export declare type MenuItem = (ParentMenu | SubMenu | RouteConfig)
