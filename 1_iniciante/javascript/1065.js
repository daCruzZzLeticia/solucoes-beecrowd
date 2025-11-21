/**
 * @source Beecrowd
 * @problem 1065 - Even Between five Numbers
 * @subject Repetition
 *
 * @author Letícia Cruz
 * @date 2020-12-01
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let cont = 0;
for (let i = 0; i < 5; i++) {
    let num = parseInt(lines.shift());
    if (num % 2 === 0) {
        cont++;
    }
}

console.log(cont + " valores pares");
