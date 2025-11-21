/**
 * @source Beecrowd
 * @problem 1070 - Six Odd Numbers
 * @subject Repetition
 *
 * @author Letícia Cruz
 * @date 2020-12-07
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let x = parseInt(lines.shift());

cont = 0;

if (x % 2 === 0) {
    console.log(x + 1);
    for (let i = 0; i < 5; i++) {
        cont = cont + 2;
        console.log(x + 1 + cont);
    }
} else {
    console.log(x);
    for (let i = 0; i < 5; i++) {
        cont = cont + 2;
        console.log(x + cont);
    }
}
