// A HOF forEach itera pelo array e aplica cada elemento dele à função que recebeu como parâmetro.
// meuArray.forEach((elementoDoArray) => console.log(elementoDoArray));

// É um for "melhorado"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Questão - Retornar um novo array com todos os elementos do array numbers multiplicado por 3

// Resolução utilizando o for

// const multiplicaPor3 = (array) => {
//   const novoArray = [];
//   for (let index = 0; index < array.length; index += 1) {
//     novoArray.push(array[index] * 3);
//   }
//   return novoArray;
// }

// console.log(multiplicaPor3(numbers));

// Resolução com o forEach

// 1 - Utilizar o forEach para percorrer os elementos - ok
// 2 - Multiplicar os elementos 
// 3 - Atribuir ao novo array

const multiplicaPor3 = (array) => {
  const novoArray = [];
  array.forEach((elemento) => novoArray.push(elemento * 3));
  return novoArray;
}

// multiplicaPor3(numbers);



// Bônus - Parâmetros opcionais

// const bonus = (numeros) => {
//   numeros.forEach((elemento, index, array) => console.log(`Elemento: ${elemento} --- Index: ${index} ---- Array: ${array}`));
// }

bonus(numbers);

module.exports = multiplicaPor3;