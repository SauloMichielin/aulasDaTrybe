const { getGitHubUserInfo, getUserReposUrl } = require('./github');

describe('Quando chamada a função getGitHubUserInfo...', () => {

  test('deve retornar um objeto contendo company, bio, location, name e twitter', async () => {
    expect.assertions(1);

    // o que é esperado de parâmetro para nossa função?
    const username = "arthurproc";

    // o que é esperado de retorno da nossa função, quando passado este parâmetro
    const expectedValue = {
      company: '@betrybe ',
      bio: 'Software Engineer | Frontend teacher | ReactJS | NodeJS | PHP | Laravel | MongoDB | MySQL',
      location: 'Itabira - Brazil',
      name: 'Arthur Procópio',
      twitter: null
    };

    const result = await getGitHubUserInfo(username);
    expect(result).toEqual(expectedValue);
  });
});

