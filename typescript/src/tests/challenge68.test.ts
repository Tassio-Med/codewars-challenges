import { printArray } from '../challenges/challenge68';

describe('printArray', () => {
  it('deve retornar um string', () => {
    expect(printArray(["b","a","b","á"])).toBe("b,a,b,á"); 
    expect(printArray(["l","u","p","a"])).toBe("l,u,p,a"); 
  });
  it('deve retornar uma string para um array de números', () => {
    expect(printArray([1, 10, 5, 9])).toBe("1,10,5,9"); 
    expect(printArray([30, 40, 50, 200])).toBe("30,40,50,200"); 
  });
  it('deve retornar uma string vazia se o array for vazio', () => {
    expect(printArray([])).toBe(""); 
  });
});