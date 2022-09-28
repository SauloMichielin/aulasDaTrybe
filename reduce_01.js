/*
  - DEFINIÇÃO -

  O "reduce" é uma função muito poderosa que permite combinar todo o resultado da aplicação da função passada como parâmetro nos elementos do array em um único resultado.
*/

/*
  QUESTÃO: Some todos os números contidos no array.
*/

const numbers = [2, 3, 4, 6, 8, 12, 24];

// Resolução com "for"

// const sum = (array) => {
//   let accumulatorFor = array[0];

//   for (let index = 1; index < array.length; index += 1) {
//     accumulatorFor = accumulatorFor + array[index];
//   }

//   return accumulatorFor;
// };

// console.log('Resultado da soma: ', sum(numbers));

// Resolução com "reduce" e return implícito

const sum = (array) => {
  return array.reduce((accumulator, currentValue) => {
    console.log(`acc: ${accumulator} --- curr: ${currentValue}`);
    return accumulator + currentValue;
  }, 0);
};

// Resolução com "reduce" e return implícito

// const sum = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log('Resultado da soma: ', sum(numbers));

module.exports = { sum };
