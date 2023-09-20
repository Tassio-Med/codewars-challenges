// Data: 21/08/2023

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]


// ==> My solution:

export function capitals (word: string): number[] {
	// Write your code here
  const allIndex = word.split("")
    .map((letter) => letter === letter.toLocaleUpperCase() ? word.indexOf(letter) : -1 )
    .filter((capital) => capital !== -1 );
  
  return allIndex;
}

