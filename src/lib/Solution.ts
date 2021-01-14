import {R} from "./Constants"

export default {
  equ: {
    sh: 'Scatchard-Hildebrand (SH)',
    vl: 'van Laar (Wohl)',
    m: 'Margules (Wohl)',
    sym: 'Symmetrical (Wohl)',
    sh_w: 'Schatchard-Hamer (Wohl)',
    fh: 'Flory-Huggins (FH)',
    w: 'Wilson'
  },
  SH(content_1: number, Volume_1: number, Volume_2: number, delta_1: number, delta_2: number, T: number = 298) {
    let x = content_1;
    let phi_1 = x * Volume_1 / (x * Volume_1 + (1 - x) * Volume_2);
    let phi_2 = 1 - phi_1;
    let lngamma_1 = Volume_1 * Math.pow(delta_1 - delta_2, 2) / (R * T) * Math.pow(phi_2, 2);
    let lngamma_2 = Volume_2 * Math.pow(delta_1 - delta_2, 2) / (R * T) * Math.pow(phi_1, 2);
    return {lngamma_1, lngamma_2, gamma_1: Math.exp(lngamma_1), gamma_2: Math.exp(lngamma_2)};
  },
  vanLaar(content_1: number, A12: number, A21: number) {
    let x = content_1;
    let lngamma_1 = A12 / Math.pow(1 + A12 / A21 * x / (1 - x), 2);
    let lngamma_2 = A21 / Math.pow(1 + A21 / A12 * (1 - x) / x, 2);
    return {lngamma_1, lngamma_2, gamma_1: Math.exp(lngamma_1), gamma_2: Math.exp(lngamma_2)};
  },
  Margules(content_1: number, A12: number, A21: number) {
    let x = content_1;
    let lngamma_1 = Math.pow(1 - x, 2) * (A12 + 2 * x * (A21 - A12));
    let lngamma_2 = Math.pow(x, 2) * (A21 + 2 * (1 - x) * (A12 - A21));
    return {lngamma_1, lngamma_2, gamma_1: Math.exp(lngamma_1), gamma_2: Math.exp(lngamma_2)};
  },
  Symmetrical(content_1: number, A: number) {
    let x = content_1;
    let lngamma_1 = A * Math.pow(1 - x, 2);
    let lngamma_2 = A * Math.pow(x, 2);
    return {lngamma_1, lngamma_2, gamma_1: Math.exp(lngamma_1), gamma_2: Math.exp(lngamma_2)};
  },
  SH_Wohl(content_1: number, A12: number, A21: number, Volume_1: number, Volume_2: number) {
    let x = content_1;
    let lngamma_1 = Math.pow(1 - x, 2) * (A12 + 2 * x * (A21 * Volume_1 / Volume_2 - A12));
    let lngamma_2 = Math.pow(x, 2) * (A21 + 2 * (1 - x) * (A12 * Volume_2 / Volume_1 - A21));
    return {lngamma_1, lngamma_2, gamma_1: Math.exp(lngamma_1), gamma_2: Math.exp(lngamma_2)};
  },
  FH(content_1: number, nodes: number, chi: number) {   // 2 refers to ploymer in this fuction
    let x = content_1, m = nodes;
    let phi_2 = (1 - x) * m / ((1 - x) * m + x);
    let phi_1 = x / ((1 - x) * m + x);
    let lngamma_1 = Math.log(phi_1 / x) + (1 - 1 / m) * phi_2 + chi * Math.pow(phi_2, 2);
    let lngamma_2 = Math.log(phi_2 / (1 - x)) - (m - 1) * phi_1 + m * chi * Math.pow(phi_1, 2);
    return {lngamma_1, lngamma_2, gamma_1: Math.exp(lngamma_1), gamma_2: Math.exp(lngamma_2)};
  },
  Wilson(content_1: number, Lambda_12: number, Lambda_21: number) {
    let x = content_1;
    let lngamma_1 = -Math.log(x + Lambda_12 * (1 - x)) + (1 - x) * (Lambda_12 / (x + Lambda_12 * (1 - x)) - Lambda_21 / (1 - x + Lambda_21 * x));
    let lngamma_2 = -Math.log(1 - x + Lambda_21 * x) + x * (Lambda_21 / (1 - x + Lambda_21 * x) - Lambda_12 / (x + Lambda_12 * (1 - x)));
    return {lngamma_1, lngamma_2, gamma_1: Math.exp(lngamma_1), gamma_2: Math.exp(lngamma_2)};
  },
  // Calc
  gamma(equationType: string, parameters: {
    x1: number;
    sh: { T: number; Volume_2: number; delta_1: number; Volume_1: number; delta_2: number };
    wohl: { A21: number; A12: number }
    fh: { nodes: number; chi: number };
    wilson: { Lambda_21: number; Lambda_12: number };
  }) {
    let gamma: { lngamma_1: number, lngamma_2: number, gamma_1: number, gamma_2: number };
    switch (equationType) {
      case 'sh':
        let delta_1 = parameters.sh.delta_1;
        let delta_2 = parameters.sh.delta_2;
        gamma = this.SH(parameters.x1, parameters.sh.Volume_1, parameters.sh.Volume_2, delta_1, delta_2, parameters.sh.T);
        break;
      case 'vl':
        gamma = this.vanLaar(parameters.x1, parameters.wohl.A12, parameters.wohl.A21);
        break;
      case 'm':
        gamma = this.Margules(parameters.x1, parameters.wohl.A12, parameters.wohl.A21);
        break;
      case 'sym':
        gamma = this.Symmetrical(parameters.x1, parameters.wohl.A12);
        break;
      case 'sh_w':
        gamma = this.SH_Wohl(parameters.x1, parameters.wohl.A12, parameters.wohl.A21, parameters.sh.Volume_1, parameters.sh.Volume_2);
        break;
      case 'fh':
        gamma = this.FH(parameters.x1, parameters.fh.nodes, parameters.fh.chi);
        break;
      case 'w':
        gamma = this.Wilson(parameters.x1, parameters.wilson.Lambda_12, parameters.wilson.Lambda_21);
        break;
    }
    return gamma;
  }
}