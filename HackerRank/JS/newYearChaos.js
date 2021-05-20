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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Define bribes variable
    let bribes = 0

    let i
    let j
    // Loop through the queue 'q'
    for (i = 0; i < q.length; i++) {
      // If position is greater than 2 moves
      if (q[i] - (i + 1) > 2) {
        // return 'Too chaotic'
        console.log("Too chaotic")
      }
      // loop through queue position and compare to new postion
      for (j = Math.max(0, (q[i]) - 2); j < i; j++) {
        if (q[j] > q[i]) {
          // Add to bribes count
          bribes++
        }
      }
    }

    // return bribes
    console.log(bribes)

}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
