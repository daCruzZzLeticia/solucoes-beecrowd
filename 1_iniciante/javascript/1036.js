/**
 * @source Beecrowd
 * @problem 1036 - Bhaskara's Formula
 * @subject Selection
 *
 * @author Letícia Cruz
 * @date 2020-10-31
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

let D = B * B - 4 * A * C;

if (D < 0 || A === 0) {
    console.log("Impossivel calcular");
} else {
    let Rz1 = (-B + Math.sqrt(D)) / (2 * A);
    let Rz2 = (-B - Math.sqrt(D)) / (2 * A);

    console.log("R1 = " + Rz1.toFixed(5));
    console.log("R2 = " + Rz2.toFixed(5));
}
