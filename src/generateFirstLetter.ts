import * as data from "./data/firstLetter.ts";
import { getRandomElement } from "./utils/getRandomElement.ts";

export default function generateFirstLetter(): string {
    return getRandomElement(data.letters, data.frequencies);
}
