// Write a function which checks if the same amount of 'd' and 'k' is in the string.
//
// Examples:
// same("ddkk") => true
// same("dkkdd") => false
// same("ddkKm") => true
// same("dmm") => false
// same("eSss") => true // when no 'd' and 'k' is present should return true
export default function same(str) {
  const lettersList = str.toLowerCase().split('');
  let kCounter = 0;
  let dCoutner = 0;
  lettersList.forEach(letter => {
    if (letter == 'k') {
      kCounter++;
    } else if (letter == 'd') {
      dCoutner++;
    }
  });
  return dCoutner == kCounter;
}
