import { checkCoupon } from '../challenges/challenge79';

describe('Testa a função checkCoupon', () => {
  test('Deve retornar true para um cupom válido no dia da expiração', () => {
    expect(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")).toBe(true);
  });

  test('Deve retornar false para um cupom com código incorreto', () => {
    expect(checkCoupon("123", "456", "July 9, 2015", "July 9, 2015")).toBe(false);
  });

  test('Deve retornar false para um cupom expirado', () => {
    expect(checkCoupon("123", "123", "July 9, 2015", "July 8, 2015")).toBe(false);
  });

  test('Deve retornar true para um cupom válido antes da expiração', () => {
    expect(checkCoupon("123", "123", "July 8, 2015", "July 9, 2015")).toBe(true);
  });

  test('Deve retornar false para um cupom usado após a data de expiração', () => {
    expect(checkCoupon("123", "123", "July 10, 2015", "July 9, 2015")).toBe(false);
  });
});
