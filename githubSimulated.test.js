const { getGitHubUserInfo } = require('./github');

const VALID_USERNAME = 'johndoe';
const VALID_URL = `https://api.github.com/users/${VALID_USERNAME}`;

const fetchSimulator = async (url) => {
  if (!url || url !== VALID_URL) {
    throw new Error('Pessoa usuária inválida');
  }

  return {
    json: async () => ({
      name: "John Doe",
      location: "Some Place - Country",
      bio: "Software Engineer",
      company: "@company",
      twitter_username: "johndoe"
    })
  }
};

global.fetch = jest.fn(fetchSimulator);
afterEach(jest.clearAllMocks);


describe('Quando chamada a função getGitHubUserInfo...', () => {
  it('deve chamar a função fetch', async () => {
    expect.assertions(3);

    await getGitHubUserInfo(VALID_USERNAME);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(VALID_URL);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('deve retornar um erro quando o username for inválido', async () => {
    expect.assertions(1);
    try {
      await getGitHubUserInfo("arthurproc");
    } catch (error) {
      expect(error).toEqual(new Error('Pessoa usuária inválida'));
    }
  })

  it('deve retornar um erro quando o username for inválido (com rejects)', () => {
    expect.assertions(1);
    expect(getGitHubUserInfo("arthurproc"))
      .rejects
      .toThrow('Pessoa usuária inválida');
  })
});
