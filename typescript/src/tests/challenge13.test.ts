import { enough } from '../challenges/challenge13';

describe('enough', () => {
  it('deve retornar 0 quando houver espaço para todos os passageiros', () => {
    expect(enough(10, 5, 5)).toBe(0);
    expect(enough(100, 60, 40)).toBe(0);
  });

  it('deve retornar o número de passageiros que não podem entrar quando o ônibus estiver cheio', () => {
    expect(enough(10, 5, 7)).toBe(2);
    expect(enough(100, 60, 50)).toBe(10);
  });

  it('deve eretornar 0 quando o ônibus estiver vazio', () => {
    expect(enough(0, 0, 0)).toBe(0);
  });

  it('deve retornar 0 quando não houver passageiros esperando', () => {
    expect(enough(10, 10, 0)).toBe(0);
    expect(enough(100, 100, 0)).toBe(0);
  });
});