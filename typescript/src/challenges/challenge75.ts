// Data: 06/11/2023

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// ==> My solution:

export function between(a: number, b: number): number[] {
  const array: number[] = [];
  for (let i = a; i <= b; i++) {
    array.push(i);
  }

  return array;
}