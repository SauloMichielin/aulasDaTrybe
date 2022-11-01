/*
 * Com a linha abaixo comentada apenas o githubSimulated.test.js funciona.
 * Se quiser verificar os testes em github.test.js descomente a linha abaixo.
 */ 

// const fetch = require('node-fetch');

const getUserReposUrl = (username) => `https://api.github.com/users/${username}`;

const getGitHubUserInfo = async (username) => {
  const url = getUserReposUrl(username);

  const response = await fetch(url);
  const data = await response.json();

  const { company, bio, location, name, twitter_username: twitter } = data;

  return {
    company,
    bio,
    location,
    name,
    twitter
  }
};

module.exports = {
  getUserReposUrl,
  getGitHubUserInfo
};

