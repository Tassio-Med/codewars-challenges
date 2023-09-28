// Data: 28/09/2023

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// ==> My solution:

export function reverseWords(str: string): string {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}