function multiplyAll(array:number[]):any{

    for(let i = 0; i < array.length; i++){
        result(array[i]);
    }
}

function result(num:number):number[]{
    let num_2:number = 3;
    let result = num * num_2;
    array2.push(result);
    return array2;
}

let array1:number[] = [2,6,8];
let array2:number[] = [];
multiplyAll(array1);

console.log(`My first array is [${array1}](3) -> result is [${array2}]`);