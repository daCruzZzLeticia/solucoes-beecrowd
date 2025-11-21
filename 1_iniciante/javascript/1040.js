/**
 * @source Beecrowd
 * @problem 1040 - Average 3
 * @subject Selection
 *
 * @author Letícia Cruz
 * @date 2020-11-13
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let l1 = lines.shift().split(" ");
let l2 = lines.shift();

let N1 = parseFloat(l1.shift());
let N2 = parseFloat(l1.shift());
let N3 = parseFloat(l1.shift());
let N4 = parseFloat(l1.shift());
let N5 = parseFloat(l2);

let M = (N1 * 2 + N2 * 3 + N3 * 4 + N4) / 10;
console.log("Media: " + M.toFixed(1));

if (M >= 7.0) {
    console.log("Aluno aprovado.");
} else if (M < 5.0) {
    console.log("Aluno reprovado.");
} else if (M >= 5.0 && M <= 6.9) {
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + N5.toFixed(1));

    let MF = (M + N5) / 2;
    if (MF >= 5.0) {
        console.log("Aluno aprovado.");
    } else if (MF <= 4.9) {
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + MF.toFixed(1));
}
