// Write a function which would
//     Multiply each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.
//
// Example:
// math(65, 60, 75, 55, 60, 63, 64, 45) === 86
export default function math(...numbers) {
  if (numbers.length == 0) {
    return 0;
  }
  const sumOfSquares = numbers
    .map(number => number * number)
    .reduce((acc, curr) => acc + curr, 0);
  const squareRoot = Math.sqrt(sumOfSquares);
  const result = Math.floor(squareRoot / 2);
  return result;
}
