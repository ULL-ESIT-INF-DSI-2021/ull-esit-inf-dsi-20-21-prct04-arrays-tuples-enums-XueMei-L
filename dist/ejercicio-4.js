"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
let arrayEje4 = [1, 0, 1, 2, 0, 1, 3];
console.log(`El array antes de mover todos 0 es: [${arrayEje4}]
El nuevo array despues de mover todos 0 es:[${moveZeros(arrayEje4)}]`);
