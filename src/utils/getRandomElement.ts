/**
 * Grabs a random element from a source array, with optional frequency weighting.
 * @param source The source array to pick from.
 * @param frequencies Optional array of frequencies corresponding to the source elements.
 * @returns A random element from the source array.
 */
export function getRandomElement<T>(source: T[], frequencies: number[] | false = false): T {
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
