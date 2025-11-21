/**
 * @source Beecrowd
 * @problem 1049 - Animal
 * @subject Selection
 *
 * @author Letícia Cruz
 * @date 2020-11-13
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(/\r?\n/);

let O = lines.shift();
let F = lines.shift();
let G = lines.shift();

let E;

if (O == "vertebrado") {
    if (F === "ave") {
        if (G === "carnivoro") {
            E = "aguia";
        } else {
            E = "pomba";
        }
    } else {
        if (G === "onivoro") {
            E = "homem";
        } else {
            E = "vaca";
        }
    }
} else {
    if (F === "inseto") {
        if (G === "hematofago") {
            E = "pulga";
        } else {
            E = "lagarta";
        }
    } else {
        if (G === "hematofago") {
            E = "sanguessuga";
        } else {
            E = "minhoca";
        }
    }
}

console.log(E);
