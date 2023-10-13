// Data: 13/10/2023

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// ==> My solution:

export function areYouPlayingBanjo(name: string): string {
  return name[0] === "R" || name[0] === "r" ? `${name} plays banjo` : `${name} does not play banjo`;
}