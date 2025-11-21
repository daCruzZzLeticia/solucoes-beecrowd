/**
 * @source Beecrowd
 * @problem 1064 - Positives and Average
 * @subject Repetition
 *
 * @author Letícia Cruz
 * @date 2020-12-01
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let soma = 0;
let cont = 0;
for (let i = 0; i < 6; i++) {
    let num = parseFloat(lines.shift());
    if (num > 0) {
        cont++;
        soma += num;
    }
}

let media = soma / cont;
console.log(cont + " valores positivos");
console.log(media.toFixed(1));
