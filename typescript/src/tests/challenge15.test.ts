import { sumArray } from "../challenges/challenge15";

describe('sumArray', () => {
  it('deve retornar a soma dos valores do array, menos o maior e o menor valor', () => {
    expect(sumArray([6, 2, 1, 8, 10])).toBe(16);
    expect(sumArray([1, 1, 11, 2, 3])).toBe(6);
  });

  it('deve retornar 0 para array vazio', () => {
    expect(sumArray([])).toBe(0);
  });

  it('deve retornar 0 para null', () => {
    expect(sumArray(null)).toBe(0);
  });
});


