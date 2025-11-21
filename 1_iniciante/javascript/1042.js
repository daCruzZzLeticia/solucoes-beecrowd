/**
 * @source Beecrowd
 * @problem 1042 - Simple Sort
 * @subject Selection
 *
 * @author Letícia Cruz
 * @date 2020-11-08
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());

if (A < B && B < C) {
    console.log(A);
    console.log(B);
    console.log(C);
} else if (A < C && C < B) {
    console.log(A);
    console.log(C);
    console.log(B);
} else if (B < A && A < C) {
    console.log(B);
    console.log(A);
    console.log(C);
} else if (B < C && C < A) {
    console.log(B);
    console.log(C);
    console.log(A);
} else if (C < B && B < A) {
    console.log(C);
    console.log(B);
    console.log(A);
} else if (C < A && A < B) {
    console.log(C);
    console.log(A);
    console.log(B);
}

console.log();
console.log(A);
console.log(B);
console.log(C);
