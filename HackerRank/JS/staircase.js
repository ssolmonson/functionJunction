'use strict';

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

// Complete the staircase function below.
function staircase(n) {
    let i = n
    let stairs = ' '
    // for (i = n; i > 0; i--) {
    //     while (i > 0) {
    //         stairs += '#'
    //         i--
    //     }
    // }
    while (i > 0) {
        stairs += '#'
        i--
    }
    return stairs
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
