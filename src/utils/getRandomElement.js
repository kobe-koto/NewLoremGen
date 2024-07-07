/**
 * grab a random child from source array, with frequency if you fancy
 * @param {Array} source 
 * @param {Array|false} frequencies when set to `false`, just do little simple random.
 * @returns 
 */
export function getRandomElement(source, frequencies = false) {
    if (frequencies === false) {
        return source[Math.floor(Math.random() * source.length)];
    }
    const totalFrequency = frequencies.reduce((sum, freq) => sum + freq, 0);
    while (true) {
        let randomValue = Math.random() * totalFrequency;
        for (let i = 0; i < source.length; i++) {
            if (randomValue < frequencies[i]) {
                return source[i];
            }
            randomValue -= frequencies[i];
        }
    }
}
