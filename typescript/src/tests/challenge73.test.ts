import { getDrinkByProfession } from "../challenges/challenge73";

describe('getDrinkByProfession', () => {
  it('deve retornar "Patron Tequila" para a profissão "Jabroni"', () => {
    expect(getDrinkByProfession("Jabroni")).toBe("Patron Tequila");
  });

  it('deve retornar "Anything with Alcohol" para a profissão "School Counselor"', () => {
    expect(getDrinkByProfession("School Counselor")).toBe("Anything with Alcohol");
  });

  it('deve retornar "Hipster Craft Beer" para a profissão "Programmer"', () => {
    expect(getDrinkByProfession("Programmer")).toBe("Hipster Craft Beer");
  });

  it('deve retornar "Moonshine" para a profissão "Bike Gang Member"', () => {
    expect(getDrinkByProfession("Bike Gang Member")).toBe("Moonshine");
  });

  it('deve retornar "Your tax dollars" para a profissão "Politician"', () => {
    expect(getDrinkByProfession("Politician")).toBe("Your tax dollars");
  });

  it('deve retornar "Cristal" para a profissão "Rapper"', () => {
    expect(getDrinkByProfession("Rapper")).toBe("Cristal");
  });

  it('deve retornar "Beer" para qualquer outra profissão', () => {
    expect(getDrinkByProfession("Engenheiro")).toBe("Beer");
  });
});
