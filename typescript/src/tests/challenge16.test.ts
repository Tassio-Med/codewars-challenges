import { Kata } from "../challenges/challenge16";

describe('Kata.highAndLow', () => {
  it('deve retornar o maior e o menor número', () => {
    expect(Kata.highAndLow("1 2 3 4 5")).toBe("5 1");
    expect(Kata.highAndLow("1 2 -3 4 5")).toBe("5 -3");
    expect(Kata.highAndLow("1 9 3 4 -5")).toBe("9 -5");
  });
});
