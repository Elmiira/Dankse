// Your task is to create a wave pattern out of a string.
//
// Rules:
// 1. The input will always be lower case string.
// 2. Ignore whitespace.
//
// Examples:
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// wave (" h e y ") => [" H e y ", " h E y ", " h e Y "]
// wave ("") => []
export default function wave(str) {
  const waveList = [];
  const letterList = str.toUpperCase().split('');
  for (let index = 0; index < str.length; ++index) {
    waveList.push(
      str.substr(0, index) + letterList[index] + str.substr(index + 1),
    );
  }
  return waveList;
}
