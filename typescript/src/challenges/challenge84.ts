// Data: 10/06/2024

/*

Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

*/

// ==> My Solution:

export function rowWeights(arr: number[]) {
  let firstTeam = 0;
  let secondTeam = 0;

  arr.forEach((num, index) => {
    index % 2 === 0 ? firstTeam += num : secondTeam += num });
  return [firstTeam, secondTeam];
}

// ==> OUTRAS ALTERNATIVAS DE RESPOSTA:

/* 
export function rowWeights(arr: number[]): [number, number] {
  let even: number = arr.reduce((sum, x, i) => sum + (!(i % 2)? x: 0), 0);
  let odd: number = arr.reduce((sum, x, i) => sum + (i % 2? x: 0), 0);
  return [even, odd]
}
 */
