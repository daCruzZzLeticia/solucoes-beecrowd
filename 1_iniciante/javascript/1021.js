/**
 * @source Beecrowd
 * @problem 1021 - Banknotes and Coins
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-10-15
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

let decimal = valor - parseInt(valor);
decimal = parseInt(decimal * 100);

let mcinquenta = parseInt(decimal / 50);
let mvinte = parseInt((decimal % 50) / 25);
let mdez = parseInt(((decimal % 50) % 25) / 10);
let mcinco = parseInt((((decimal % 50) % 25) % 10) / 5);
let mum = parseInt((((decimal % 50) % 25) % 10) % 5);

console.log("NOTAS:");
console.log(cem + " nota(s) de R$ 100.00");
console.log(cinquenta + " nota(s) de R$ 50.00");
console.log(vinte + " nota(s) de R$ 20.00");
console.log(dez + " nota(s) de R$ 10.00");
console.log(cinco + " nota(s) de R$ 5.00");
console.log(dois + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(um + " moeda(s) de R$ 1.00");
console.log(mcinquenta + " moeda(s) de R$ 0.50");
console.log(mvinte + " moeda(s) de R$ 0.25");
console.log(mdez + " moeda(s) de R$ 0.10");
console.log(mcinco + " moeda(s) de R$ 0.05");
console.log(mum + " moeda(s) de R$ 0.01");
