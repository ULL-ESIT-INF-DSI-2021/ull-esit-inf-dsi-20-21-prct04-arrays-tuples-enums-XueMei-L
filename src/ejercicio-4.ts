import { ConditionalTypeSerializer } from "typedoc/dist/lib/serialization/serializers";

function moveZeros(array:number[]):number[]{
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