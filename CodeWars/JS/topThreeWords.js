function topThreeWords(text) {
  // Note any other characters besides and apostrophe should be treated as white space

  // Possibly separate text into string of words by using split on spaces,
  // or any character that is not an apostrophe

  // Words containing only apostrophes are not words and should not be recognized

  // if the text contains no words
  // return an empty array

  // if text is fewer than three words return top words

  // Loop through text comparing a word to find matches of the same
  // If a match is found
  // Add one to the count and and the word to the matchingWords array
  // Then add the count number to the countArray to match the indicy of the word
  // Find the index of the highest 3 numbers in the count array
  // Use that indicies to take the words from matchingWords and push them to the topThree array
  // return the topThree array
}

// Tests

// describe("Tests", () => {
//   it("test", () => {
// Test.assertDeepEquals(topThreeWords("a a a  b  c c  d d d d  e e e e e"), ['e','d','a'])
//
// Test.assertDeepEquals(topThreeWords("a a c b b"), ['a','b','c'])
//
// Test.assertDeepEquals(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),['e','ddd','aa'])
//
// Test.assertDeepEquals(topThreeWords("  //wont won't won't "), ["won't", "wont"])
//
// Test.assertDeepEquals(topThreeWords("  , e   .. "), ["e"])
//
// Test.assertDeepEquals(topThreeWords("  ...  "), [])
//
// Test.assertDeepEquals(topThreeWords("  '  "), [])
//
// Test.assertDeepEquals(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.`), ['a','of','on'])
// });
// });
