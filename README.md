# NewLoremGen

A simple library for generating realistic-sounding random words. This is not your typical lorem ipsum generator; it uses a more sophisticated approach to create words that are pronounceable and follow the phonetic rules of natural languages.

## How it Works

The word generation process is based on the concept of syllables. Instead of just randomly combining letters, NewLoremGen builds words from a set of predefined syllable structures. This ensures that the generated words have a natural rhythm and are easy to pronounce.

Here's a breakdown of the process:

1.  **Syllable-Based Generation**: The library uses a set of common syllable structures (e.g., CV, CVC, VC) as the building blocks for words. The selection of these structures is weighted by frequency, so more common structures are used more often.

2.  **Letter Frequencies**: When filling the syllable structures with consonants and vowels, the library uses frequency data for both. This means that more common letters (like 'e' and 't') will appear more frequently than less common ones (like 'q' and 'z'), resulting in more natural-sounding words.

3.  **Phonotactic Rules**: The library implements a few simple phonotactic rules to prevent awkward letter combinations:
    *   **No Repetitive Letters**: It avoids repeating the same letter twice in a row within a syllable.
    *   **No Double Vowels/Consonants at Boundaries**: It prevents the joining of two syllables if it would result in a double vowel or consonant.
    *   **No Bad Endings**: It prevents words from ending in certain less common letters (like 'j', 'q', 'v', 'w', 'x').

## How to Use

To use the library, you can import the `generateWord` function and call it with the desired minimum and maximum word length, and a starting letter.

```javascript
import generateFirstLetter from './src/generateFirstLetter.js';
import generateWord from './src/generateWord.js';

const firstLetter = generateFirstLetter().toUpperCase();
const word = generateWord(5, 10, firstLetter);
console.log(word);
```

## Files

*   `demo.js`: An example of how to use the library.
*   `src/generateWord.js`: The main function for generating words.
*   `src/generateSyllable.js`: The function for generating syllables.
*   `src/generateFirstLetter.js`: A helper function to generate a random first letter.
*   `src/data/index.js`: Contains the vowels, consonants, and their frequencies.
*   `src/data/syllableStructures.js`: Contains the syllable structures and their frequencies.
*   `src/utils/getRandomElement.js`: A utility function for getting a random element from an array, with support for weighted randomness.
