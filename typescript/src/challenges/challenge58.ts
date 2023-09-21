export function flattenAndSort(inputArray: number[][]): number[] {
  const newArray: number[] = [];
  inputArray.forEach((arrayElement) => {
    if(arrayElement.length > 0) {
      arrayElement.forEach((num) => newArray.push(num));
    }
  });
  return newArray.sort((a, b) => a - b);
}