'use strict';

const fs = require('fs');

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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // define variable for number of pairs
    let numberPairs = 0
    // define sorted array
    let sortedPairs = arr.sort((a,b) => a - b )
    // loop through array ar
    for (i = 0; i < n - 1; i++) {
      // find how many of one number in the array there is
      // by looping through sortedPairs array
      if (sortedPairs[i] === sortedPairs[i + 1]) {
        // add to numberPairs
        numberPairs++
        // return to loop
        i += 1
      }
    }
    // return numberPairs
    return numberPairs


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
