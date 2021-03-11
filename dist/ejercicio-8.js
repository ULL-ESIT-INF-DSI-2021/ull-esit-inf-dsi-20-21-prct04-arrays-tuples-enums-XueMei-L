function agent(rol, col, initP, endP) {
    let map;
    let x = 0;
    let y = 0;
    let resultEj8 = [];
    while ((initP[0] !== endP[0]) || (initP[1] !== endP[1])) {
        if (initP[0] !== endP[0]) {
            x = endP[0] - initP[0];
            if (x > 0) {
                initP[0]++;
                resultEj8.push("North");
            }
            else {
                initP[0]--;
                resultEj8.push("South");
            }
        }
        else {
            if (initP[1] !== endP[1]) {
                y = endP[1] - initP[1];
                if (y > 0) {
                    initP[1]++;
                    resultEj8.push("East");
                }
                else {
                    initP[1]--;
                    resultEj8.push("West");
                }
            }
        }
        console.log(`[${initP[0]}, ${initP[1]}]`);
    }
    return resultEj8;
}
let initialPoint = [1, 3];
let endPoint = [-2, 5];
let sizeMapRol = 10;
let sizeMapCol = 10;
console.log(`Agente debe ir a: ${agent(sizeMapRol, sizeMapCol, initialPoint, endPoint)}`);
