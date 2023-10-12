import { makeUpperCase } from "../challenges/challenge17";

describe('makeUpperCase', () => {
  it('deve converter uma string em letras maiúsculas', () => {
    expect(makeUpperCase('hello, world')).toEqual('HELLO, WORLD');
  });

  it('deve manter uma string em letras maiúsculas inalterada', () => {
    expect(makeUpperCase('UPPERCASE STRING')).toEqual('UPPERCASE STRING');
  });

  it('deve converter uma string vazia em uma string vazia', () => {
    expect(makeUpperCase('')).toEqual('');
  });

  it('deve converter acentos e caracteres especiais em letras maiúsculas', () => {
    expect(makeUpperCase('áéíóúçãõ')).toEqual('ÁÉÍÓÚÇÃÕ');
  });
});