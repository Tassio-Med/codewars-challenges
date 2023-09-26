import { even_or_odd } from '../challenges/challenge07';

describe('even_or_odd', () => {
  it('deve retornar "Odd" para um número ímpar', () => {
    expect(even_or_odd(3)).toBe("Odd"); 
    expect(even_or_odd(25)).toBe("Odd"); 
    expect(even_or_odd(49)).toBe("Odd"); 
  });
  it('deve retornar "Even" para um número par', () => {
    expect(even_or_odd(6)).toBe("Even"); 
    expect(even_or_odd(20)).toBe("Even"); 
    expect(even_or_odd(38)).toBe("Even"); 
  });
});
