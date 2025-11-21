/**
 * @source Beecrowd
 * @problem 1048 - Salary Increase
 * @subject Selection
 *
 * @author Letícia Cruz
 * @date 2020-11-04
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let salario = parseFloat(lines.shift());

if (salario > 0 && salario <= 400.0) {
    let reajuste = (salario * 15) / 100;
    let Snovo = salario + reajuste;

    console.log("Novo salario: " + Snovo.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 15 %");
} else if (salario >= 400.01 && salario <= 800.0) {
    let reajuste = (salario * 12) / 100;
    let Snovo = salario + reajuste;

    console.log("Novo salario: " + Snovo.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 12 %");
} else if (salario >= 800.01 && salario <= 1200.0) {
    let reajuste = (salario * 10) / 100;
    let Snovo = salario + reajuste;

    console.log("Novo salario: " + Snovo.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 10 %");
} else if (salario >= 1200.01 && salario <= 2000.0) {
    let reajuste = (salario * 7) / 100;
    let Snovo = salario + reajuste;

    console.log("Novo salario: " + Snovo.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 7 %");
} else if (salario > 2000.0) {
    let reajuste = (salario * 4) / 100;
    let Snovo = salario + reajuste;

    console.log("Novo salario: " + Snovo.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 4 %");
}
