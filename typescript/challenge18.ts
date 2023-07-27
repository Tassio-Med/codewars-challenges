// Data: 26/07/2023

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// ==> My solution:

export function points(games: string[]): number {
  let win = 0;
  let tie = 0;

  games.forEach((match) => {
    const [x, y] = match.split(":");
    x > y ? win++ : x === y ? tie++ : 0;
  });

  return win * 3 + tie;
}

// --> SOLUÇÃO ALTERNATIVA QUE ACHEI INTERESSANTE

// export function points(games : string[]): number {
//   return games.reduce((totalPoints, game) => {
//     const [a, b] = game.split(':');
//     return totalPoints + (a > b ? 3 : a === b ? 1 : 0);
//   }, 0);
// }
