// Data: 12/10/2023

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni" -----	"Patron Tequila"
// "School Counselor" ----- "Anything with Alcohol"
// "Programmer"	----- "Hipster Craft Beer"
// "Bike Gang Member"	----- "Moonshine"
// "Politician"	----- "Your tax dollars"
// "Rapper"	----- "Cristal"
// anything else	----- "Beer"

// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// ==> My solution:

export function getDrinkByProfession(profession:string): string{
  let drink = "";

  switch (profession.toLowerCase()) {
    case "jabroni":
      drink = "Patron Tequila";
      break;

    case "school counselor":
      drink = "Anything with Alcohol";
      break;

    case "programmer":
      drink = "Hipster Craft Beer";
      break;

    case "bike gang member":
      drink = "Moonshine";
      break;

    case "politician":
      drink = "Your tax dollars";
      break;

    case "rapper":
      drink = "Cristal";
      break;
  
    default:
      drink = "Beer";
      break;
  }

  return drink;
}


// ==> UMA SOLUÇÃO INTERESSANTE DE OUTRO USUÁRIO DO CODEWARS:

// const drinks = {
//   "jabroni": "Patron Tequila",
//   "school counselor": "Anything with Alcohol",
//   "programmer": "Hipster Craft Beer",
//   "bike gang member": "Moonshine",
//   "politician": "Your tax dollars",
//   "rapper": "Cristal"
// }

// export function getDrinkByProfession(profession:string){
//   return drinks[profession.toLowerCase()] || "Beer";
// }