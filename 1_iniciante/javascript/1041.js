/**
 * @source Beecrowd
 * @problem 1041 - Coordinates of a Point
 * @subject Selection
 *
 * @author Letícia Cruz
 * @date 2020-11-03
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let X = parseFloat(lines.shift());
let Y = parseFloat(lines.shift());

if (X > 0 && Y > 0) {
    console.log("Q1");
} else if (X < 0 && Y > 0) {
    console.log("Q2");
} else if (X < 0 && Y < 0) {
    console.log("Q3");
} else if (X > 0 && Y < 0) {
    console.log("Q4");
} else if ((X === 0 && Y > 0) || Y < 0) {
    console.log("Eixo Y");
} else if ((Y === 0 && X > 0) || X < 0) {
    console.log("Eixo X");
} else {
    console.log("Origem");
}
