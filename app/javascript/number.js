// Write a function that takes the average of an array of number and returns the nearest whole number.
//
// Examples:
// number([1, 2]) => 2
// number([2, 4]) => 3
// number([23, 18, 1, 1, 1, 1]) => 8
// number([1, 2, 3, 4, 5]) => 3

export default function number(numbers) {
  if (numbers == undefined) {
    return 0;
  }
  if (numbers.length == 0) {
    return 0;
  }
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const avg = Math.round(sum / numbers.length);
  return avg;
}
