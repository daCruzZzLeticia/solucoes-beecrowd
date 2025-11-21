/**
 * @source Beecrowd
 * @problem 1016 - Distance
 * @subject Sequential
 *
 * @author Letícia Cruz
 * @date 2020-10-02
 */

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let minutos = (60 * input) / 30;

console.log(minutos + " minutos");
