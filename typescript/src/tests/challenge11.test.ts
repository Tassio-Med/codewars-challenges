import { greet } from '../challenges/challenge11';

describe('greet', () => {
  it('deve retornar a string "hello world!"', () => {
    expect(greet()).toBe("hello world!"); 
  });
});