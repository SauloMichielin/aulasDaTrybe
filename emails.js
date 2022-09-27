// Crie uma função que gere um email no padrão 'nome.sobrenome@trybe.com'. Em seguida crie uma função que chame a primeira função de acordo com a quantidade de e-mails necessários e retorne um array com a lista de emails.

// Agora crie uma função que gere os emails no padrão 'nome_sobrenome@trybe.com'//e transforme a função que retorna a lista de emails em uma HOF. 

const listaDeNomes = ['Caique Coelho', 'Ana Berger', 'Thalles Carneiro'];

const geraEmailComPonto = (nome) => {
  return `${nome.replace(' ', '.').toLowerCase()}@trybe.com`;
}

const geraEmailComUnderline = (nome) => {
  return `${nome.replace(' ', '_').toLowerCase()}@trybe.com`;
}

// console.log(geraEmailComUnderline('Rita Moura'));

const geraEmails = (listaDeNomes, callback) => {
  const arrayEmails = [];
  for(let i = 0; i < listaDeNomes.length; i+= 1) {
    // console.log(listaDeNomes[i]);
    arrayEmails.push(callback(listaDeNomes[i]));
  }
  return arrayEmails;
}

// console.log(geraEmails(listaDeNomes,geraEmailComUnderline));
// console.log(geraEmails(listaDeNomes,geraEmailComPonto));
// console.log(geraEmails(listaDeNomes));


// console.log(geraEmailComPonto('Caique Coelho'));

// O que eu tenho: caique.coelho
// O que eu quero: caique.coelho@trybe.com


module.exports = {geraEmails,geraEmailComPonto, geraEmailComUnderline, listaDeNomes}