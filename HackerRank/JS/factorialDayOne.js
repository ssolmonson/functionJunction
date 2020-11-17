'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Written code:
function factorial (n) {
    // if less that zero, reject the value for n
    if (n < 0) {
        return -1
    }
    // if zero its factorial is one
    else if (n == 0) {
        return 1
    }
    // Call recursive function
    else {
        return (n * factorial(n - 1))
    }
}
