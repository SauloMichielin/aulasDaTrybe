// Função nomeada
 
// function greeting() {
//  return 'Bom dia!';
// }

// console.log(greeting());

// Função anônima

// buttonStartRace.addEventListener('click', function(){
//   console.log('O botão foi clicado');
// });
 
// Arrow 'nomeada'

// const greeting = () => {
//  return 'Bom dia!';
// }
 
// console.log(greeting());
// console.log(greeting);


// Arrow anônima

// buttonStartRace.addEventListener('click', () => {
//   return 'Bom dia!';
// });


// Refatorando sem argumento




// Refatorando com argumento

// const greeting = (nome) => 'Bom dia!' + nome;
 
// console.log(greeting('Flavia'));


// Com dois argumentos

const greeting = (nome, sobrenome) => 'Bom dia!' + nome + ' ' + sobrenome + '!';
 
console.log(greeting('Flavia', 'Pereira'));