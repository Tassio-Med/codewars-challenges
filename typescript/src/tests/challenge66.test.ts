import { move } from '../challenges/challenge66';

describe('move', () => {
  it('deve retornar a nova posição do jogador', () => {
    expect(move(5, 4)).toBe(13); 
    expect(move(9, 6)).toBe(21); 
    expect(move(0, 10)).toBe(20); 
  });
});