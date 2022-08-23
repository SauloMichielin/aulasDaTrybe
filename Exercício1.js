//Exercício 1 - Fatorial
let fatorial = 1;
for (let index = 1; index <= 5; index++){
    fatorial *= index;
}

console.log('A soma fatorial de 5 é: '+fatorial); 

//Inverter a palavra banana
let palavra = 'Banana';
let palavraInvertida = ''
for (let index = palavra.length -1; index >= 0; index--){
    palavraInvertida += palavra[index];
}
console.log('A palavra invertida de '+palavra + ' é '+palavraInvertida); //? 

//Retorna a maior palavra de um array
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = ''
for (let index = 0; index < array.length; index++){
    if (array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }
}
console.log('A maior palavra do array é: '+maiorPalavra);

//Retorna a menor palavra de um array
let menorPalavra = array[0];
for (let index = 0; index < array.length; index++){
    if (array[index].length < menorPalavra.length){
        menorPalavra = array[index];
    }
}
console.log('A menor palavra do array é: '+menorPalavra);

//Retorna o maior número primo menor que 50

let primos = [];
console.log(primos)
let resultadoFinal = 0
let temp = []
for (let index = 2; index <= 50; index += 1){
    temp.splice(0,temp.length)
    for (let cont = 2; cont<index; cont +=1){        
        if (index%cont == 0){
            temp.push(0)
            break            
        }        
    }    
    if (temp.length === 0){
        primos.push(index)
    }
}
console.log(primos)