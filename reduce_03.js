/*
  QUESTÃO: Crie uma frase com todas as strings contidas no array.
*/

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Resolução com reduce
const epicPhrase = epic.reduce((acc, curr) => {
  return `${acc} ${curr}`;
}, 'Frase maneira: ');

console.log(epicPhrase);


// Resolução com reduce mostrando o parâmetro "index"

// const starWars = epic.reduce((accumulator, currentValue, index) => {
//   console.log(`elemento[${index}] || accumulator: ${accumulator} || currentValue: ${currentValue}`);

//   return `${accumulator} ${currentValue}`;
// }, '');

// console.log('StarWars:', starWars);


// Resolução com "join"

// console.log(epic.join(' '));
