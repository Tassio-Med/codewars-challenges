import { comp } from "../challenges/challenge80";

describe('comp', () => {
  test('Os arrays válidos devem retornar true', () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    const b1 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
    expect(comp(a1, b1)).toBe(true);
  });

  test('Os arrays válidos com ordem diferente devem retornar true', () => {
    const a1 = [11, 121, 144, 19, 161, 19, 144, 19];
    const b1 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
    expect(comp(a1, b1)).toBe(true);
  });

  test('Os arrays com elementos diferentes devem retornar false', () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    const b1 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
    expect(comp(a1, b1)).toBe(false);
  });

  test('Os arrays com elementos fora da ordem esperada devem retornar false', () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    const b1 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
    expect(comp(a1, b1)).toBe(false);
  });

  test('Os arrays vazios devem retornar true', () => {
    expect(comp([], [])).toBe(true);
  });

  test('Os arrays que são null devem retornar false', () => {
    expect(comp(null, [1])).toBe(false);
    expect(comp([1], null)).toBe(false);
    expect(comp(null, null)).toBe(false);
  });

  test('Os arrays de tamanhos diferentes devem retornar false', () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    const b1 = [121, 14641, 20736, 361, 25921, 361, 20736];
    expect(comp(a1, b1)).toBe(false);
  });
});
