function add(p1, p2) {
    let result = [];
    for (let i = 0; i < p1.length; i++) {
        result.push(p1[i] + p2[i]);
    }
    return result;
}
function subtraction(p1, p2) {
    let result = [];
    for (let i = 0; i < p1.length; i++) {
        result.push(p1[i] - p2[i]);
    }
    return result;
}
function product(p1, num) {
    let result = [];
    for (let i = 0; i < p1.length; i++) {
        result.push(p1[i] * num);
    }
    return result;
}
function euclideanDistance(p1, p2) {
    let result = Math.sqrt(Math.pow((p2[0] - p1[0]), 2) + Math.pow(p2[1] - p1[1], 2));
    return parseInt(result.toFixed(2));
    //return result.toFixed(2);
}
let point1 = [2, 5];
let point2 = [3, 6];
let numEj6 = 2;
console.log(`Add:      [${point1}] + [${point2}] = [${add(point1, point2)}]`);
console.log(`Subtract  [${point1}] - [${point2}] = [${subtraction(point1, point2)}]`);
console.log(`Product:  [${point1}] * [${numEj6}]   = [${product(point1, numEj6)}]`);
console.log(`Distance: [${point1}] & [${point2}] = [${euclideanDistance(point1, point2)}]`);
