/**
 * @source Beecrowd
 * @problem 1010 - Simple Calculate
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-10-01
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let linha1 = lines.shift();
let linha2 = lines.shift();

let valores1 = linha1.split(" ");
let valores2 = linha2.split(" ");

let cod1 = parseInt(valores1.shift());
let num1 = parseInt(valores1.shift());
let valor1 = parseFloat(valores1.shift());

let cod2 = parseInt(valores2.shift());
let num2 = parseInt(valores2.shift());
let valor2 = parseFloat(valores2.shift());

let pagar = num1 * valor1 + num2 * valor2;

console.log("VALOR A PAGAR: R$ " + pagar.toFixed(2));
