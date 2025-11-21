/**
 * @source Beecrowd
 * @problem 1020 - Age in Days
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-10-15
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let totaldias = parseInt(lines.shift());

let ANOS = parseInt(totaldias / 365);
let MES = parseInt((totaldias % 365) / 30);
let DIAS = parseInt((totaldias % 365) % 30);

console.log(ANOS + " ano(s)");
console.log(MES + " mes(es)");
console.log(DIAS + " dia(s)");
