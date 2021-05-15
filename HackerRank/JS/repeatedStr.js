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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // If length of string 's' is 1 and contains a
  if (s.length === 1 && s.includes('a')) {
  // return n
  return n

  } else {

    // Define amountA
    let amountA = 0
    // Define amountInStr
    const amountInStr = s.replace(/[^a]/g, "").length

    // Find thw whole number of how many n can be divided by the length of the string
    const numberOfTimes = Math.floor(n / s.length)
    // Multiply this whole number by amountInStr and ass to amountA
    amountA += (numberOfTimes * amountInStr)
    // Use remainder to cut new string
    let remainderIndex = (n % s.length)
    // Define Substring
    let remainderStr = s.substring(0, remainderIndex)
    // Find amount in cut string
    // Add to amountA
    amountA += remainderStr.replace(/[^a]/g, "").length

    return amountA
  }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
