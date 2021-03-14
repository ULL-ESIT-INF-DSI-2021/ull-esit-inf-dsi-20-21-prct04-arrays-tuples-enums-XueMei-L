import { ConditionalTypeSerializer } from "typedoc/dist/lib/serialization/serializers";
/**
 * _Move all 0 at the end of array_
 * @param arrayEje4 array containing multiple numbers
 * @returns a new array where all 0 are at the end of array
 */

export function moveZeros(array:number[]):number[]{
    let count: number = 0;
    let newArray: number[] = [];
    for(let i:number = 0; i < array.length; i++){
        if(array[i] == 0){
            count++;
        }else{
            newArray.push(array[i]);
        }
    }
    for(let i: number = 0; i < count; i++){
        newArray.push(0);
    }
    return newArray;
}

let arrayEje4: number[] = [1, 0, 1, 2, 0, 1, 3];
console.log(`El array antes de mover todos 0 es: [${arrayEje4}]
El nuevo array despues de mover todos 0 es:[${moveZeros(arrayEje4)}]`);