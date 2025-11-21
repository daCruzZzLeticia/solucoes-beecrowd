/**
 * @source Beecrowd
 * @problem 1012 - Area
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-10-01
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let linhaUnica = lines.shift();
let fragmento = linhaUnica.split(" ");

let A = parseFloat(fragmento.shift());
let B = parseFloat(fragmento.shift());
let C = parseFloat(fragmento.shift());

let Atriangulo = (A * C) / 2.0;
let Acirculo = 3.14159 * Math.pow(C, 2);
let Atrapezio = ((A + B) * C) / 2.0;
let Aquadrado = B * B;
let Aretangulo = A * B;

console.log("TRIANGULO: " + Atriangulo.toFixed(3));
console.log("CIRCULO: " + Acirculo.toFixed(3));
console.log("TRAPEZIO: " + Atrapezio.toFixed(3));
console.log("QUADRADO: " + Aquadrado.toFixed(3));
console.log("RETANGULO: " + Aretangulo.toFixed(3));
