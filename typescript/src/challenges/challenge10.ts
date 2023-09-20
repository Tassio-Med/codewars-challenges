// Data: 17/07/2023

// MESSI GOALS FUNCTION
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

// ==> My solution:

export function goals (laLigaGoals:number, copaDelReyGoals:number, championsLeagueGoals:number): number {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}