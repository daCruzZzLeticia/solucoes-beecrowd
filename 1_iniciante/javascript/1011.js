/**
 * @source Beecrowd
 * @problem 1011 - Sphere
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-10-01
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let PI = 3.14159;
let R = parseFloat(lines.shift());

let volume = (4 / 3) * PI * Math.pow(R, 3);

console.log("VOLUME = " + volume.toFixed(3));
