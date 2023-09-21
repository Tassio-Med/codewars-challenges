// Data: 21/09/2023

// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].


// ==> My solution:

export function flattenAndSort(inputArray: number[][]): number[] {
  const newArray: number[] = [];
  inputArray.forEach((arrayElement) => {
    if(arrayElement.length > 0) {
      arrayElement.forEach((num) => newArray.push(num));
    }
  });
  return newArray.sort((a, b) => a - b);
}