function pigLatin(string){
  // convert string to lowercase
  string = string.toLowerCase()

  // if string contains any non-alpha characters return null
  if (!/[^a-zA-Z]/.test(string) === false) {
    return null

  // if string contains no vowels return string "ay"
  } else if (/[aeiou]/gi.test(string) === false) {
      return string + "ay"

  // if string starts with a vowel return string + "way"
  } else if (['a', 'e', 'i', 'o', 'u'].indexOf(string[0]) !== -1) {
      return string + "way"

  // split string at first vowel and add all constants before to the end + "ay"
  } else {
      const [addEnd, vowelBegin] = string.split(/([aeiou].*)/)
      return vowelBegin + addEnd + "ay"
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

// Alternate refractor

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
