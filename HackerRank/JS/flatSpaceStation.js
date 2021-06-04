'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {

  // Build out an array of numbers starting with 0 based on the number of cities (n)
  // let spaceStat = new Array(n).fill(null).map((_, i) => i)

  // Define array to be used for distance of each city to a space station
  let distStat = []
  c.sort((a, b) => a - b)
  // If n is equal to c's array length
  if (n === c.length) {
    return 0
  } else {
    for (let i = 0; i < c.length - 1; i++) {
      const dist = Math.floor(Math.abs(c[i + 1] - c[i]) / 2)
      distStat.push(dist)
    }
  }
  // return 0
  // Otherwise
  // Loop through the created amount of cities array
  // Check cities with distance to each of the space stations cities array (c)
  // Use the lowest and and to distance array

  // return the max number in the distance array
  // Possibly need to console.log the max distance number to properly check tests
  return Math.max(...distStat)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = flatlandSpaceStations(n, c);

    ws.write(result + "\n");

    ws.end();
}
