/**
 * _from point A to point B in a defined world_
 * @param rol rol to build world
 * @param col col to build world
 * @param initP starting point where the police is located
 * @param endP  ending point where the police have to go
 * @returns array that stores all steps
 */

export function agent(rol: number, col: number, initP:number[], endP:number[]): string[]{
    let map: number[][];
    let x: number = 0;
    let y: number = 0;
    let resultEj8: string[] = [];
    while((initP[0] !== endP[0]) || (initP[1] !== endP[1])){

        if(initP[0] !== endP[0]){
            x = endP[0] - initP[0];
            if(x > 0){
                initP[0]++;
                resultEj8.push("North");
            }else{
                initP[0]--;
                resultEj8.push("South");
            }
        }else{
            if(initP[1] !== endP[1]){
                y = endP[1] - initP[1];
                if(y > 0){
                    initP[1]++;
                    resultEj8.push("East");
                }else{
                    initP[1]--;
                    resultEj8.push("West");
                }
            }
        }
        console.log(`[${initP[0]}, ${initP[1]}]`);
    }
    return resultEj8;
}


let initialPoint: number[] = [1, 3];
let endPoint: number[] = [-2, 5];
let sizeMapRol: number = 10;
let sizeMapCol: number = 10;

console.log(`Agente debe ir a: ${agent(sizeMapRol, sizeMapCol, initialPoint, endPoint)}`);
