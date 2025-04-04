import algebra from 'algebra.js';
import { evaluate } from 'mathjs';

const Fraction = algebra.Fraction;
const Expression = algebra.Expression;
const Equation = algebra.Equation;

export function linearAlgebraSolver(rhs, lhs, variable) {
  const x1 = algebra.parse(lhs);
  const x2 = algebra.parse(rhs);
  const eq = new Equation(x1, x2);
  console.log(eq.toString());
  const answer = eq.solveFor(variable);
  return answer;
}

export function simultaneousEquationsSolver(rhs, lhs, var1, var2) {
  const expr1 = algebra.parse(rhs);
  const expr2 = algebra.parse(lhs);

  const eq = new Equation(expr1, expr2);

  console.log(eq.toString());

  const xAnswer = eq.solveFor(var1);
  const yAnswer = eq.solveFor(var2);

  console.log('x = ' + xAnswer.toString());
  console.log('y = ' + yAnswer.toString());
  const res = [];
  res.push(xAnswer.toString());
  res.push(yAnswer.toString());
  return res;
}

export function evaluationSolver(eqn) {
  const res = evaluate(eqn);
  return res;
}

export function quadraticSolver(a, b, c) {
  const result = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  const result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  const results = [];
  results.push(result);
  results.push(result2);
  return results;
}

// (a+b)²
export function identity1Solver(a, b) {
  console.log(a);
  console.log(b);
  const res = Math.pow(a + b, 2);
  return res;
}

export function identity2Solver(a, b) {
  const res = Math.pow(a - b, 2);
  return res;
}

export function identity3Solver(a, b) {
  const bracket1 = a + b;
  const bracket2 = a - b;
  const res = bracket1 * bracket2;
  return res;
}
