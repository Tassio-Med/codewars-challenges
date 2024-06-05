import { countPositivesSumNegatives } from '../challenges/challenge81';

describe('countPositivesSumNegatives', () => {
  test('Deve retornar [10, -65] para o array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    const output = [10, -65];
    expect(countPositivesSumNegatives(input)).toEqual(output);
  });

  test('Deve retornar [] para o array vazio', () => {
    const input: any[] = [];
    const output: any[] = [];
    expect(countPositivesSumNegatives(input)).toEqual(output);
  });

  test('Deve retornar [] para entrada nula', () => {
    const input = null;
    const output: any[] = [];
    expect(countPositivesSumNegatives(input)).toEqual(output);
  });

  test('Deve retornar [0, -6] para o array [-1, -2, -3]', () => {
    const input = [-1, -2, -3];
    const output = [0, -6];
    expect(countPositivesSumNegatives(input)).toEqual(output);
  });

  test('Deve retornar [3, 0] para o array [1, 2, 3]', () => {
    const input = [1, 2, 3];
    const output = [3, 0];
    expect(countPositivesSumNegatives(input)).toEqual(output);
  });

  test('Deve retornar [1, 0] para o array [100]', () => {
    const input = [100];
    const output = [1, 0];
    expect(countPositivesSumNegatives(input)).toEqual(output);
  });

  test('Deve retornar [0, -100] para o array [-100]', () => {
    const input = [-100];
    const output = [0, -100];
    expect(countPositivesSumNegatives(input)).toEqual(output);
  });

  test('Deve retornar [0, 0] para o array [0, 0, 0]', () => {
    const input = [0, 0, 0];
    const output = [0, 0];
    expect(countPositivesSumNegatives(input)).toEqual(output);
  });

  test('Deve retornar [2, -4] para o array [-4, 3, 2]', () => {
    const input = [-4, 3, 2];
    const output = [2, -4];
    expect(countPositivesSumNegatives(input)).toEqual(output);
  });
});
