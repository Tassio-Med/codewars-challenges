import { numberToString } from "../../challenges/challenge01";

describe('numberToString', () => {
  it('converte um número positivo para string', () => {
    expect(numberToString(123)).toBe('123');
    expect(numberToString(999)).toBe('999');
  });

  it('converte um número negativo para string', () => {
    expect(numberToString(-100)).toBe('-100');
    expect(numberToString(-2)).toBe('-2');
  });
});





