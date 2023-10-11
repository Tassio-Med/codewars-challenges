import { get_age } from "../challenges/challenge72";

describe('get_age', () => {
  it('deve retornar a idade no tipo number', () => {
    expect(get_age("5 years old")).toEqual(5);
    expect(get_age("3 years old")).toEqual(3);
    expect(get_age("8 years old")).toEqual(8);
  });
});
