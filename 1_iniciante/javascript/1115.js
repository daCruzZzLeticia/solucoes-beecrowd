/**
 * @source Beecrowd
 * @problem 1115 - Quadrant
 * @subject Repetition
 *
 * @author Letícia Cruz
 * @date 2021-01-09
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let x = 1;
let y = 1;

while (x !== 0 || y !== 0) {
    let pulalinha = lines.shift().split(" ");
    x = parseInt(pulalinha.shift());
    y = parseInt(pulalinha.shift());
    if (x > 0 && y > 0) {
        console.log("primeiro");
    } else if (x < 0 && y > 0) {
        console.log("segundo");
    } else if (x < 0 && y < 0) {
        console.log("terceiro");
    } else if (x > 0 && y < 0) {
        console.log("quarto");
    }
}
