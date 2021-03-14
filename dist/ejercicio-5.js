"use strict";
/**
 * _A array multiple with a number_
 * @param array: array containing multiple numbers
 * @returns a new array where the result is array1 multiple with 3
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = exports.multiplyAll = void 0;
function multiplyAll(array) {
    for (let i = 0; i < array.length; i++) {
        result(array[i]);
    }
}
exports.multiplyAll = multiplyAll;
function result(num) {
    let num_2 = 3;
    let result = num * num_2;
    array2.push(result);
    return array2;
}
exports.result = result;
/*export function multiplyAll(arrayNum: number[]) {
    return (mult: number) => {
      const sol: number[] = [];
      arrayNum.forEach((number) => {
        sol.push(number * mult);
      });
      return sol;
    };
}*/
let array1 = [2, 6, 8];
let array2 = [];
multiplyAll(array1);
console.log(`My first array is [${array1}](3) -> result is [${array2}]`);
