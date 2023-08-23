// Data: 23/08/2023

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// ==> My solution:

export function findShort(s: string): number {
  const separate = s.split(" ").map((word) => word.length);
  return Math.min(...separate); 
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));