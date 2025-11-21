/**
 * @source Beecrowd
 * @problem 1043 - Triangle
 * @subject Selection
 *
 * @author Letícia Cruz
 * @date 2020-11-04
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

if (A + B > C && B + C > A && C + A > B) {
    let Peri = A + B + C;
    console.log("Perimetro = " + Peri.toFixed(1));
} else {
    let Area = ((A + B) * C) / 2;
    console.log("Area = " + Area.toFixed(1));
}
