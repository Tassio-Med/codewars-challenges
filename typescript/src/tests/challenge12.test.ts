import { removeChar } from '../challenges/challenge12';

describe('removeChar', () => {
  it('deve remover o primeiro e o último caractere de uma string', () => {
    expect(removeChar("jogador")).toBe("ogado"); 
    expect(removeChar("mesa")).toBe("es"); 
    expect(removeChar("grego")).toBe("reg"); 
  });
  it('deve remover o primeiro e o último caractere de uma string com letras maiúsculas', () => {
    expect(removeChar("TÊNIS")).toBe("ÊNI"); 
    expect(removeChar("CARREGADOR")).toBe("ARREGADO"); 
    expect(removeChar("LIVRO")).toBe("IVR"); 
  });
});