// DEFINIÇÃO - A função find permite que a gente retorne o primeiro elemento que passe no critério. 

const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];


// Questão - Encontrar o primeiro elemento que não pode dirigir

// const primeiroQueNaoDirige = (array) => {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].isDriver === false) {
//       return array[i];
//     }
//   }

//   return undefined;
// };

// console.log(primeiroQueNaoDirige(users));

// Resolução com o find 

const primeiroQueNaoDirige = (users) => users.find((user) => user.isDriver === false);
  

console.log(primeiroQueNaoDirige(users));


// Bônus 

// console.log(primeiroQueNaoDirige(users).firstName);

