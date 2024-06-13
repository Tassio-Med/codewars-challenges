import { rowWeights } from '../challenges/challenge84';


describe('Testes para a função rowWeights', () => {
  test('Deve retornar [62, 27] para a entrada [13, 27, 49]', () => {
    expect(rowWeights([13, 27, 49])).toEqual([62, 27]);
  });

  test('Deve retornar [120, 140] para a entrada [50, 60, 70, 80]', () => {
    expect(rowWeights([50, 60, 70, 80])).toEqual([120, 140]);
  });

  test('Deve retornar [80, 0] para a entrada [80]', () => {
    expect(rowWeights([80])).toEqual([80, 0]);
  });

  test('Deve retornar [100, 50] para a entrada [100, 50]', () => {
    expect(rowWeights([100, 50])).toEqual([100, 50]);
  });

  test('Deve retornar [150, 90] para a entrada [40, 50, 70, 40]', () => {
    expect(rowWeights([40, 50, 70, 40])).toEqual([110, 90]);
  });

  test('Deve retornar [0, 0] para a entrada []', () => {
    expect(rowWeights([])).toEqual([0, 0]);
  });

  test('Deve retornar [300, 300] para a entrada [100, 100, 100, 100, 100, 100]', () => {
    expect(rowWeights([100, 100, 100, 100, 100, 100])).toEqual([300, 300]);
  });
});