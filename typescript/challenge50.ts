// Data: 11/09/2023

// DESCRIPTION:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// ==> My solution:

export const distinct = (a: number[]): number[] => {
  const unique: number[] = [];
  a.forEach((num: number) => {
    if(!unique.includes(num)){
      unique.push(num);
    }
  });
  return unique;
}


// --> OUTRA SOLUÇÃO INTERESSANTE:

// export const distinct = (a: number[]): number[] => {
//   return a.filter((e, i) => a.lastIndexOf(e) === i)
// }