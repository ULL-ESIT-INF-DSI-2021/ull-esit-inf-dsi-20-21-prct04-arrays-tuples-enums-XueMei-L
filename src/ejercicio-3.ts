function meanAndConcatenate(arrayEj3: string[]):string[]{
    let sum: number = 0;
    let count: number = 0;
    let newArrayEje3: string[] = [];
    let newstring: string = "";
    let resultEj3: string[] = [];
    for(let i :number = 0; i < arrayEj3.length; i++) {
        if((/[0-9]/g).test(arrayEj3[i])){
            sum += parseInt(arrayEj3[i]);
            count++;
        }else{
            newstring += arrayEj3[i];
        }
    }
    sum = sum /count
    let media: string = sum.toString();
    resultEj3.push(media);
    console.log(`${newstring}`);
    resultEj3.push(newstring);
    
    return resultEj3;
}


let arrayEj3: string[] = ["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"];

console.log(`before: [${arrayEj3}]
after: [${meanAndConcatenate(arrayEj3)}]`);