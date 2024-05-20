import { getEvenNumbers } from '../challenges/challenge78';

describe('getEvenNumbers', () => {
  test('deve retornar um array com apenas números pares', () => {
    expect(getEvenNumbers([1, 2, 3, 6, 8, 10])).toEqual([2, 6, 8, 10]);
    expect(getEvenNumbers([1, 2])).toEqual([2]);
    expect(getEvenNumbers([12, 14, 15])).toEqual([12, 14]);
    expect(getEvenNumbers([13, 15])).toEqual([]);
    expect(getEvenNumbers([1, 3, 9])).toEqual([]);
  });

  test('deve lidar com arrays com todos os números pares', () => {
    expect(getEvenNumbers([2, 4, 6, 8, 10])).toEqual([2, 4, 6, 8, 10]);
  });

});

