// Data: 22/08/2023

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

// ==> My solution:

// export function warnTheSheep(queue: string[]): string {
//   const wolfIndex = queue.indexOf("wolf");
//   const message = queue.map((animal) => {
//     animal === 
//       ? `Oi! Sheep number ${wolfIndex + 1}! You are about to be eaten by a wolf!`
//       : "Pls go away and stop eating my sheep";
//   });
//   return message;
// }

export function warnTheSheep(queue: string[]): string {
  const wolfIndex = queue.indexOf('wolf');
  return wolfIndex === (queue.length -1) 
    ? 'Pls go away and stop eating my sheep' 
    : `Oi! Sheep number ${queue.length - wolfIndex - 1}! You are about to be eaten by a wolf!`
 }
