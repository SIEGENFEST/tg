import EOS from "./EOS"
import {R, UnitScale} from "./Constants"

export default {
  // Category
  equ: {
    rk: 'Redlich-Kwong (RK)',
    srk: 'Soave modified RK (SRK)'
  },
  RK_HR_SR(State: { p: number, T: number }, Critical: { pc: number, Tc: number }, Z0: number = 1) {
    let p = State.p, T = State.T;
    let VZ = EOS.RK_VZ(State, Critical, Z0);
    let V = VZ.V, a = VZ.a, b = VZ.b, Z = VZ.Z;
    let HR = R * T * (Z - 1 - 1.5 * a / (b * R * Math.pow(T, 1.5)) * Math.log(1 + b / V));
    let SR = -R * (0.5 * a / (R * Math.pow(T, 1.5) * b) * Math.log(1 + b * p / Z / R / T) - Math.log(Z - b * p / R / T));
    return {HR, SR};
  },
  SRK_HR_SR(State: { p: number, T: number }, Critical: { pc: number, Tc: number },
            omega: number, Z0: number = 1, p0: number = UnitScale.bar) {
    let p = State.p, T = State.T, Tc = Critical.Tc, pc = Critical.pc, Tr = T / Tc;
    let State_0 = {p: p0, T};
    let VZ = EOS.SRK_VZ(State, Critical, omega, Z0);
    let V = VZ.V, Z = VZ.Z, m = VZ.m, b = VZ.b;
    let V0 = EOS.SRK_VZ(State_0, Critical, omega, Z0).V;
    let A = (1 + m * (1 - Math.pow(Tr, 0.5))) * (1 + m * Math.pow(Tr, 0.5));
    let B = 0.42748 * Math.pow(R * Tc, 2) / pc * A;
    let HR = B / b * Math.log(V / (V + b)) + R * T * (Z - 1);
    let SR = R * Math.log(p / p0) + R * Math.log((V - b) / (V0 - b)) + (1 + m * (1 - Math.pow(Tr, 0.5))) * (m * Math.pow(Tr, -0.5) / Tc) * 0.42748 * Math.pow(R * Tc, 2) / pc / b * Math.log(V / (V + b));
    return {HR, SR};
  },
  Ideal_HR_SR(State: { p: number, T: number }, cp: number, State_0: { p: number, T: number } = {
    p: UnitScale.bar,
    T: 298
  }) {
    let Ideal_HR = cp * (State.T - State_0.T);
    let Ideal_SR = cp * Math.log(State.T / State_0.T) - R * Math.log(State.p / State_0.p);
    return {Ideal_HR, Ideal_SR};
  },
  // constant heat capacity
  RK_H(H0: number, HR: number, State: { p: number, T: number }, State_0: { p: number, T: number }, cp: number) {
    return H0 + cp * (State.T - State_0.T) + HR;
  },
  RK_S(S0: number, SR: number, State: { p: number, T: number }, State_0: { p: number, T: number }, cp: number) {
    return S0 + cp * Math.log(State.T / State_0.T) - R * Math.log(State.p / State_0.p) + SR;
  },

  // Calc
  r(equationType: string, state: { p: number, T: number }, critical: { pc: number, Tc: number }, Z0: number) {
    let r: { HR: number, SR: number };
    switch (equationType) {
      case 'rk':
        r = this.RK_HR_SR(state, critical, Z0);
        break;
      case 'srk':
        r = this.SRK_HR_SR(state, critical, Z0);
        break;
    }
    return r;
  }
}