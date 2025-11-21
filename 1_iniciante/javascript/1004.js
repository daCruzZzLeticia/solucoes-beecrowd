/**
 * @source Beecrowd
 * @problem 1004 - Simple Product
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-09-25
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var valores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

var PROD = A * B;

console.log("PROD = " + PROD);
