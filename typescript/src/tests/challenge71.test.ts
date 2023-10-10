import { solution } from "../challenges/challenge71";

describe('solution', () => {
  it('deve retornar um array de números ordenados', () => {
    expect(solution([4, 12, 0, 233])).toEqual([0, 4, 12, 233]);
    expect(solution([75, 12, 999, 1])).toEqual([1, 12, 75, 999]);
    expect(solution([,0, 2, 0, 0, 1, 38, 1])).toEqual([0, 0, 0, 1, 1, 2, 38]);
  });
  
  it('deve ordenar um array vazio', () => {
    expect(solution([])).toEqual([]);
  });
});


