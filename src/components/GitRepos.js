import React, { useState } from 'react';
import { HiTrash } from 'react-icons/hi';

function GitRepos({ gitRepos }) {
  const [search, setSearch] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const language = gitRepos.map((repo) => repo.language).filter((lang) => lang !== null);

  const uniqueLanguages = [...new Set(language)];

  const handleLangChange = (e) => {
    if (selectedLanguages.includes(e.target.value)) {
      setSelectedLanguages(
        selectedLanguages.filter((lang) => lang !== e.target.value),
      );
      return;
    }
    setSelectedLanguages([...selectedLanguages, e.target.value]);
  };

  const filteredReposByName = gitRepos.filter((repo) => repo.name.includes(search));

  const filteredReposByNameNLang = filteredReposByName.filter((repo) => {
    if (selectedLanguages.length > 0) {
      return selectedLanguages.includes(repo.language);
    }
    return true;
  });

  return (
    <>
      <h1>{`Repositórios ${filteredReposByNameNLang.length} de ${gitRepos.length}`}</h1>
      <label htmlFor="filtros">
        <input
          type="text"
          name="filtros"
          placeholder="buscar"
          onChange={ (e) => setSearch(e.target.value) }
        />
      </label>

      <select
        name="languages"
        id="languages"
        onChange={ handleLangChange }
      >
        <option value="">All</option>
        {
          uniqueLanguages.map((lang) => (
            <option key={ lang } value={ lang }>{lang}</option>
          ))
        }

      </select>

      <div className="filters">
        <button
          type="button"
          onClick={ () => setSelectedLanguages([]) }
          style={ { color: 'red' } }
        >
          Limpar
          <HiTrash />
        </button>
        { selectedLanguages.map((lang) => (
          <div key={ lang }>
            {lang}
          </div>
        )) }

      </div>

      <div className="repos">
        {
          filteredReposByNameNLang
            .map((repo) => (
              <div key={ repo.id } className="repo">
                <p>{repo.name}</p>
                <p>{repo.html_url}</p>
              </div>
            ))
        }
      </div>
    </>
  );
}

export default GitRepos;
