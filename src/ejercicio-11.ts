function palindromeCount(cadena: string[]):number{
    let word: string[] = [];
    let word2: string[] = [];
    let maxLength: number = 0;
    let findWord: boolean = false;
    let returnNum: number = 0;
    for(let i: number = 0; i < cadena.length; i++) {
        let len: number = 0 ;
        word = cadena[i].split("");
        word2 = cadena[i].split("");
        word.reverse();
        console.log(`${word}`);
        let countcheck: number = 0;
        for(let j:number = 0; j < word.length; j++){
            if(word[j] == word2[j]){
                countcheck++;
                len++;
                if(len == word.length){
                    if(word.length > maxLength){
                        maxLength = word.length;
                        returnNum = word.length;
                    }else{
                        returnNum = maxLength;
                    }
                }
            }
            if(countcheck == word.length){
                    findWord = true;
                }
        }
    }
    if(findWord == false){
        returnNum = -1;
    }
    return returnNum;

}


let cadena:string[] = ["abba", "acbde","abdccdba"];
console.log(`Result: ${palindromeCount(cadena)}`);