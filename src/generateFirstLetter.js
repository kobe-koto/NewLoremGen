import * as data from "./data/firstLetter.js"

export default function generateFirstLetter() {
    const totalFrequency = data.frequencies.reduce((sum, freq) => sum + freq, 0);
    while (true) {
        let randomValue = Math.random() * totalFrequency;
        for (let i = 0; i < data.letters.length; i++) {
            if (randomValue < data.frequencies[i]) {
                return data.letters[i];
            }
            randomValue -= data.frequencies[i];
        }
    }
}
