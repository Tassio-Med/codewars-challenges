// Data: 13/09/2023

// DESCRIPTION:

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// ==> My solution:

export const findOdd = (xs: number[]): number => {
  const occurs = xs.reduce((acc: Record<number, number>, curr: number) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const odd = Object.keys(occurs).map(Number).find((key: number) => occurs[key] % 2 === 1);
  return odd !== undefined ? odd : -1;
};

// --> OUTRA SOLUÇÃO INTERESSANTE:

// export const findOdd = (xs: number[]): number => {
//   // happy coding!
//   return xs.find(a => xs.filter(b => b === a).length % 2 === 1) || 0;
// };