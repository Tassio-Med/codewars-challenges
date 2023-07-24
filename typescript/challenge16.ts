// Data: 24/07/2023

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// -> All numbers are valid Int32, no need to validate them.
// -> There will always be at least one number in the input string.
// --> Output string must be two numbers separated by a single space, and highest number is first.

// ==> My solution:

export class Kata {
  static highAndLow(numbers: string): string {
    // throw new NotImplementedException() ?
    // No, wait, this is TypeScript.
    const convertToNumbers = numbers.split(" ").map(Number);
    const maxValue = Math.max(...convertToNumbers);
    const minValue = Math.min(...convertToNumbers);
    return `${maxValue} ${minValue}`;
  }
}


// -> Outra opção que encontrei na internet e poderia ser usada:

// export class Kata {
//   static highAndLow(numbers: string): string {    
//     const numberList = numbers.split(' ').map(Number);   
//     return `${Math.max(...numberList)} ${Math.min(...numberList)}`;
//   }
// }