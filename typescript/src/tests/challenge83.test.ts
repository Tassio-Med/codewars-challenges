import { hexToDec } from '../challenges/challenge83';

describe('hexToDec', () => {
  it('converte um número hexadecimal positivo para decimal', () => {
    expect(hexToDec('A')).toBe(10);
    expect(hexToDec('1A')).toBe(26);
    expect(hexToDec('FF')).toBe(255);
    expect(hexToDec('100')).toBe(256);
  });

  it('converte um número hexadecimal negativo para decimal', () => {
    expect(hexToDec('-A')).toBe(-10);
    expect(hexToDec('-1A')).toBe(-26);
    expect(hexToDec('-FF')).toBe(-255);
    expect(hexToDec('-100')).toBe(-256);
  });

});
