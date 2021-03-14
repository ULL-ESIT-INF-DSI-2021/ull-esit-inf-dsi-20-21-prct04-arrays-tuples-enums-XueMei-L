/**
 * _print 2 digits depending on the number we enter_
 * @param color0 "black"  color represents the number 0
 * @param color1 "brown"  color represents the number 1
 * @param color2 "red"    color represents the number 2
 * @param color3 "orange" color represents the number 3
 * @param color4 "yellow" color represents the number 4
 * @param color5 "green"  color represents the number 5
 * @param color6 "blue"   color represents the number 6
 * @param color7 "purple" color represents the number 7
 * @param color8 "gray"   color represents the number 8
 * @param color9 "write"  color represents the number 9
 * @returns Numbers represented by two colors
 */

export function decodeResistor(...params:string[]):string{
    let resultEj1:string = "";
    for(let i: number = 0; i < 2; i++){
        if(params[i] == "negro"){
            resultEj1 += "0";
        }else if(params[i] == "marron"){
            resultEj1 += "1";
        }else if(params[i] == "rojo"){
            resultEj1 += "2";
        }else if(params[i] == "naranja"){
            resultEj1 += "3";
        }else if(params[i] == "amarillo"){
            resultEj1 += "4";
        }else if(params[i] == "verde"){
            resultEj1 += "5";
        }else if(params[i] == "azul"){
            resultEj1 += "6";
        }else if(params[i] == "violeta"){
            resultEj1 += "7";
        }else if(params[i] == "gris"){
            resultEj1 += "8";
        }else if(params[i] == "blanco"){
            resultEj1 += "9";
        }

    }

    return resultEj1;
}


let color1: string = "negro";
let color2: string = "marron";
let color3: string = "rojo";
let color4: string = "naranja";
let color5: string = "amarillo";
let color6: string = "verde";
let color7: string = "azul";
let color8: string = "violeta";
let color9: string = "gris";
let color10: string = "blanco";


let resultEj1 = decodeResistor(color2, color6, color2);
console.log(`La salida del color [${color2}] y [${color6}] = ${resultEj1}`);