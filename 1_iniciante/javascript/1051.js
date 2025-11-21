/**
 * @source Beecrowd
 * @problem 1051 - Taxes
 * @subject Selection
 *
 * @author Letícia Cruz
 * @date 2020-11-13
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let S = parseFloat(lines.shift());

if (S > 0 && S <= 2000.0) {
    console.log("Isento");
} else if (S >= 2000.01 && S <= 3000.0) {
    let imposto = ((S - 2000.0) * 8) / 100;
    console.log("R$ " + imposto.toFixed(2));
} else if (S >= 3000.01 && S <= 4500.0) {
    let impostoB = (1000 * 8) / 100;
    let impostoM = ((S - 3000.0) * 18) / 100;
    let imposto = impostoB + impostoM;
    console.log("R$ " + imposto.toFixed(2));
} else if (S > 4500.0) {
    let impostoB = (1000.0 * 8) / 100;
    let impostoM = (1500.0 * 18) / 100;
    let impostoA = ((S - 4500.0) * 28) / 100;
    let imposto = impostoB + impostoM + impostoA;
    console.log("R$ " + imposto.toFixed(2));
}
