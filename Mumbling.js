// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
    let str_arr = s.split("");
    let res = [];
  for (let i = 0; i < str_arr.length; i++){
    let word = str_arr[i].repeat(i+1);
    let firstCapital = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    res.push(firstCapital);
  }
  let final_result = res.join("-");
  return final_result;
}

console.log(accum("RqaEzty"));