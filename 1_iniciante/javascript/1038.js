/**
 * @source Beecrowd
 * @problem 1038 - Snack
 * @subject Selection
 *
 * @author Letícia Cruz
 * @date 2020-11-03
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let codigo = parseInt(lines.shift());
let unidades = parseInt(lines.shift());

if (codigo === 1) {
    let preco = 4.0 * unidades;
    console.log("Total: R$ " + preco.toFixed(2));
} else if (codigo === 2) {
    let preco = 4.5 * unidades;
    console.log("Total: R$ " + preco.toFixed(2));
} else if (codigo === 3) {
    let preco = 5.0 * unidades;
    console.log("Total: R$ " + preco.toFixed(2));
} else if (codigo === 4) {
    let preco = 2.0 * unidades;
    console.log("Total: R$ " + preco.toFixed(2));
} else {
    let preco = 1.5 * unidades;
    console.log("Total: R$ " + preco.toFixed(2));
}
