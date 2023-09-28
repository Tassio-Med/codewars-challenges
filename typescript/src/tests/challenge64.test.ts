import { reverseWords } from '../challenges/challenge64';

describe('reverseWords', () => {
  it('cada palavra no inverso', () => {
    expect(reverseWords("Amanda Portela")).toBe("adnamA aletroP"); 
    expect(reverseWords("Almoço bem feito, na hora!")).toBe("oçomlA meb ,otief an !aroh"); 
    expect(reverseWords("PaRa qUem; é?.")).toBe("aRaP ;meUq .?é"); 
  });
});
