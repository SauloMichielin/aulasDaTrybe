// DEFINIÇÃO - A função every também funciona recebendo uma função que retorna true ou false. Se, e somente se, todos os elementos do array retornarem true ao aplicar a função, a função toda retorna true.

// Questão - Verifique se TODAS as idades são maiores que 18

const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34]; // igual ao anterior, mas sem idades inferiores à 18 anos

// Resolução 1 

const maiorQue18 = (idades) => idades.every((idade) => idade > 18)


console.log(maiorQue18(ages));


// Resolucão 2



// Bônus - CURIOSIDADE - testem!

// Se eu passar um array vazio para o some?


// Se eu passar um array vazio para o every?