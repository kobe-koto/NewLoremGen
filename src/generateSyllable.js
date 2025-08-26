import { getRandomElement } from "./utils/getRandomElement.js";
import * as data from "./data/index.js";
import { syllableStructures } from "./data/syllableStructures.js";

function generateSyllable() {
    const structures = syllableStructures.map(item => item.structure);
    const frequencies = syllableStructures.map(item => item.frequency);
    const structure = getRandomElement(structures, frequencies);

    let syllable = "";
    let lastLetter = "";

    for (const type of structure) {
        let letter;
        do {
            if (type === 'C') {
                letter = getRandomElement(data.consonants, data.consonantFrequencies);
            } else if (type === 'V') {
                letter = getRandomElement(data.vowels, data.vowelFrequencies);
            }
        } while (letter === lastLetter);

        syllable += letter;
        lastLetter = letter;
    }

    return syllable;
}

export default generateSyllable;
