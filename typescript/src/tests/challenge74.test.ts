import { areYouPlayingBanjo } from "../challenges/challenge74";

describe('areYouPlayingBanjo', () => {
  it('deve deve tocar banjo se o nome começar com "R"', () => {
    expect(areYouPlayingBanjo('Rafael')).toBe('Rafael plays banjo');
    expect(areYouPlayingBanjo('Ronaldo')).toBe('Ronaldo plays banjo');
    expect(areYouPlayingBanjo('Robert')).toBe('Robert plays banjo');
  });
  
  it('deve deve tocar banjo se o nome começar com "r"', () => {
    expect(areYouPlayingBanjo('roberto')).toBe('roberto plays banjo');
    expect(areYouPlayingBanjo('rafaela')).toBe('rafaela plays banjo');
    expect(areYouPlayingBanjo('ramires')).toBe('ramires plays banjo');
  });
  
  it('nome que não começa com "R" ou "r não deve tocar banjo', () => {
    expect(areYouPlayingBanjo('Bob')).toBe('Bob does not play banjo');
    expect(areYouPlayingBanjo('Alfred')).toBe('Alfred does not play banjo');
    expect(areYouPlayingBanjo('Sandra')).toBe('Sandra does not play banjo');
  });
});
