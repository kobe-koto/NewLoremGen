import generateFirstLetter from "./src/generateFirstLetter.ts";
import generateWord from "./src/generateWord.ts";

let i: number = 0;
while (i < 10) {
    i++
    console.log(generateWord(5, 10, generateFirstLetter().toUpperCase()))
}
