'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function countSwaps(a) {
  // Define count variable
  let count = 0

  // Loop through current array to swap numbers
  for (let i = 0; i < a.length; i++) {
      if (a[i] > a[i + 1]) {

      }
  // Add to count for each swap
  }

  // Output
  console.log("Array is sorted in " + count + " swaps.")
  // console.log("First Element: " + a[0])
  // console.log("Last Element: " + a[a.length - 1])

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
