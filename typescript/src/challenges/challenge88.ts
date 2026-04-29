// Data: 29/04/2026

/* 
Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

Examples
If a = [1, 2] and b = [1], the result should be [2].
If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

*/

// ==> My Solution:

export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((element) => !b.includes(element));
}

// ==> OUTRAS ALTERNATIVAS DE RESPOSTA:

/* 
export function arrayDiff(a: number[], b: number[]): number[] {
  const setB = new Set(b);
  return a.filter(item => !setB.has(item));
}
 */
