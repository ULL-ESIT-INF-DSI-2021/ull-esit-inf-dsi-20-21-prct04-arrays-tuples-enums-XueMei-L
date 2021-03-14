import { assert } from "chai";
/**
 * _Perform operations between two points (3 dimensions)_
 * @param p1 is a point with number x, y and z
 * @param p2 is a point with number x, y and z
 * @returns the addtion, the subtraction, the product and euclideanDistance between two points
 */

export function addEj7(p1: number[],p2: number[]): number[]{
    assert(p1.length == p2.length);
    let result: number[] = [];
    for(let i: number = 0; i < p1.length; i++) {
        result.push(p1[i] + p2[i]);
    }
    return result;
}

export function subtractionEj7(p1: number[],p2: number[]){
    assert(p1.length == p2.length);
    let result: number[] = [];
    for(let i: number = 0; i < p1.length; i++) {
        result.push(p1[i] - p2[i]);
    }
    return result;
}

export function productEj7(p1: number[], num:number):number[] {
    let result: number[] = [];
    for(let i: number = 0; i < p1.length; i++) {
        result.push(p1[i] * num);   
    }
    return result;
}

export function euclideanDistanceEj7(p1: number[], p2:number[]):number {
    assert(p1.length == p2.length);
    let result: number = 0;
    for(let i: number = 0; i < p1.length; i++) {
        result += Math.pow(p2[i]-p1[i],2);
    }
    result = Math.sqrt(result);
    //let result: number += Math.sqrt(Math.pow((p2[0] - p1[0]), 2) + Math.pow(p2[1] - p1[1], 2));
    return parseInt(result.toFixed(2));
}

let point1Ej7: number[] = [2, 5, 1];
let point2Ej7: number[] = [3, 6, 3];
let numEj7: number = 2;

//let userNum: number = 5;

console.log(`Add:        [${point1Ej7}] + [${point2Ej7}] = [${addEj7(point1Ej7, point2Ej7)}]`);
console.log(`Subtract    [${point1Ej7}] - [${point2Ej7}] = [${subtractionEj7(point1Ej7, point2Ej7)}]`);
console.log(`productEj7: [${point1Ej7}] * [${numEj7}]     = [${productEj7(point1Ej7, numEj7)}]`);
console.log(`euDistance: [${point1Ej7}] * [${point2Ej7}] = [${euclideanDistanceEj7(point1Ej7, point2Ej7)}]`);
