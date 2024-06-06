import { multiTable } from "../challenges/challenge82";

describe('multiTable', () => {
  it('deve retornar a tabela de multiplicação para o número 1', () => {
    const expected = '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10';
    expect(multiTable(1)).toBe(expected);
  });

  it('deve retornar a tabela de multiplicação para o número 5', () => {
    const expected = '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50';
    expect(multiTable(5)).toBe(expected);
  });

  it('deve retornar a tabela de multiplicação para o número 10', () => {
    const expected = '1 * 10 = 10\n2 * 10 = 20\n3 * 10 = 30\n4 * 10 = 40\n5 * 10 = 50\n6 * 10 = 60\n7 * 10 = 70\n8 * 10 = 80\n9 * 10 = 90\n10 * 10 = 100';
    expect(multiTable(10)).toBe(expected);
  });

  it('deve retornar a tabela de multiplicação para um número intermediário, como 7', () => {
    const expected = '1 * 7 = 7\n2 * 7 = 14\n3 * 7 = 21\n4 * 7 = 28\n5 * 7 = 35\n6 * 7 = 42\n7 * 7 = 49\n8 * 7 = 56\n9 * 7 = 63\n10 * 7 = 70';
    expect(multiTable(7)).toBe(expected);
  });
});
