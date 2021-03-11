function add(p1: number[],p2: number[]):number[] {
    let result: number[] = [];
    for(let i: number = 0; i < p1.length; i++) {
        result.push(p1[i] + p2[i]);
    }
    return result;
}

function subtraction(p1: number[],p2: number[]):number[] {
    let result: number[] = [];
    for(let i: number = 0; i < p1.length; i++) {
        result.push(p1[i] - p2[i]);
    }
    return result;
}

function product(p1: number[], num:number):number[] {
    let result: number[] = [];
    for(let i: number = 0; i < p1.length; i++) {
        result.push(p1[i] * num);   
    }
    return result;
}

function euclideanDistance(p1: number[], p2:number[]):number {

    let result: number = Math.sqrt(Math.pow((p2[0] - p1[0]), 2) + Math.pow(p2[1] - p1[1], 2));
    
    return parseInt(result.toFixed(2));
    //return result.toFixed(2);
}

let point1: number[] = [2,5];
let point2: number[] = [3,6];
let numEj6: number = 2;

console.log(`Add:      [${point1}] + [${point2}] = [${add(point1, point2)}]`);
console.log(`Subtract  [${point1}] - [${point2}] = [${subtraction(point1, point2)}]`);
console.log(`Product:  [${point1}] * [${numEj6}]   = [${product(point1, numEj6)}]`);
console.log(`Distance: [${point1}] & [${point2}] = [${euclideanDistance(point1, point2)}]`);
