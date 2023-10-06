import { isSquare } from '../challenges/challenge14';

describe('isSquare', () => {
  it('deve retornar true para números quadrados perfeitos', () => {
    expect(isSquare(0)).toBe(true);
    expect(isSquare(1)).toBe(true);
    expect(isSquare(4)).toBe(true);
    expect(isSquare(9)).toBe(true);
    expect(isSquare(16)).toBe(true);
    expect(isSquare(25)).toBe(true);
  });

  it('deve retornar false para números não-quadrados', () => {
    expect(isSquare(2)).toBe(false);
    expect(isSquare(3)).toBe(false);
    expect(isSquare(7)).toBe(false);
    expect(isSquare(10)).toBe(false);
  });
});