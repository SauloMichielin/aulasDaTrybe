// Aplicação num exemplo para observar a função sendo passada por parâmetro

// const person = {
//   name: 'Thayna',
//   lastName: 'Guimarães',
//   greet: (callback) => {
//     return callback();
//   }
// };

// const greetingPeople = (nome) => {
//   return `Olá, tuuurmaaa!`;
// }

// greetingPeople('Caique')

// console.log(greetingPeople());

const greeting = (callback) => {
  return callback();
}

const defaultGreeting = () => {
  return 'Olá, como vai você!';
}

const badMoodGreeting = () => {
  return 'Rum!';
}

const loveGreeting = () => {
  return 'oiiiii, xeeero!';
}

console.log(greeting(defaultGreeting));
console.log(greeting(loveGreeting));



// module.exports = greetingPeople;
// module.exports = {greeting, defaultGreeting, badMoodGreeting, loveGreeting, person};