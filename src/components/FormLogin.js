import React, { useContext, useEffect, useState } from 'react';
import '../styles/Login.css';
import { useHistory } from 'react-router-dom';
import logo from '../assets/trybe-negativo-preferencial.png';
import { AuthContext } from '../context/AuthContext';

function FormLogin() {
  const [login, setLogin] = useState({ username: '', password: '' });
  const {
    isLoading,
    error,
    userGitData,
    performLogin,
  } = useContext(AuthContext);
  const history = useHistory();

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const isFilled = !!(login.username && login.password);

  const handleSubmit = async () => {
    await performLogin(login.username);
    setLogin({ username: '', password: '' });
  };

  useEffect(() => {
    if (userGitData !== null) {
      history.push('/home');
    }
  }, [userGitData, history]);

  return (
    <div className="Login">
      <div className="Login__Container">
        <img src={ logo } alt="logo trybe" width="120" />
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={ login.username }
            onChange={ handleChange }
          />
          <small style={ { color: 'red' } }>
            { error && `User ${error}` }
          </small>
        </label>
        <label htmlFor="password" id="password">
          <input
            type="password"
            placeholder="password"
            value={ login.password }
            onChange={ handleChange }
            name="password"
          />
        </label>

        <button
          type="button"
          disabled={ !isFilled }
          onClick={ handleSubmit }
        >
          { isLoading ? 'Carregando...' : 'Entrar' }
        </button>
      </div>
    </div>
  );
}

export default FormLogin;
