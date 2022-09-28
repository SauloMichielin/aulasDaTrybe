/*
  QUESTÃO: Reduza o array em um objeto conforme o exemplo abaixo.
*/

/*
Retorno esperado:
  {
    'Adriano Imperador': 'didico@futebol.br',
    'Marta Vieira da Silva': 'rainhamarta@futebol.br',
    'Ronaldinho Gaúcho': 'bruxo@futebol.br',
    'Ronaldo Fenômeno': 'cortedocascao@futebol.br'
  }
*/

const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
];

// Resolução com reduce

const newPlayers = players.reduce((acc, curr) => {
  // console.log('accumulator', acc);
  // console.log('currentValue', curr);
  const fullName = curr.fullName;
  acc[fullName] = curr.email;
  return acc;
}, {});

console.log('newPlayers: ', newPlayers);


// Relembrando como adicionar propriedades em objetos

// const examplePlayers = {
//   'Adriano Imperador': 'didico@futebol.br',
//   'Marta Vieira da Silva': 'rainhamarta@futebol.br',
//   'Ronaldinho Gaúcho': 'bruxo@futebol.br',
//   'Ronaldo Fenômeno': 'cortedocascao@futebol.br'
// };

// objeto[chave] = valor
// examplePlayers['Thalles Carneiro'] = 'carneiro@futebol.br';

// console.log(examplePlayers);
