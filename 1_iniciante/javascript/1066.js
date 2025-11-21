/**
 * @source Beecrowd
 * @problem 1066 - Even, Odd, Positive and Negative
 * @subject Repetition
 *
 * @author Letícia Cruz
 * @date 2020-12-08
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

contPA = 0;
contIM = 0;
contPO = 0;
contNE = 0;

for (let i = 0; i < 5; i++) {
    let num = parseInt(lines.shift());
    if (num % 2 === 0) {
        contPA++;
    } else {
        contIM++;
    }
    if (num > 0) {
        contPO++;
    } else if (num < 0) {
        contNE++;
    }
}
console.log(contPA + " valor(es) par(es)");
console.log(contIM + " valor(es) impar(es)");
console.log(contPO + " valor(es) positivo(s)");
console.log(contNE + " valor(es) negativo(s)");
