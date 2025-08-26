import generateSyllable from "./generateSyllable.ts";
import { vowels } from "./data/index.ts";

const isVowel = (char: string): boolean => vowels.includes(char);
const badEndings: string[] = ['j', 'q', 'v', 'w', 'x'];

export default function generateWord(minLength: number, maxLength: number, firstLetter: string): string {

    let word: string = firstLetter;

    while (word.length < minLength || (word.length < maxLength && Math.random() > 0.25)) {
        let syllable: string;
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
