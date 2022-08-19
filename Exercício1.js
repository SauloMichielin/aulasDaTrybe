let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorre todos os valores do Array
for (let index = 0; index < numbers.length; index++){
    console.log(numbers[index]);
}

//Soma todos os valores do Array
let soma = 0
for (index = 0; index < numbers.length; index++){
    soma = soma + numbers[index];    
}

//Faz a média dos valores do Array
console.log('A soma dos valores do array é: ', soma);
console.log('A média dos valores do array é: ', (soma/numbers.length));
if (soma/numbers.length > 20){
    console.log('valor maior que 20')
} else{
    console.log('valor menor ou igual a 20')
}

//Encontra o maior número
let maiorNumero = 0
for (index=0;index < numbers.length; index++){
    if (numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }
}
console.log('O maior número do Array é: ', maiorNumero);

//Lista os números ímpares do Array
let numerosImpares = [];
for (index=0;index < numbers.length; index++){
    if (numbers[index]%2 == 1){
        numerosImpares.push(numbers[index]);
    }
}
console.log('Os números ímpares da Array são: ', numerosImpares);

//Encontra o menor número
let menorNumero = numbers[0]
for (index=0;index < numbers.length; index++){
    if (numbers[index] < menorNumero){
        menorNumero = numbers[index];
    }
}
console.log('O menor número do Array é: ', menorNumero);

//criando um array de 25 itens
let novoArray = []
for (index = 1; index <= 25; index++){
    novoArray.push(index);
}
console.log(novoArray);

//Dividindo o array novoArray por 2
let divisao = []
for (index = 0; index < novoArray.length; index++){
    divisao.push(novoArray[index]/2);
}
console.log(divisao);