import {UnitScale} from "./Constants";

export default {
  AntoineEquation(T: number, A: number, B: number, C: number) {
    return Math.pow(10, A - B / (C + T))
  }
};

export const checkResult = (x: number) => (!Number.isNaN(x) && Number.isFinite(x) && (x >= 0));