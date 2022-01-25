function pigLatin(string){

  // if string contains any non-alpha characters return null
  if (!/[^a-zA-Z]/.test(string) === false) {
    return null
  } else {
    // convert string to lowercase
    const lowerString = string.toLowerCase()
    // const regExp = /[aeiou]/gi
    // if string contains no vowels return string "ay"
    // Test works
    if (/[aeiou]/gi.test(lowerString) === false) {
      return lowerString + "ay"

    // if string starts with a vowel return string + "way"
    // Test works
  } else if (['a', 'e', 'i', 'o', 'u'].indexOf(lowerString[0]) !== -1) {
      return lowerString + "way"

    // if starts with a constant return modified string + "ay"
    // Unfinished
  } else {  // split string at first vowel and add all constants before to the end
      const [addEnd, vowelBegin] = lowerString.split(/([aeiou].*)/)
      return vowelBegin + addEnd + "ay"
    }
  }
}

// Tests:
//
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
//
// describe("Sample Tests", () => {
//   it("Test", () => {
//     assert.strictEqual(pigLatin("map"), "apmay");
//     assert.strictEqual(pigLatin("egg"), "eggway");
//     assert.strictEqual(pigLatin("tes3t5"), null);
//   });
// });

// Refrectored code

// function pigLatin(string) {
//   string = string.toLowerCase()
//   if (string.search(/[^a-z]/)!=-1) return null
//   pos = string.search(/[aeiou]/)
//   if (pos === -1) return string + "ay"
//   if (pos === 0) return string + "way"
//   else return string.slice(pos,string.length)+string.slice(0,pos) + "ay"
// }

// Solutions to review which are shorter/simplify further

// function pigLatin(s){
//   s=s.toLowerCase();
//   return /[^a-z]/.test(s) ? null : /^[aeiou]/.test(s) ? s+"way" : s.replace(/^[^aeiou]+/,"")+s.match(/^[^aeiou]+/)+"ay";
// }

// const pigLatin = string =>
//   /[^a-z]/i.test(string) ? null : string.toLowerCase().replace(/(^[^aeiou]*)(\w*$)/, (_, $1, $2) => $2 + ($1 || `w`) + `ay`)
