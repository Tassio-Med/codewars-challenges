// Data: 06/10/2023

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// ==> My solution:

export const longest = (s1: string, s2: string): string => {
  let stringConcat = s1.concat(s2);
  let unique: string[] = [];

  stringConcat.split('').forEach(element => {
    if(!unique.includes(element)){
      unique.push(element);
    }
  });

  return unique.sort().join('');
}

// ==> OUTRAS ALTERNATIVAS DE RESPOSTA:

// export const longest = (s1: string, s2: string): string => {
//   const stringConcat = s1.concat(s2);
//   const unique = [...new Set(stringConcat)];

//   const result = unique.sort().join('');

//   return result;
// }

// export const longest = (s1: string, s2: string): string =>
//   [...new Set([...s1, ...s2])].sort().join("");