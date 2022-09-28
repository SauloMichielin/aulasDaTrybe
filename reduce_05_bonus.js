/*
QUESTÃO 1: Reduza o array em um objeto conforme o exemplo abaixo, contando quantas vezes cada nome aparece no array.
*/

/*
Retorno esperado:
{
  Alice: 2,
  Bob: 1,
  Bruce: 1,
  Tiff: 1
}
*/

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce(); 

console.log('countedNames: ', countedNames);


/*
QUESTÃO 2: Reduza o array em um array conforme o exemplo abaixo, contendo apenas elementos que o nome contenha exatamente 6 caracteres.
*/

/*
Retorno esperado:
  [
    { Caique: '6 caracteres no nome' },
    { Aninha: '6 caracteres no nome' }
  ]
*/

// const otherNames = ['Caique', 'Aninha', 'Thalles', 'Eu sou o Luquinha e você não é'];

// const lengthOfNames = otherNames.reduce((acc, name) => {
//   if (name.length === 6) {
//     acc.push({ [name]: `${name.length} caracteres no nome` });
//   }
//   return acc;
// }, []);

// console.log('lengthOfNames: ', lengthOfNames);