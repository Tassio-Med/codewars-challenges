import { flattenAndSort } from "../challenges/challenge58";

describe('flattenAndSort', () => {

  it('deve retornar um array vazio se o array for vazio ', () => {
    expect(flattenAndSort([])).toEqual([]);
  });
  it('deve retornar um array com todos os elementos em ordem crescente', () => {
    expect(flattenAndSort([[3, 2, 1], [9, 7, 8], []])).toEqual([1, 2, 3, 7, 8, 9]);
    expect(flattenAndSort([[0, 0, 0], [5, 4, 5], []])).toEqual([0, 0, 0, 4, 5, 5]);
    expect(flattenAndSort([[2, 12, 9], [11, 4, 1], [250]])).toEqual([1, 2, 4, 9, 11, 12, 250]);
  });
});
