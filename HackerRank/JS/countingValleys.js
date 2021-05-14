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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Define variable for elevation
    let elevation = 0
    // Define variable for valleys
    let valleys = 0

    // Convert path from string into array
    // And loop through array
    path.split('').forEach(level => {
      // Add an elevation if 'U'
      if (level === 'U') {
        ++elevation
      // Remove an elevation if 'D'
      } else {
        --elevation
      }
      // If 'U' and elevation is equal to zero

      if (level === 'U' && elevation === 0) {
        // Add to valleys
        ++valleys
      }
    })

    // Return valleys variable
    return valleys
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
