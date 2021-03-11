function decodeResistor(...params) {
    let resultEj1 = "";
    for (let i = 0; i < 2; i++) {
        if (params[i] == "negro") {
            resultEj1 += "0";
        }
        else if (params[i] == "marron") {
            resultEj1 += "1";
        }
        else if (params[i] == "rojo") {
            resultEj1 += "2";
        }
        else if (params[i] == "naranja") {
            resultEj1 += "3";
        }
        else if (params[i] == "amarillo") {
            resultEj1 += "4";
        }
        else if (params[i] == "verde") {
            resultEj1 += "5";
        }
        else if (params[i] == "azul") {
            resultEj1 += "6";
        }
        else if (params[i] == "violeta") {
            resultEj1 += "7";
        }
        else if (params[i] == "gris") {
            resultEj1 += "8";
        }
        else if (params[i] == "blanco") {
            resultEj1 += "9";
        }
    }
    return resultEj1;
}
let color1 = "negro";
let color2 = "marron";
let color3 = "rojo";
let color4 = "naranja";
let color5 = "amarillo";
let color6 = "verde";
let color7 = "azul";
let color8 = "violeta";
let color9 = "gris";
let color10 = "blanco";
let resultEj1 = decodeResistor(color2, color6, color2);
console.log(`${resultEj1}`);
