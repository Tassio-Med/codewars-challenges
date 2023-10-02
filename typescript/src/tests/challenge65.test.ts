import { square } from '../challenges/challenge65';

describe('square', () => {
  it('deve retornar o quadrado de um número inteiro', () => {
    expect(square(0)).toBe(0); 
    expect(square(1)).toBe(1); 
    expect(square(23)).toBe(529); 
  });
  it('deve retornar o quadrado de um número decimal', () => {
    expect(square(1.899)).toBeCloseTo(3.60601); 
    expect(square(2.13)).toBeCloseTo(4.5369); 
    expect(square(4.29)).toBeCloseTo(18.4041); 
  });
  it('deve retornar o quadrado de um número negativo', () => {
    expect(square(-11)).toBe(121); 
    expect(square(-3.2)).toBeCloseTo(10.24); 
    expect(square(-1.5)).toBeCloseTo(2.25); 
  });
});