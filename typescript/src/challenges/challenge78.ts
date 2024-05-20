// Data: 20/05/2024

/* The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6] */

// ==> My solution:

export const getEvenNumbers = (numbersArray : number[]) : number[] => {
  return numbersArray.filter(num => num % 2 === 0);
}