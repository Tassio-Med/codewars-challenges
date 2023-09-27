import { factorial } from '../challenges/challenge63';

describe('factorial', () => {
  it('deve retornar o fatorial dos números', () => {
    expect(factorial(1)).toBe(1); 
    expect(factorial(7)).toBe(5040); 
    expect(factorial(10)).toBe(3628800); 
  });
  it('deve retornar 1 se o parâmetro da função for 0', () => {
    expect(factorial(0)).toBe(1); 
  });
});
