// Data: 25/08/2023

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// ==> My solution:

export function doubleChar(str: string): string{
  const separate = str.split("").map((word) => word.repeat(2));
  return separate.join("");
}

console.log(doubleChar("Hello World"));