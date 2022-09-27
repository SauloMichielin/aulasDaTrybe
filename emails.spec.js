const {geraEmails,geraEmailComPonto, geraEmailComUnderline, listaDeNomes} = require('./emails');

describe('Testa geraEmails', () => {
  it (`retorna uma lista de emails com o padrão de ponto quando chamada com a callback geraEmailComPonto`, () => {
    const expectedResult = [
      'caique.coelho@trybe.com',
      'ana.berger@trybe.com',
      'thalles.carneiro@trybe.com'
    ];
    expect(geraEmails(listaDeNomes,geraEmailComPonto)).toStrictEqual(expectedResult);
  });
});