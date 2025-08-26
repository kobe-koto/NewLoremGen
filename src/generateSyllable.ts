import { getRandomElement } from "./utils/getRandomElement.ts";
import * as data from "./data/index.ts";
import type { SyllableStructure } from "./data/syllableStructures.ts"
import { syllableStructures } from "./data/syllableStructures.ts";

export default function generateSyllable(): string {
    const structures: string[] = syllableStructures.map((item: SyllableStructure) => item.structure);
    const frequencies: number[] = syllableStructures.map((item: SyllableStructure) => item.frequency);
    const structure: string = getRandomElement(structures, frequencies);

    let syllable = "";
    let lastLetter = "";

    for (const type of structure) {
        let letter: string = "";
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
