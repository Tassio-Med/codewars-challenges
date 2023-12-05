import { positiveSum } from "../challenges/challenge76"

describe('positiveSum', () => {
  test('soma dos números positivos', () => {
    expect(positiveSum([1, -4, 7, 12])).toBe(20);
  });

  test('se o array for vazio deve retornar 0', () => {
    expect(positiveSum([])).toBe(0);
  });

  test('array sem números positivos deve retornar 0', () => {
    expect(positiveSum([-1, -2, -3])).toBe(0);
  });
});
