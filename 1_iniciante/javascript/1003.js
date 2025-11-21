/**
 * @source Beecrowd
 * @problem 1003 - Simple Sum
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-09-25
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var valores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

var soma = A + B;

console.log("SOMA = " + soma);
