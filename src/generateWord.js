import generateSyllable from "./generateSyllable.js";
import { vowels, consonants } from "./data/index.js";

const isVowel = (char) => vowels.includes(char);
const badEndings = ['j', 'q', 'v', 'w', 'x'];

export default function generateWord(minLength, maxLength, firstLetter) {

    let word = firstLetter;

    while (word.length < minLength || (word.length < maxLength && Math.random() > 0.25)) {
        let syllable;
        do {
            syllable = generateSyllable();
        } while (
            (isVowel(word.slice(-1)) && isVowel(syllable[0])) ||
            (!isVowel(word.slice(-1)) && !isVowel(syllable[0]))
        );

        if (word.length + syllable.length <= maxLength) {
            word += syllable;
        } else {
            break;
        }
    }

    while (badEndings.includes(word.slice(-1)) && word.length > minLength) {
        word = word.slice(0, -1);
    }

    return word.slice(0, maxLength);
}
