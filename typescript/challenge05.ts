// Data: 13/07/2023

// DESCRIPTION:
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"


// ==> My solution:

export function findNeedle(haystack: any[]):string {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}