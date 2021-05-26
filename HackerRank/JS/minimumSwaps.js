'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  // Define count variable
  let count = 0

  // Loop through current array to swap numbers
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
        if (a[j] > a[j + 1]) {
            let tmp = a[j]
            a[j] = a[j + 1]
            a[j + 1] = tmp
            // Add to count for each swap
            count++
        }
    }
  }

  // Output
  console.log("Array is sorted in " + count + " swaps.")
  console.log("First Element: " + a[0])
  console.log("Last Element: " + a[a.length - 1])

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
