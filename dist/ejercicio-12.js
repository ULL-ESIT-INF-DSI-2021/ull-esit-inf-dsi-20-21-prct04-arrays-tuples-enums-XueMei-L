function mediaFilter(imagen, rol, col) {
    let newAry = [];
    for (let i = 0; i < rol; i++) {
        for (let j = 0; j < col; j++) {
            let sum = 0;
            let media = 0;
            if (imagen[i][j] == imagen[0][j]) {
                console.log(`numero es :${imagen[i][j]}`);
                if ((i - 1) < 0) {
                    sum += imagen[i][j + 1] + imagen[i + 1][j] + imagen[i][j];
                    console.log(`${imagen[i][j + 1]} + ${imagen[i + 1][j]} + ${imagen[i][j]}`);
                    console.log(`${sum}`);
                }
                else if ((j + 1) > col) {
                    sum += imagen[i - 1][j] + imagen[i + 1][j];
                }
                //No terminado
            }
            //console.log(`${imagen[i][j]}`);
        }
    }
    return newAry;
}
var imagen = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let rol = 3;
let col = 3;
console.log(`Resultad: ${mediaFilter(imagen, rol, col)}`);
