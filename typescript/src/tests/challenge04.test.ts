import { DNAtoRNA } from "../challenges/challenge04";

describe('DNAtoRNA', () => {

  it('deve substituir todos os "T" por "U" no DNA', () => {
    expect(DNAtoRNA('GCAT')).toEqual('GCAU');
    expect(DNAtoRNA('ATGCTTGGT')).toEqual('AUGCUUGGU');
    expect(DNAtoRNA('GGTCGC')).toEqual('GGUCGC');
  });
});
