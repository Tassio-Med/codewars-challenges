// Data: 07/07/2023

// Data: 07/07/2023

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1² + 2² + 2² = 9.

// ==> My solution:

export function squareSum(numbers: number[]): number {
  const newValues = numbers.map((elem) => elem ** 2);
  const sumArrayValues = newValues.reduce((acc: number, current: number) => acc + current, 0);
  
  return sumArrayValues;
}