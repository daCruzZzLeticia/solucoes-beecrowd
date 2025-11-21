/**
 * @source Beecrowd
 * @problem 1008 - Salary
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-10-01
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var numero = parseInt(lines.shift());
var horas = parseInt(lines.shift());
var salariohoras = parseFloat(lines.shift());

var salariototal = horas * salariohoras;

console.log("NUMBER = " + numero);
console.log("SALARY = U$ " + salariototal.toFixed(2));
