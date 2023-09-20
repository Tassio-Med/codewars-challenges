import { countSheeps } from "../challenges/challenge02";

describe('countSheeps', () => {
  it('conta o número de ovelhas presentes no array', () => {
    const arrayOfSheep = [
      true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  true, true,  true,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true
    ]; 
    
    const result = countSheeps(arrayOfSheep);

    expect(result).toBe(19);
  });

  it('retorna 0 se o array for vazio', () => {
    const arrayOfSheep = []; 

    const result = countSheeps(arrayOfSheep);

    expect(result).toBe(0);
  });

  it('retorna 0 se todos os elementos do array forem false', () => {
    const arrayOfSheep = [
      false, false, false, false,
      false, false, false, false,
      false, false, false, false,
      false, false, false, false,
      false, false, false, false
    ];

    const result = countSheeps(arrayOfSheep);

    expect(result).toBe(0);
  });
}); 