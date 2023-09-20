// Data: 28/07/2023

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// ==> My solution:

export function isTriangle(a: number, b: number, c: number): boolean {
  if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && b + c > a) {
      return true; 
    }
  }
  return false; 
}

