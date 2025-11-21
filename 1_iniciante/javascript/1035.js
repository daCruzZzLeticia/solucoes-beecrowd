/**
 * @source Beecrowd
 * @problem 1035 - Selection Test 1
 * @subject Selection
 *
 * @author Letícia Cruz
 * @date 2020-10-08
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());
let D = parseInt(lines.shift());

if (B > C && D > A && C + D > A + B && C >= 0 && D >= 0 && A % 2 === 0) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}
