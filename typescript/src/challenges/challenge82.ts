// Data: 06/06/2024
/* 
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.
*/

// ==> My Solution:

export function multiTable(number: number): string {
  const arrayOfLines: string[] = [];
  for(let i = 1; i <= 10; i++){
    arrayOfLines.push(`${i} * ${number} = ${i * number}`);
  }
  return arrayOfLines.join('\n');
}


// ==> OUTRAS ALTERNATIVAS DE RESPOSTA:

/* 
export function multiTable(number:number):string {
   return Array.from({length: 10}, (_, i) => `${i + 1} * ${number} = ${number * (i + 1)}`).join('\n')
}
 */
