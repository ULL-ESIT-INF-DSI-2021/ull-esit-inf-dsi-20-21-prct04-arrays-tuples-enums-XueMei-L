/**
 * _A array multiple with a number_
 * @param array: array containing multiple numbers
 * @returns a new array where the result is array1 multiple with 3
 */

export function multiplyAll(array:number[]) {
    for(let i = 0; i < array.length; i++){
        result(array[i]);
    }
}

export function result(num:number):number[]{
    let num_2:number = 3;
    let result = num * num_2;
    array2.push(result);
    return array2;
}

let array1:number[] = [2,6,8];
let array2:number[] = [];
multiplyAll(array1);

console.log(`My first array is [${array1}](3) -> result is [${array2}]`);