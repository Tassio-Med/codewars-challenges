// Data: 07/07/2023

// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


// ==> My Solution

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  let count = 0;
  arrayOfSheep.forEach(function(sheep) {
    if(sheep === true) {
      count ++
    } 
  });
  
  return count;
}