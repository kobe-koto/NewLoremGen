import generateFirstLetter from "./src/generateFirstLetter.js";
import generateWord from "./src/generateWord.js";
//console.log(generateWord("3", "10", "R"))
let i = 0;
while (i < 10) {
    i++
    console.log(generateWord("5", "10", generateFirstLetter().toUpperCase()))
}