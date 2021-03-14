/**
 * Identifies that an array contains chained words or not
 * @param arrayEje2 Array where containing 
 * @returns return -1 if not found the result
 */

export function meshArray(arrayEje2: string[]) {
    let resultEje2: string = "";
    let palabra: string = "";
    let palabraSiguiente: string = "";
    let posicion: number = 0;
    let posicionpalabraSiguiente: number = 0;
    for(let i: number = 0; i < arrayEje2.length - 1; i++) {
        //asignar a letras nuevas
        palabra = arrayEje2[i];
        palabraSiguiente = arrayEje2[i + 1];
        //asignar a posiciones nuevas
        posicion = palabra.length - 1;
        posicionpalabraSiguiente = 0;
        while (palabra[posicion] != palabraSiguiente[posicionpalabraSiguiente]) {
            posicion--;
            if (posicion <= 0) {
                return -1;
            }
        }
        for (let j: number = posicion; j < palabra.length; j++) {
            if (palabra[j] == palabraSiguiente[posicionpalabraSiguiente]) {
                resultEje2 = resultEje2 + palabra[j];
                posicionpalabraSiguiente++;
            } else {
                return -1;
            }
        }
    }
    return resultEje2;
}

let ary1: string[] = ["allow", "lowering", "ringmaster", "terror"];
console.log(`Result is: ${meshArray(ary1)}`);