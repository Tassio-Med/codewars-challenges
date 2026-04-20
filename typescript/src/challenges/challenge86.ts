// Data: 20/04/2026
/* 
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

// ==> My Solution:

export function multiplicationTable(size: number): number[][] {
  const table: number[][] = [];
  
  for (let i = 1; i <= size; i++) {
    const row: number[] = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  
  return table;
}


// ==> OUTRAS ALTERNATIVAS DE RESPOSTA:

/* 

export function multiplicationTable(size: number): number[][] {
  return Array.from({ length: size }, (_, i) => 
    Array.from({ length: size }, (_, j) => (i + 1) * (j + 1))
  );
}
 */
