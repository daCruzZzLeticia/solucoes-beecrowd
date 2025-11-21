/**
 * @source Beecrowd
 * @problem 1019 - Time Conversion
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-10-02
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let N = parseInt(lines.shift());

let H = parseInt(N / 3600);
let M = parseInt((N % 3600) / 60);
let S = parseInt((N % 3600) % 60);

console.log(H + ":" + M + ":" + S);
