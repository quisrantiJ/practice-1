// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/550554fd08b86f84fe000a58

function inArray(array1,array2){
    let final_array = [];
    for(let i = 0; i < array1.length; i++){
      let search_string = array1[i];
      if((array2.filter(word => word.includes(search_string))).length > 0){
        final_array.push(search_string)  
      }
    }
    final_array.sort();
    return final_array;
  }
