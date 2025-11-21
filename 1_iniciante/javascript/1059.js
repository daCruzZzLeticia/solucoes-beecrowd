/**
 * @source Beecrowd
 * @problem 1059 - Even Numbers
 * @subject Repetition
 *
 * @author Letícia Cruz
 * @date 2020-12-01
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

for (let numero = 2; numero <= 100; numero = numero + 2) {
    console.log(numero);
}
