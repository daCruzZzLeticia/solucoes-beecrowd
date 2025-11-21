/**
 * @source Beecrowd
 * @problem 1017 - Fuel Spent
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-10-02
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let T = parseInt(lines.shift());
let V = parseInt(lines.shift());
let P = T * V;
let G = P / 12;

console.log(G.toFixed(3));
