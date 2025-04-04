export function finalVelocitySolver(valU, valA, valT) {
  const res = Number(valU) + Number(valA) * Number(valT);
  return res;
}

export function finalVelocitySolver2(valU, valA, valS) {
  // v² = u² + 2as
  let res = Math.pow(valU, 2) + 2 * valA * valS;
  res = res ** 0.5;
  return res;
}

export function distanceSolver(valU, valA, valT) {
  // s = ut + ½at²
  const res = valU * valT + valA * Math.pow(valT, 2) * 0.5;
  return res;
}
