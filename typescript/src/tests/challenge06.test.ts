import { otherAngle } from '../challenges/challenge06';

describe('Teste para a função otherAngle', () => {
  it('Deve retornar o terceiro ângulo do triângulo', () => {
    expect(otherAngle(45, 45)).toBe(90); 
    expect(otherAngle(60, 30)).toBe(90); 
    expect(otherAngle(90, 45)).toBe(45); 
  });
  
  it('Deve retornar 0 quando os ângulos somam 180', () => {
    expect(otherAngle(179, 1)).toBe(0);
    expect(otherAngle(0, 180)).toBe(0);
    expect(otherAngle(90, 90)).toBe(0);
  });
});
