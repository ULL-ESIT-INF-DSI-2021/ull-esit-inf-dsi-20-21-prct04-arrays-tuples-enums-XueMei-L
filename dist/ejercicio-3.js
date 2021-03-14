"use strict";
/**
 * _find all the numbers that are in an array and a string that is formed by all the letters of the array_
 * @param arrayEj3  array containing multiple numbers and mixed letters
 * @returns array containing the mean found of all numbers and a string found in arrayEj3
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.meanAndConcatenate = void 0;
function meanAndConcatenate(arrayEj3) {
    let sum = 0;
    let count = 0;
    let newArrayEje3 = [];
    let newstring = "";
    let resultEj3 = [];
    for (let i = 0; i < arrayEj3.length; i++) {
        if ((/[0-9]/g).test(arrayEj3[i])) {
            sum += parseInt(arrayEj3[i]);
            count++;
        }
        else {
            newstring += arrayEj3[i];
        }
    }
    sum = sum / count;
    let media = sum.toString();
    resultEj3.push(media);
    resultEj3.push(newstring);
    return resultEj3;
}
exports.meanAndConcatenate = meanAndConcatenate;
let arrayEj3 = ["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"];
let arrayEj31 = ["l", "1", "x", "9", "m", "u", "9", "9", "l", "20", "l", "21",];
console.log(`before: [${arrayEj3}]
after:  [${meanAndConcatenate(arrayEj3)}]`);
console.log(`before: [${arrayEj31}]
after:  [${meanAndConcatenate(arrayEj31)}]`);
