import { fakeBin } from "../challenges/challenge77"

describe('fakeBin', () => {
  it('deve substituir dígitos abaixo de 5 por "0" e dígitos acima de 5 por "1"', () => {
    expect(fakeBin('0123456789')).toBe('0000011111');

    expect(fakeBin('9876543210')).toBe('1111100000');
  });

  it('deve lidar com uma string vazia', () => {
    expect(fakeBin('')).toBe('');
  });
});