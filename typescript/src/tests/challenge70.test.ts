import { orderWeight } from "../challenges/challenge70";

describe('orderWight', () => {
  it('deve ordenar números com base em seus pesos', () => {
    const input = "56 65 74 100 99 68 86 180 90";
    const expectedOutput = "100 180 90 56 65 74 68 86 99";
    const result = orderWeight(input);
    expect(result).toEqual(expectedOutput);
  });
  
  it('deve ordenar uma lista vazia', () => {
    expect(orderWeight("")).toEqual("");
  });
});


