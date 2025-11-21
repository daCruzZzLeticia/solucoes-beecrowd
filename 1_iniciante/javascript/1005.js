/**
 * @source Beecrowd
 * @problem 1005 - Average 1
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-09-25
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var media = (A * 3.5 + B * 7.5) / 11.0;

console.log("MEDIA = " + media.toFixed(5));
