/**
 * @source Beecrowd
 * @problem 2221 - Pomekons Battle
 * @subject Unknown
 *
 * @author Letícia Cruz
 * @date 2021-01-16
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

//repetições
let T = parseInt(lines.shift());

for (let i = 0; i < T; i++) {
    //bônus
    let B = parseInt(lines.shift());

    //linha com valores
    let linhaDabriel = lines.shift().split(" ");
    let linhaGuarte = lines.shift().split(" ");

    //ataque,defesa e nível
    let AiD = parseInt(linhaDabriel.shift());
    let DiD = parseInt(linhaDabriel.shift());
    let LiD = parseInt(linhaDabriel.shift());
    let AiG = parseInt(linhaGuarte.shift());
    let DiG = parseInt(linhaGuarte.shift());
    let LiG = parseInt(linhaGuarte.shift());

    //valor do golpe
    let VgolpeD = (AiD + DiD) / 2;
    let VgolpeG = (AiG + DiG) / 2;

    // golpe com bônus
    if (LiD % 2 === 0) {
        VgolpeD += B;
    }
    if (LiG % 2 === 0) {
        VgolpeG += B;
    }

    //resultado da batalha
    if (VgolpeD > VgolpeG) {
        console.log("Dabriel");
    } else if (VgolpeD < VgolpeG) {
        console.log("Guarte");
    } else {
        console.log("Empate");
    }
}
