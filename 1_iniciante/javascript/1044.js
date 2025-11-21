/**
 * @source Beecrowd
 * @problem 1044 - Multiples
 * @subject Selection
 *
 * @author Letícia Cruz
 * @date 2020-11-08
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

if (B % A === 0 || A % B === 0) {
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
}
