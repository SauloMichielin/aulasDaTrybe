// DEFINICÃO - O some (ALGUM) RECEBE uma função que retorna true ou false. Ele testa cada um dos elementos do array, checando se algum dos elementos satisfaz a condição e, se algum dos elementos retorna true, a função toda RETORNA true.

const ages = [23, 32, 17, 16, 34];
const moreAges = [23, 32, 34]; // igual ao anterior, mas sem idades inferiores à 18 anos

// Questão - Verifique se ALGUMA das idades é menor que 18

// Solução com o forEach

// const menorQue18 = (array) => {
//   let menor = false;
//   array.forEach((elemento) => {
//     if (elemento < 18) {
//       menor = true;
//     } 
//   })
//   return menor;
// }

// console.log(menorQue18(moreAges));
// console.log(menorQue18(moreAges));

// Esse código resolve o meu problema?

// Atencão

// Solucão com SOME

// const menorQue18 = (idades) => {
//   return idades.some((idade) => idade < 18)
// }

// Exemplo mostrando o return explícito
// const menorQue18 = (idades) => {
//   return idades.some((idade) => {
//     return idade < 18;
//   });
// }

// console.log(menorQue18(ages));

// Bônus - Se some é uma HOF..


// const menorQue18 = (age) => age < 18;

// console.log(ages.some(menorQue18));