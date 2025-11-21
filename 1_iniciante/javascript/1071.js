/**
 * @source Beecrowd
 * @problem 1071 - Sum of Consecutive Odd Numbers I
 * @subject Repetition
 *
 * @author Letícia Cruz
 * @date 2020-12-09
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let X = parseInt(lines.shift());
let Y = parseInt(lines.shift());

contY = Y;
contX = X;
soma = 0;

if (X > Y) {
    if (Y % 2 !== 0) {
        for (let i = Y; i < X - 2; i += 2) {
            contY += 2;
            soma += contY;
        }
    } else {
        contY++;
        soma += contY;
        for (let i = Y + 1; i < X - 2; i += 2) {
            contY += 2;
            soma += contY;
        }
    }
} else if (Y > X) {
    if (X % 2 !== 0) {
        for (let i = X; i < Y - 2; i += 2) {
            contX += 2;
            soma += contX;
        }
    } else {
        contX++;
        soma += contX;
        for (let i = X + 1; i < Y - 2; i += 2) {
            contX += 2;
            soma += contX;
        }
    }
}
console.log(soma);
