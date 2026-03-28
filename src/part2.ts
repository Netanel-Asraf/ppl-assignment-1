import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = (s: string): number => {
    return R.pipe(
        stringToArray,
        R.filter((char: string) => vowels.includes(char.toLowerCase())),
        R.length
    )(s);
};

/* Question 2.2 */
// Helper function
const checkPalindrome = (arr: string[]): boolean => 
    (arr.length <= 1) ? true : ((R.head(arr) !== R.last(arr)) ? false : checkPalindrome(arr.slice(1, arr.length - 1)));

export const isPalindrome = (text: string): boolean => R.pipe(
        R.toLower,
        stringToArray,
        R.filter((char: string) => /[a-z0-9]/.test(char)), 
        checkPalindrome)(text);
  
/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => t.children.reduce(
        (acc: string, child: WordTree) => acc + " " + treeToSentence(child), t.root);