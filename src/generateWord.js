import { getRandomElement } from "./utils/getRandomElement.js";
import * as data from "./data/index.js"


export default function generateWord(minLength, maxLength, firstLetter) {

    let word = firstLetter;
    let lastWasMorpheme = false;

    while (word.length < minLength || (word.length < maxLength && Math.random() > 0.25)) {
        let addMorpheme = !lastWasMorpheme && Math.random() < 0.3 && word.length + 2 <= maxLength;
        if (addMorpheme) {
            const morpheme = getRandomElement(data.morphemes, false);
            if (word.length + morpheme.length <= maxLength) {
                word += morpheme;
                lastWasMorpheme = true;
            }
        } else {
            const letter = (word.length % 2 === 0) ?
                getRandomElement(data.consonants, data.consonantFrequencies) :
                getRandomElement(data.vowels, data.vowelFrequencies);
            if (word.length + letter.length <= maxLength) {
                word += letter;
                lastWasMorpheme = false;
            }
        }

        if (word.length >= maxLength) {
            break;
        }
    }

    return word.slice(0, maxLength);
}
