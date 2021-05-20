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
    // Define the variable to be counted and set at zero
    let swaps = 0

    // Define 'i' for loop
    // let i = 0

    // Loop through array
    for (let i = 0; i < arr.length; i++) {
      // While current index is not in the correct position
      while (arr[i] !== i + 1) {
        // Assign element located out of order, assign it tempSpot
        let tempSpot = arr[i]
        // Move element to correct spot
        arr[i] = arr[tempSpot - 1]
        arr[tempSpot - 1] = tempSpot
        // Add to swap count
        swaps++
      }
    }

    // return the number of swaps
    return swaps

    // Basic function to test
    // As thought, this sorts without without swaps, resulting in lower than intended output in most cases
    // arr.sort((a, b) => {
    //     if (a > b) {
    //         swaps++
    //         return a - b
    //     } else {}
    // })
    //
    // return swaps

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
