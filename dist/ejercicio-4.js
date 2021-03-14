"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeros = void 0;
/**
 * _Move all 0 at the end of array_
 * @param arrayEje4 array containing multiple numbers
 * @returns a new array where all 0 are at the end of array
 */
function moveZeros(array) {
    let count = 0;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            count++;
        }
        else {
            newArray.push(array[i]);
        }
    }
    for (let i = 0; i < count; i++) {
        newArray.push(0);
    }
    return newArray;
}
exports.moveZeros = moveZeros;
let arrayEje4 = [1, 0, 1, 2, 0, 1, 3];
console.log(`El array antes de mover todos 0 es: [${arrayEje4}]
El nuevo array despues de mover todos 0 es:[${moveZeros(arrayEje4)}]`);
