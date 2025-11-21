/**
 * @source Beecrowd
 * @problem 1037 - Interval
 * @subject Selection
 *
 * @author Letícia Cruz
 * @date 2020-10-31
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let v = parseFloat(lines.shift());

if (v >= 0 && v <= 25) {
    console.log("Intervalo [0,25]");
} else if (v > 25 && v <= 50) {
    console.log("Intervalo (25,50]");
} else if (v > 50 && v <= 75) {
    console.log("Intervalo (50,75]");
} else if (v > 75 && v <= 100) {
    console.log("Intervalo (75,100]");
} else {
    console.log("Fora de intervalo");
}
