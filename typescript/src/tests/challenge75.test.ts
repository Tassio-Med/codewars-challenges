import { between } from "../challenges/challenge75"

describe('between', () => {
  test('deve retornar um array de números entre a e b, incluindo a e b', () => {
    expect(between(1, 4)).toEqual([1, 2, 3, 4]);
    expect(between(3, 8)).toEqual([3, 4, 5, 6, 7, 8]);
    expect(between(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
  });

  test('deve retornar um array vazio quando a > b', () => {
    expect(between(5, 3)).toEqual([]);
  });

  test('deve retornar um array com um único elemento quando a = b', () => {
    expect(between(0, 0)).toEqual([0]);
  });
});
