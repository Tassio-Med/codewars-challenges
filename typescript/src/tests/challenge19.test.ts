import { Kata } from '../challenges/challenge19';

describe('Kata.squareDigits', () => {
  test('deve elevar ao quadrado os dígitos e concatená-los para 9119', () => {
    expect(Kata.squareDigits(9119)).toBe(811181);
  });

  test('deve elevar ao quadrado os dígitos e concatená-los para 765', () => {
    expect(Kata.squareDigits(765)).toBe(493625);
  });

  test('deve lidar com entrada de um único dígito, como 0', () => {
    expect(Kata.squareDigits(0)).toBe(0);
  });
});
