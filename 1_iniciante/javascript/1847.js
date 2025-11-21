/**
 * @source Beecrowd
 * @problem 1847 - Welcome to the Winter!
 * @subject Ad hoc
 *
 * @author Letícia Cruz
 * @date 2021-01-15
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());

if ((A > B && B <= C) || (A == B && B < C)) {
    console.log(":)");
} else if (A < B && B < C && C - B >= B - A) {
    console.log(":)");
} else if (A > B && B > C && A - B > B - C) {
    console.log(":)");
} else {
    console.log(":(");
}
