import { goals } from '../challenges/challenge10';

describe('goals', () => {
  it('deve retornar o total de gols do Messi, somando as três ligas', () => {
    expect(goals(5, 5, 13)).toBe(23); 
    expect(goals(9, 6, 31)).toBe(46); 
    expect(goals(12, 11, 41)).toBe(64); 
  });
});