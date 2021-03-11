function multiplyAll(array) {
    for (let i = 0; i < array.length; i++) {
        result(array[i]);
    }
}
function result(num) {
    let num_2 = 3;
    let result = num * num_2;
    array2.push(result);
    return array2;
}
let array1 = [2, 6, 8];
let array2 = [];
multiplyAll(array1);
console.log(`My first array is [${array1}](3) -> result is [${array2}]`);
