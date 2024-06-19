import { SeriesSum } from "../challenges/challenge85";

describe('SeriesSum', () => {
  test('deve retornar "0.00" quando n é 0', () => {
    expect(SeriesSum(0)).toBe("0.00");
  });

  test('deve retornar "1.00" quando n é 1', () => {
    expect(SeriesSum(1)).toBe("1.00");
  });

  test('deve retornar "1.25" quando n é 2', () => {
    expect(SeriesSum(2)).toBe("1.25");
  });

  test('deve retornar "1.39" quando n é 3', () => {
    expect(SeriesSum(3)).toBe("1.39");
  });

  test('deve retornar "1.49" quando n é 4', () => {
    expect(SeriesSum(4)).toBe("1.49");
  });

  test('deve retornar "1.57" quando n é 5', () => {
    expect(SeriesSum(5)).toBe("1.57");
  });

});