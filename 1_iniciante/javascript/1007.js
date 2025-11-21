/**
 * @source Beecrowd
 * @problem 1007 - Difference
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-10-01
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());
let D = parseInt(lines.shift());

let diferenca = A * B - C * D;

console.log("DIFERENCA = " + diferenca);
