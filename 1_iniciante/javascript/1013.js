/**
 * @source Beecrowd
 * @problem 1013 - The Greatest
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-10-01
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let linhaUnica = lines.shift();
let fragmento = linhaUnica.split(" ");

let A = parseInt(fragmento.shift());
let B = parseInt(fragmento.shift());
let C = parseInt(fragmento.shift());

let maiorAB = (A + B + Math.abs(A - B)) / 2;
let maior = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

console.log(maior + " eh o maior");
