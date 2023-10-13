import { points } from "../challenges/challenge18";

describe('points', () => {
  it('deve retornar 0 pontos quando a equipe perde todas as partidas', () => {
    const resultados = ["0:1", "1:2", "2:3", "0:2", "1:3", "1:2", "0:4", "0:1", "2:3", "1:2"];
    expect(points(resultados)).toBe(0);
  });

  it('deve retornar 30 pontos quando a equipe vence todas as partidas', () => {
    const resultados = ["1:0", "2:0", "3:1", "2:1", "4:0", "3:0", "2:1", "1:0", "3:2", "4:1"];
    expect(points(resultados)).toBe(30);
  });

  it('deve retornar a pontuação correta quando a equipe empata ou vence algumas partidas', () => {
    const resultados = ["1:1", "2:2", "0:1", "3:3", "0:0", "1:1", "2:0", "1:0", "0:0", "2:1"];
    expect(points(resultados)).toBe(14);
  });
});





