import {R} from "./Constants"
import EOS from "./EOS"

export default {
  // Category
  equ: {
    rk: 'Redlich-Kwong (RK)',
    srk: 'Soave modified RK (SRK)',
    pr: 'Peng-Robinson (PR)',
  },
  RK(State: { p: number, T: number }, Critical: { pc: number, Tc: number }, Z0: number = 1) {
    let VZ = EOS.RK_VZ(State, Critical, Z0);
    let a = VZ.a, b = VZ.b, V = VZ.V, Z = VZ.Z, T = State.T;
    let lnphi = (Z - 1) - Math.log(Z) - a / (b * R * Math.pow(T, 1.5)) * Math.log(1 + b / V) - Math.log(1 - b / V);
    return Math.exp(lnphi)
  },
  SRK(State: { p: number, T: number }, Critical: { pc: number, Tc: number }, omega: number, Z0: number = 1) {
    let VZ = EOS.SRK_VZ(State, Critical, omega, Z0);
    let a = VZ.a_T, b = VZ.b, V = VZ.V, Z = VZ.Z, T = State.T;
    let lnphi = Z - 1 - Math.log(Z * (1 - b / V)) - a / (b * R * T) * Math.log(1 + b / V);
    return Math.exp(lnphi);
  },
  PR(State: { p: number, T: number }, Critical: { pc: number, Tc: number }, omega: number, Z0: number = 1) {
    let VZ = EOS.PR_VZ(State, Critical, omega, Z0);
    let T = State.T, p = State.p, V = VZ.V, Z = VZ.Z, a = VZ.a_T, b = VZ.b;
    let A = a * p / Math.pow(R * T, 2), B = b * p / R / T;
    let lnphi = Z - 1 - Math.log(Z - B) - A / 2 / Math.sqrt(2) / B * Math.log((Z + 2.414 * B) / (Z - 0.414 * B));
    return Math.exp(lnphi);
  },

  // Calc
  phi(equationType: string, state: { p: number, T: number }, critical: { pc: number, Tc: number }, omega: number) {
    let phi: number;
    switch (equationType) {
      case 'rk':
        phi = this.RK(state, critical);
        break;
      case 'srk':
        phi = this.SRK(state, critical, omega);
        break;
      case 'pr':
        phi = this.PR(state, critical, omega);
        break;
    }
    return phi;
  }
}