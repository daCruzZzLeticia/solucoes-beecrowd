/**
 * @source Beecrowd
 * @problem 1045 - Triangle Types
 * @subject Selection
 *
 * @author Letícia Cruz
 * @date 2020-11-13
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

if (A < B) {
    var aux = A;
    A = B;
    B = aux;
}
if (A < C) {
    var aux = A;
    A = C;
    C = aux;
}
if (B < C) {
    let aux = B;
    B = C;
    C = aux;
}

let A2 = A * A;
let B2 = B * B;
let C2 = C * C;

if (A >= B + C) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if (A2 === B2 + C2) {
        console.log("TRIANGULO RETANGULO");
    }
    if (A2 > B2 + C2) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (A2 < B2 + C2) {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (A === B && A === C) {
        console.log("TRIANGULO EQUILATERO");
    }
    if (A === B && A != C) {
        console.log("TRIANGULO ISOSCELES");
    }
    if (B === C && B != A) {
        console.log("TRIANGULO ISOSCELES");
    }
}
if (A === C && A != B) {
    console.log("TRIANGULO ISOSCELES");
}
