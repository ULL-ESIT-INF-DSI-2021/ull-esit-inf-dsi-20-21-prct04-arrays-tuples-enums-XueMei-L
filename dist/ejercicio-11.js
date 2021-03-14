/**
 * _Find out if a string is palindrome or not_
 * @param cadena array containing multiple words
 * @returns chain length or -1
 */
function palindromeCount(cadena) {
    let word = [];
    let word2 = [];
    let maxLength = 0;
    let findWord = false;
    let returnNum = 0;
    for (let i = 0; i < cadena.length; i++) {
        let len = 0;
        word = cadena[i].split("");
        word2 = cadena[i].split("");
        word.reverse();
        console.log(`${word}`);
        let countcheck = 0;
        for (let j = 0; j < word.length; j++) {
            if (word[j] == word2[j]) {
                countcheck++;
                len++;
                if (len == word.length) {
                    if (word.length > maxLength) {
                        maxLength = word.length;
                        returnNum = word.length;
                    }
                    else {
                        returnNum = maxLength;
                    }
                }
            }
            if (countcheck == word.length) {
                findWord = true;
            }
        }
    }
    if (findWord == false) {
        returnNum = -1;
    }
    return returnNum;
}
let cadena = ["abba", "acbde", "abdccdba"];
console.log(`Result: ${palindromeCount(cadena)}`);
