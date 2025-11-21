/**
 * @source Beecrowd
 * @problem 1001 - Extremely Basic
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-03-16
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

console.log("X = " + (a + b));
