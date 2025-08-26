# NewLoremGen

A simple library for generating realistic-sounding random words. This is not your typical lorem ipsum generator; it uses a more sophisticated approach to create words that are pronounceable and follow the phonetic rules of natural languages.

This project is written in TypeScript and needs to be compiled to JavaScript before it can be run.

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

1.  **Compile the code:**

    ```bash
    npx tsc
    ```

2.  **Run the demo:**

    ```bash
    node dist/demo.js
    ```

To use the library in your own project, you can import the `generateWord` function from the compiled JavaScript files in the `dist` directory.

```typescript
import generateFirstLetter from './src/generateFirstLetter';
import generateWord from './src/generateWord';

const firstLetter = generateFirstLetter().toUpperCase();
const word = generateWord(5, 10, firstLetter);
console.log(word);
```

## Files

*   `demo.ts`: An example of how to use the library.
*   `src/generateWord.ts`: The main function for generating words.
*   `src/generateSyllable.ts`: The function for generating syllables.
*   `src/generateFirstLetter.ts`: A helper function to generate a random first letter.
*   `src/data/index.ts`: Contains the vowels, consonants, and their frequencies.
*   `src/data/syllableStructures.ts`: Contains the syllable structures and their frequencies.
*   `src/utils/getRandomElement.ts`: A utility function for getting a random element from an array, with support for weighted randomness.
*   `tsconfig.json`: The TypeScript configuration file.
