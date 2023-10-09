// Data: 09/10/2023

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// For C: The result is freed.

// ==> My solution:

export function orderWeight(strng: string): string {
  const separated = strng.split(" ").map((num) => ({
    original: num,
    weight: num.split("").reduce((acc, digit) => acc + Number(digit), 0),
  }));

  separated.sort((a, b) => {
    if (a.weight === b.weight) {
      return a.original.localeCompare(b.original);
    }
    return a.weight - b.weight;
  });

  const orderedNumbers = separated.map((item) => item.original);
  return orderedNumbers.join(" ");
}

