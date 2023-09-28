import { findSmallestInt } from '../challenges/challenge09';

describe('findSmallestInt', () => {
  it('deve retornar o menor número do array', () => {
    expect(findSmallestInt([10, 343, 906, 41])).toBe(10); 
    expect(findSmallestInt([3, 8, 0, 1])).toBe(0); 
    expect(findSmallestInt([77, 7, 7777, 777])).toBe(7); 
  });
});