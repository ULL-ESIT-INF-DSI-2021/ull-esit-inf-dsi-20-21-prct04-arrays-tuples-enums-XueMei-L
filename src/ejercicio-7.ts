import { assert } from "chai";

function addEj7(p1: number[],p2: number[]):number[] {
    assert(p1.length == p2.length);
    let result: number[] = [];
    for(let i: number = 0; i < p1.length; i++) {
        result.push(p1[i] + p2[i]);
    }
    return result;
}

function subtractionEj7(p1: number[],p2: number[]):number[] {
    assert(p1.length == p2.length);
    let result: number[] = [];
    for(let i: number = 0; i < p1.length; i++) {
        result.push(p1[i] - p2[i]);
    }
    return result;
}

function productEj7(p1: number[], num:number):number[] {
    let result: number[] = [];
    for(let i: number = 0; i < p1.length; i++) {
        result.push(p1[i] * num);   
    }
    return result;
}



let point1Ej7: number[] = [2, 5, 1];
let point2Ej7: number[] = [3, 6, 3];
let numEj7: number = 2;

//let userNum: number = 5;

console.log(`Add:        [${point1Ej7}] + [${point2Ej7}] = [${addEj7(point1Ej7, point2Ej7)}]`);
console.log(`Subtract    [${point1Ej7}] - [${point2Ej7}] = [${subtractionEj7(point1Ej7, point2Ej7)}]`);
console.log(`productEj7: [${point1Ej7}] * [${numEj7}]     = [${productEj7(point1Ej7, numEj7)}]`);
