"use strict";
/*function meshArray(array1: string[]){
    console.log(`${array1.length-1}`);
    let word1: string = "";
    let word2: string = "";
    for(let i: number = 0; i < array1.length-1; i++){
        word1 = array1[i];
        word2 = array1[i + 1];
        for(let j: number = 0; i < word1.length; i++) {

        }
    }
}*/
/*
let ary1: string[] = ["allow", "lowering", "ringmaster", "terror"];
console.log(`Result is: ${meshArray(ary1)}`);
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.meshArray = void 0;
function meshArray(arrayCadena) {
    let salida = ``;
    for (let i = 0; i < arrayCadena.length - 1; i++) {
        const word = arrayCadena[i];
        const nextWord = arrayCadena[i + 1];
        let pos = word.length - 1;
        let posNextWord = 0;
        while (word[pos] != nextWord[posNextWord]) {
            pos--;
            if (pos < 0) {
                return `Error al encadenar`;
            }
        }
        for (let j = pos; j < word.length; j++) {
            if (word[j] == nextWord[posNextWord]) {
                salida = salida + word[j];
                posNextWord++;
            }
            else {
                return `Error al encadenar`;
            }
        }
    }
    return salida;
}
exports.meshArray = meshArray;
