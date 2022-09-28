/*
  QUESTÃO: Some todos os números pares contidos no array.
*/

const numbers = [2, 3, 4, 6, 8, 12, 24];

// Resolução encadeando HOF's

const sumEven = (array) => array
  .filter((element) => element % 2 === 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log('Resultado: ', sumEven(numbers));
