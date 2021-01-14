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
import {parsePageConfig} from './lib/ObjectAnalysingUtil'
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
            component: EOS_ID_VDW_RK
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

export interface SubMenu extends RouteConfig {
  icon?: string
}

export declare type MenuItem = (ParentMenu | SubMenu | RouteConfig)
