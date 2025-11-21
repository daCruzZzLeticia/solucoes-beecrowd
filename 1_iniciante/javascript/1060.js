/**
 * @source Beecrowd
 * @problem 1060 - Positive Numbers
 * @subject Repetition
 *
 * @author Letícia Cruz
 * @date 2020-12-01
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let cont = 0;
for (let i = 0; i < 6; i++) {
    let num = parseFloat(lines.shift());
    if (num > 0) {
        cont++;
    }
}

console.log(cont + " valores positivos");
