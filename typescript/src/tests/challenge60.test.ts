import { countSmileys } from "../challenges/challenge60";

describe('countSmileys', () => {
  it('deve contar o número de emojis corretamente', () => {
    expect(countSmileys([':D', ':~)', ';~D', ':)'])).toBe(4);
    expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3);
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  });

  it('deve retornar 0 caso o array seja vazio', () => {
    expect(countSmileys([])).toBe(0);
  });

  it('não deve contar emojis inválidos', () => {
    expect(countSmileys([';(', ':>', ':}', ':]'])).toBe(0);
  });
});





