// Data: 27/05/2024

/*
Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

// ==> My solution:

export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
  if (enteredCode !== correctCode) { return false; }

  const current = new Date(currentDate);
  const expiration = new Date(expirationDate);

  return current <= expiration;
}

// ==> OUTRAS ALTERNATIVAS DE RESPOSTA:

/*
export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}
*/

/*
export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
  let cDate = new Date(currentDate);
  let expDate = new Date(expirationDate);
  return ((enteredCode === correctCode) && (cDate <= expDate)) ? true : false
}
*/