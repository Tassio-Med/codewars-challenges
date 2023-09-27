import { booleanToString } from '../challenges/challenge08';

describe('booleanToString', () => {
  it('deve retornar "true" se o parâmetro for um booleano true e "false" se o parâmetro for um booleano false', () => {
    expect(booleanToString(true)).toBe("true"); 
    expect(booleanToString(false)).toBe("false"); 
  });
});
