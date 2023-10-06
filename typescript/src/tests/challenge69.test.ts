import { longest } from '../challenges/challenge69';

describe('longest', () => {
  it('deve retornar uma string com caracteres distintos de s1 e s2', () => {
    const s1 = "xyaabbbccccdefww";
    const s2 = "xxxxyyyyabklmopq";
    expect(longest(s1, s2)).toBe("abcdefklmopqwxy");
  });

  it('deve retornar a string completa quando s1 e s2 são iguais', () => {
    const s1 = "abcdefghijklmnopqrstuvwxyz";
    expect(longest(s1, s1)).toBe("abcdefghijklmnopqrstuvwxyz");
  });

  it('deve retornar uma string vazia quando ambas as entradas são vazias', () => {
    const s1 = "";
    const s2 = "";
    expect(longest(s1, s2)).toBe("");
  });
});