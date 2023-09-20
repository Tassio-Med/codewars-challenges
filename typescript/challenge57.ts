// Data: 20/09/2023

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// ==> My solution:

export function countSheep(num: number): string {
  const array: number[] = [];
  for(let x = 1; num >= x; x++){
    array.push(x);
  }
  return array.map((arrayNum) => array.length === 0 ? "" : `${arrayNum} sheep...`).join("");
}


// ==> UMA SOLUÇÃO MAIS SIMPLES DE OUTRO USUÁRIO DO CODEWARS:

// export function countSheep(num: number): string {
//   let out = '';
//   for (let i = 1; i <= num; i++) {
//     out += `${i} sheep...`;
//   }
//   return out;
// }