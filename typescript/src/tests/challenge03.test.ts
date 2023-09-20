import { squareSum } from "../challenges/challenge03";

describe('numberToString', () => {

  it('deve calcular a soma dos quadrados dos números', () => {
    expect(squareSum([2, 5, 10])).toBe(129);
    expect(squareSum([2, 3, 4])).toBe(29);
    expect(squareSum([0, 0, 0])).toBe(0);
  });

  it('deve retornar 0 se o array for vazio ', () => {
    expect(squareSum([])).toBe(0);
  });

  it('deve lidar com números negativos', () => {
    expect(squareSum([-1, -2, -3])).toBe(14);
  });
});





