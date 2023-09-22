import { findNeedle } from "../challenges/challenge05";

describe('findNeedle', () => {
  it('deve encontrar o index da string correntamente', () => {
    expect(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))
      .toBe("found the needle at position 5");
    expect(findNeedle(["hay", "junk", "needle", "hay", "hay", "moreJunk", "randomJunk"]))
      .toBe("found the needle at position 2");
    expect(findNeedle(["needle", "hay", "junk", "hay", "hay", "moreJunk", "randomJunk"]))
      .toBe("found the needle at position 0");
  });
});





