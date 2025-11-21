/**
 * @source Beecrowd
 * @problem 1018 - Banknotes
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-10-02
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let valor = parseFloat(lines.shift());

let cem = parseInt(valor / 100);
let cinquenta = parseInt((valor % 100) / 50);
let vinte = parseInt(((valor % 100) % 50) / 20);
let dez = parseInt((((valor % 100) % 50) % 20) / 10);
let cinco = parseInt(((((valor % 100) % 50) % 20) % 10) / 5);
let dois = parseInt((((((valor % 100) % 50) % 20) % 10) % 5) / 2);
let um = parseInt((((((valor % 100) % 50) % 20) % 10) % 5) % 2);

console.log(valor);
console.log(cem + " nota(s) de R$ 100,00");
console.log(cinquenta + " nota(s) de R$ 50,00");
console.log(vinte + " nota(s) de R$ 20,00");
console.log(dez + " nota(s) de R$ 10,00");
console.log(cinco + " nota(s) de R$ 5,00");
console.log(dois + " nota(s) de R$ 2,00");
console.log(um + " nota(s) de R$ 1,00");
