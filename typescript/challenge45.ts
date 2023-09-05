// Data: 05/08/2023

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// ==> My solution:

export function maps(x: number[]): number[]{
  return x.map(elem => elem * 2);
}