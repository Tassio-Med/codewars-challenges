// Data: 04/10/2023

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// ==> My solution:

export function solution(str: string): string {
  return str.split('').reverse().join('');
}
