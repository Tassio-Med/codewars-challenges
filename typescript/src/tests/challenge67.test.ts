import { solution } from '../challenges/challenge67';

describe('solution', () => {
  it('deve retornar a string invertida', () => {
    expect(solution("samba")).toBe("abmas"); 
    expect(solution("Golias")).toBe("sailoG"); 
    expect(solution("garrafa")).toBe("afarrag"); 
    expect(solution("prédio")).toBe("oidérp"); 
  });
});