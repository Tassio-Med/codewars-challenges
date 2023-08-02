// Data: 01/08/2023

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// ==> My solution:

export function solution(str: string, ending: string): boolean {
  return str.endsWith(ending);
}