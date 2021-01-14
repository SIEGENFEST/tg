import {R} from "./Constants"

export default {
  // Categories
  equ_pV: {
    ig: 'Ideal gas',
    vdw: 'van der Waals (vdW)',
    rk: 'Redlich-Kwong (RK)',
    srk: 'Soave modified RK (SRK)',
    pr: 'Peng-Robinson (PR)',
    b: 'Berthlot (Virial-type)'
  },
  equ_T: {
    ig: 'Ideal gas',
    vdw: 'van der Waals (vdW)',
  },
  //Ideal Gas Calculation
  Ideal_p(Status: { T: number, V: number }) {
    return R * Status.T / Status.V
  },
  Ideal_V(Status: { T: number, p: number }) {
    return R * Status.T / Status.p
  },
  Ideal_T(Status: { p: number, V: number }) {
    return Status.p * Status.V / R
  },

  // Cubic EOS
  SolveCubic(b: number, c: number, d: number, z: number = 1, Epsilon: number = Math.pow(10, -3)): number {
    // Function and derivative
    let f = (x: number) => x * x * x + b * x * x + c * x + d;
    let df = (x: number) => 3 * x * x + 2 * b * x + c;
    // Newton-Raphson
    const MaxIter = 100;
    let z_n = z - f(z) / df(z);
    let iter = 1;
    while (iter < MaxIter && Math.abs(z_n - z) > Epsilon) {
      z = z_n;
      z_n = z - f(z) / df(z);
      iter++
    }
    return z_n
  },

  GetZ(p: number, V: number, T: number) {
    return p * V / (R * T)
  },

  // vdW
  // Helper functions
  vdW_a(Critical: { pc: number, Tc: number }) {
    return 27 / 64 * Math.pow(R * Critical.Tc, 2) / Critical.pc
  },
  vdW_b(Critical: { pc: number, Tc: number }) {
    return 1 / 8 * R * Critical.Tc / Critical.pc
  },
  // V, T, Tc, pc => p
  vdW_p(State: { V: number, T: number }, Critical: { pc: number, Tc: number }) {
    let V = State.V;
    let T = State.T;
    let a = this.vdW_a(Critical);
    let b = this.vdW_b(Critical);
    let p = R * T / (V - b) - a / (V * V);
    return {a, b, p}
  },
  // p, V, Tc, pc => T
  vdW_T(State: { p: number, V: number }, Critical: { pc: number, Tc: number }) {
    let p = State.p;
    let V = State.V;
    let a = this.vdW_a(Critical);
    let b = this.vdW_b(Critical);
    return (p + a / (V * V)) * (V - b) / R
  },
  // p, T, Tc, pc, [Z0]=> V, Z
  vdW_VZ(State: { p: number, T: number }, Critical: { pc: number, Tc: number }, Z0: number = 1) {
    let p = State.p;
    let T = State.T;
    let a = this.vdW_a(Critical);
    let b = this.vdW_b(Critical);
    let A = p * a / Math.pow(R * T, 2);
    let B = p * b / (R * T);
    let Z = this.SolveCubic(-(B + 1), A, -A * B, Z0);
    let V = Z * R * T / p;
    return {V: V, Z: Z}
  },

  // RK
  // Helper functions
  RK_a(Critical: { pc: number, Tc: number }) {
    return (0.42748 * R * R * Math.pow(Critical.Tc, 2.5)) / Critical.pc
  },
  RK_b(Critical: { pc: number, Tc: number }) {
    return (0.08664 * R * Critical.Tc) / Critical.pc
  },
  // V, T, Tc, pc => p
  RK_p(State: { V: number, T: number }, Critical: { pc: number, Tc: number }) {
    let V = State.V;
    let T = State.T;
    let a = this.RK_a(Critical);
    let b = this.RK_b(Critical);
    let p = (R * T) / (V - b) - a / (Math.sqrt(T) * V * (V + b));
    return {a, b, p}
  },
  // p, T, Tc, pc, [Z0] => V, Z
  RK_VZ(State: { p: number, T: number }, Critical: { pc: number, Tc: number }, Z0: number = 1) {
    let p = State.p;
    let T = State.T;
    let a = this.RK_a(Critical);
    let b = this.RK_b(Critical);
    let A = (a * p) / (R * R * Math.pow(T, 2.5));
    let B = (b * p) / (R * T);
    let Z = this.SolveCubic(-1, A - B - B * B, -A * B, Z0);
    let V = Z * R * T / p;
    return {a, b, V: V, Z: Z}
  },

  // SRK
  // Helper functions
  SRK_alpha_c(Critical: { pc: number, Tc: number }) {
    return (0.42748 * Math.pow(R * Critical.Tc, 2)) / Critical.pc
  },
  SRK_m(omega: number) {
    return 0.480 + 1.574 * omega - 0.176 * omega * omega
  },
  SRK_alpha_T(m: number, Tr: number) {
    return Math.pow(1 + m * (1 - Math.sqrt(Tr)), 2)
  },
  SRK_b(Critical: { pc: number, Tc: number }) {
    return 0.08664 * R * Critical.Tc / Critical.pc
  },
  // V, T, Tc, pc, omega => p
  SRK_p(State: { V: number, T: number },
        Critical: { pc: number, Tc: number }, omega: number) {
    let V = State.V;
    let T = State.T;
    let Tr = T / Critical.Tc;
    let alpha_c = this.SRK_alpha_c(Critical);
    let m = this.SRK_m(omega);
    let alpha_T = this.SRK_alpha_T(m, Tr);
    let a_T = alpha_c * alpha_T;
    let b = this.SRK_b(Critical);
    let p = R * T / (V - b) - a_T / (V * (V + b));
    return {alpha_c, m, alpha_T, a_T, b, p}
  },
  // p, T, Tc, pc, omega, [Z0] => V, Z
  SRK_VZ(State: { p: number, T: number }, Critical: { pc: number, Tc: number }, omega: number, Z0: number = 1) {
    let p = State.p;
    let T = State.T;
    let Tr = T / Critical.Tc;
    let alpha_c = this.SRK_alpha_c(Critical);
    let m = this.SRK_m(omega);
    let alpha_T = this.SRK_alpha_T(m, Tr);
    let a_T = alpha_c * alpha_T;
    let b = this.SRK_b(Critical);
    let A = a_T * p / Math.pow(R * T, 2);
    let B = b * p / (R * T);
    let Z = this.SolveCubic(-1, A - B - B * B, -A * B, Z0);
    let V = Z * R * T / p;
    return {m, a_T, b, V: V, Z: Z}
  },

  // PR
  // Helper functions
  PR_alpha_c(Critical: { pc: number, Tc: number }) {
    return 0.45724 * R * R * Critical.Tc * Critical.Tc / Critical.pc
  },
  PR_k(omega: number) {
    return 0.37646 + 1.54226 * omega - 0.26992 * omega * omega
  },
  PR_alpha_T(k: number, Tr: number) {
    return Math.pow(1 + k * (1 - Math.sqrt(Tr)), 2)
  },
  PR_b(Critical: { pc: number, Tc: number }) {
    return 0.07780 * R * Critical.Tc / Critical.pc
  },
  // V, T, Tc, pc, omega => p
  PR_p(State: { V: number, T: number }, Critical: { pc: number, Tc: number }, omega: number) {
    let V = State.V;
    let T = State.T;
    let Tr = T / Critical.Tc;
    let alpha_c = this.PR_alpha_c(Critical);
    let k = this.PR_k(omega);
    let alpha_T = this.PR_alpha_T(k, Tr);
    let a_T = alpha_c * alpha_T;
    let b = this.PR_b(Critical);
    let p = R * T / (V - b) - a_T / (V * (V + b) + b * (V - b));
    return {alpha_c, k, alpha_T, a_T, b, p}
  },
  // p, T, Tc, pc, omega, [Z0] => V, Z
  PR_VZ(State: { p: number, T: number }, Critical: { pc: number, Tc: number }, omega: number, Z0: number = 1) {
    let p = State.p;
    let T = State.T;
    let Tr = T / Critical.Tc;
    let alpha_c = this.PR_alpha_c(Critical);
    let k = this.PR_k(omega);
    let alpha_T = this.PR_alpha_T(k, Tr);
    let a_T = alpha_c * alpha_T;
    let b = this.PR_b(Critical);
    let A = a_T * p / Math.pow(R * T, 2);
    let B = b * p / (R * T);
    let Z = this.SolveCubic(-(1 - B), A - 2 * B - 3 * B * B, -(A * B - B * B - B * B * B), Z0);
    let V = Z * R * T / p;
    return {a_T, b, V: V, Z: Z}
  },

  // Berthelot
  Berthelot_B(T: number, Critical: { pc: number, Tc: number }) {
    let Tc = Critical.Tc;
    return 9 / 128 * R * Tc / Critical.pc * (1 - 6 * Math.pow(Tc / T, 2));
  },
  Berthelot_Z(State: { p: number, T: number }, Critical: { pc: number, Tc: number }) {
    let p = State.p;
    let T = State.T;
    let B = this.Berthelot_B(T, Critical);
    let Z = 1 + B * p / (R * T);
    return {B: B, Z: Z}
  },
  Berthelot_p(State: { V: number, T: number }, Critical: { pc: number, Tc: number }) {
    let V = State.V;
    let T = State.T;
    let B = this.Berthelot_B(T, Critical);
    return (1 + B / V) * R * T / V;
  },
  Bertherlot_V(state: { p: number, T: number }, Critical: { pc: number, Tc: number }) {
    let p = state.p;
    let T = state.T;
    let B = this.Berthelot_B(T, Critical);
    return R * T / p + B;
  },

  // Calc
  p(equationType: string, state: { V: number, T: number }, critical: { pc: number, Tc: number }, omega: number) {
    let p: number;
    switch (equationType) {
      case 'ig':
        p = this.Ideal_p(state);
        break;
      case 'vdw':
        p = this.vdW_p(state, critical).p;
        break;
      case 'rk':
        p = this.RK_p(state, critical).p;
        break;
      case 'srk':
        p = this.SRK_p(state, critical, omega).p;
        break;
      case 'pr':
        p = this.PR_p(state, critical, omega).p;
        break;
      case "b":
        p = this.Berthelot_p(state, critical);
    }
    return p;
  },

  V(equationType: string, state: { p: number, T: number }, critical: { pc: number, Tc: number }, omega: number) {
    let V: number;
    switch (equationType) {
      case 'ig':
        V = this.Ideal_V(state);
        break;
      case 'vdw':
        V = this.vdW_VZ(state, critical).V;
        break;
      case 'rk':
        V = this.RK_VZ(state, critical).V;
        break;
      case 'srk':
        V = this.SRK_VZ(state, critical, omega).V;
        break;
      case 'pr':
        V = this.PR_VZ(state, critical, omega).V;
        break;
      case 'b':
        V = this.Bertherlot_V(state, critical);
        break;
    }
    return V;
  },

  T(equationType: string, state: { p: number, V: number }, critical: { pc: number, Tc: number }) {
    let T: number;
    switch (equationType) {
      case 'ig':
        T = this.Ideal_T(state);
        break;
      case 'vdw':
        T = this.vdW_T(state, critical);
        break;
    }
    return T;
  }
}