import { digitize } from "../challenges/challenge59";

describe('digitize', () => {
  
  it('deve retonar o número com dígitos separados e ao reverso em um array', () => {
    expect(digitize(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(digitize(934)).toEqual([4, 3, 9]);
    expect(digitize(456646)).toEqual([6, 4, 6, 6, 5, 4]);
    expect(digitize(0)).toEqual([0]);
  });
  it('deve funcionar corretamente com apenas um dígito', () => {
    expect(digitize(8)).toEqual([8]);
    expect(digitize(2)).toEqual([2]);
    expect(digitize(0)).toEqual([0]);
  });
});
