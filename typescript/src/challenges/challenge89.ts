// Data: 05/05/2026
/* 

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

// ==> My Solution:

export function sumTwoSmallestNumbers(numbers:Array<number>):number {  
  const sortNumbers = numbers.sort((a, b) => a - b);
  return sortNumbers[0] + sortNumbers[1];
}


// ==> OUTRAS ALTERNATIVAS DE RESPOSTA:

/* 
=> SEM MODIFICAR O ARRAY ORIGINAL

export function sumTwoSmallestNumbers(numbers: number[]): number {
  // Cria cópia e ordena
  const sorted = [...numbers].sort((a, b) => a - b);
  
  return sorted[0] + sorted[1];
}

 */
