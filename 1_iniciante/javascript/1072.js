/**
 * @source Beecrowd
 * @problem 1072 - Interval 2
 * @subject Repetition
 *
 * @author Letícia Cruz
 * @date 2020-12-12
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let N = parseInt(lines.shift());

contin = 0;
contout = 0;

for (let i = 0; i < N; i++) {
    let X = parseInt(lines.shift());
    if (X >= 10 && X <= 20) {
        contin++;
    } else {
        contout++;
    }
}
console.log(contin + " in");
console.log(contout + " out");
