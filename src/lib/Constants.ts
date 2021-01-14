export const R = 8.314;
export const UnitScale = {
  MPa: Math.pow(10, 6),
  kPa: Math.pow(10, 3),
  bar: Math.pow(10, 5),
  atm: 1.01325 * Math.pow(10, 5),
  dm3: Math.pow(10, -3),
  cm3: Math.pow(10, -6)
};

export function ResponsiveUnits(num: number, Precision: number) {
  const unitList = ['P', 'T', 'G', 'M', 'k', '', 'm', 'u', 'n'];
  let idx = 5;
  let du = Math.floor(Math.log10(num) / 3);
  du = du > 5 ? 5 : du < -3 ? -3 : du;
  return {
    num: num / Math.pow(1e3, du),
    unit: unitList[idx - du],
    tex: `${(num / Math.pow(1e3, du)).toPrecision(Precision)}{\\rm \\; ${unitList[idx - du]}}`
  }
}

export const AntoineParameters = {
  //p in mmHg, T in degC
  water: [8.07131, 1730.63, 233.426],
  ethanol: [8.20417, 1642.89, 230.3]
};
