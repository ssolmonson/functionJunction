function pigLatin(string){

  // if string contains any non-alpha characters return null
  if (!/[^a-zA-Z]/.test(string) === false) {
    return null
  } else {
    // convert string to lowercase
    const lowerString = string.toLowerCase

    // if string contains no vowels return string "ay"
    if (lowerString.match(/[aeiou]/gi).length === 0) {
      return lowerString + "ay"

    // if string starts with a vowel return string + "way"
  } else if ('a', 'e', 'i', 'o', 'u'].indexOf(s[0].toLowerCase()) !== -1) {
      return lowerString + "way"

    // if starts with a constant return modified string + "ay"
  } else {  // split string at first vowel and add all constants before to the end
      return lowerString + "ayyyy"
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
