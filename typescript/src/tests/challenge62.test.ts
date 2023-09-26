import { Kata } from '../challenges/challenge62';

describe('Kata', () => {
  it('deve retornar o oposto de um número positivo', () => {
    expect(Kata.opposite(10)).toBe(-10); 
    expect(Kata.opposite(2)).toBe(-2); 
    expect(Kata.opposite(548)).toBe(-548); 
  });
  it('deve retornar o oposto de um número negativo', () => {
    expect(Kata.opposite(-6)).toBe(6); 
    expect(Kata.opposite(-30)).toBe(30); 
    expect(Kata.opposite(-1)).toBe(1); 
  });
  it('deve retornar o oposto de um número de ponto flutuante', () => {
    expect(Kata.opposite(3.23)).toBe(-3.23); 
    expect(Kata.opposite(-7.01)).toBe(7.01); 
    expect(Kata.opposite(-4.45)).toBe(4.45); 
  });
});
