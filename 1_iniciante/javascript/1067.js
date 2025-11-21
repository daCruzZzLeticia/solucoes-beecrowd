/**
 * @source Beecrowd
 * @problem 1067 - Odd Numbers
 * @subject Repetition
 *
 * @author Letícia Cruz
 * @date 2020-12-08
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let X = parseInt(lines.shift());

cont = 0;

if (X % 2 !== 0) {
    cont++;
    console.log(cont);
    for (let i = 1; i < X; i += 2) {
        cont += 2;
        console.log(cont);
    }
} else {
    cont++;
    console.log(cont);
    for (let i = 0; i < X - 2; i += 2) {
        cont += 2;
        console.log(cont);
    }
}
