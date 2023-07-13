// Data: 13/07/2023

// DESCRIPTION

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.


// ==> My solution:

export const otherAngle = (a: number, b: number): number => {
  return 180 - (a + b);
}