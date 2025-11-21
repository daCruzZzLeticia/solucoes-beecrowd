/**
 * @source Beecrowd
 * @problem 1114 - Fixed Password
 * @subject Repetition
 *
 * @author Letícia Cruz
 * @date 2020-12-12
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let senha = parseInt(lines.shift());

if (senha == 2002) {
    console, log("Acesso Permitido");
} else {
    for (let i = senha; i !== 2002; i = parseInt(lines.shift())) {
        console.log("Senha Invalida");
    }
    console.log("Acesso Permitido");
}
