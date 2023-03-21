/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import GitRepos from '../components/GitRepos';
import { AuthContext } from '../context/AuthContext';
import useFetch from '../hooks/useFetch';
import '../styles/Home.css';

function Home() {
  const { userGitData } = useContext(AuthContext);
  const [gitRepos, setGitRepos] = useState([]);
  const { error, isLoading, makeFetch } = useFetch();

  useEffect(() => {
    if (userGitData) {
      const { repos_url: reposUrl } = userGitData;

      const getRepos = async () => {
        const repos = await makeFetch(reposUrl);
        if (repos) {
          setGitRepos(repos);
        }
      };

      getRepos();
    }
  }, []);

  if (error) {
    return (<h1>{`Ops, algo de errado não está certo ${error}`}</h1>);
  }

  const { name, avatar_url: avatarUrl } = userGitData;

  return (
    <div className="Home">
      <h1>HOME</h1>
      <h3>{ name }</h3>
      { isLoading && <h2>Carregando...</h2> }
      <img src={ avatarUrl } alt="avatar" width="100" />

      <GitRepos gitRepos={ gitRepos } />
    </div>
  );
}

export default Home;
