// Data: 27/09/2023

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// ==> My solution:

export function factorial(n: number) {
  let result = 1;
  if(n <= 1) result;
  
  for(let i = 1; i <= n; i++){
    result *= i;
  }
  return result;
}

// ===>> FUNÇÃO MAIS SIMPLES ENCONTRADA NO CODEWARS:

// export function factorial(n: number): number {
//   if (n <= 1) return 1;
//   return n * factorial(n-1)
// }