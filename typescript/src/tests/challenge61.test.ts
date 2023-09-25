import { hoopCount } from "../challenges/challenge61";

describe('findNeedle', () => {
  it('deve encontrar o index da string correntamente', () => {
    expect(hoopCount(23)).toBe("Great, now move on to tricks");
    expect(hoopCount(10)).toBe("Great, now move on to tricks");
    expect(hoopCount(8)).toBe("Keep at it until you get it");
    expect(hoopCount(1)).toBe("Keep at it until you get it");
  });
});
