/**
 * @source Beecrowd
 * @problem 1002 - Area of a Circle
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-09-24
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var PI = 3.14159;
var raio = parseFloat(input);

var area = PI * Math.pow(raio, 2);

console.log("A=" + area.toFixed(4));
