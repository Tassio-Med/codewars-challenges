// Data: 21/09/2023

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]

export const digitize = (n: number): number[] => {
  const reverseArray = n.toString().split('').reverse().join('');
  return reverseArray.split('').map(Number);
};

// ---> UMA SOLUÇÃO MAIS SIMPLES DE UM DOS USUÁRIOS DO CODEWARS:

// export const digitize = (n: number): number[] => {
//   return [...n.toString()].map(Number).reverse();
// };