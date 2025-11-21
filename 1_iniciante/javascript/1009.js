/**
 * @source Beecrowd
 * @problem 1009 - Salary with Bonus
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-10-01
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let nome = lines.shift();
let salariofixo = parseFloat(lines.shift());
let vendames = parseFloat(lines.shift());

let vendbonus = (vendames * 15) / 100;
let final = vendbonus + salariofixo;

console.log("TOTAL = R$ " + final.toFixed(2));
