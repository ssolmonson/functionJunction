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

// Complete the rotLeft function below.
function rotLeft(a, d) {
    let splitPoint = d
    // determine if d is greater than array length
    if (d > a.length) {
      // if greater divide d by length
      // using remainder as split point
      splitPoint = (d % a.length)
    }
    // split array into two arrays at position d
    //
    // let splitArr = a.slice(d)
    // let origArr = a.slice(0, d)
    // return splitArr.concat(origArr)
    //
    // simplified one line of above
    // const newArr = a.slice(splitPoint).concat(a.slice(0, splitPoint))
    return a.slice(splitPoint).concat(a.slice(0, splitPoint))
    // concat both arrays
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
