// Data: 29/08/2023

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// ==> My solution:

export const high = (str: string): string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const separated = alphabet.split('');

  const words = str.split(' '); 
  const totalPoints = words.map((word) => {
    let sumPoints = 0;
    for (const letter of word) {
      sumPoints += separated.indexOf(letter) + 1;
    }
    return sumPoints;
  });

  const highestPoint = Math.max(...totalPoints);
  const highestPointIndex = totalPoints.indexOf(highestPoint);

  return words[highestPointIndex];
}

console.log(high('man i need a taxi up to ubud'));