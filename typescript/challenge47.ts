// Data: 08/09/2023

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


// ==> My solution:

export function basicOp(operation: string, value1: number, value2: number): number {
  let result = 0;

  switch (operation) {
    case "+":
      result = value1 + value2;
      break;

    case "-":
      result = value1 - value2;
      break;

    case "*":
      result = value1 * value2;
      break;

    case "/":
      result = value1 / value2;
      break;
  
    default:
      console.log("Operador inesperado");
      break;
  }

  return result;
}