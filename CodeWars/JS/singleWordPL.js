function pigLatin(string){
  // Add to each return (except null if statement) to convert the string to all lowercase

  // if string contains any non-alpha characters
    // return null

  // if string contains no vowels
    // return "ay"

  // if string starts with a vowel
    // return string + "way"

  // if starts with a constant
    // split string at first vowel and add all constants before to the end
    // return modified string + "ay"
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
