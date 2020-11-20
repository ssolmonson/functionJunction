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

function getLetter(s) {
    let letter;
    // Write your code here
    let char = s[1]
    switch(char) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            letter = 'A'
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            letter = 'B'
            break;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
            letter = 'C'
            break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            letter = 'D'
            break;
    }

    return letter;
}
