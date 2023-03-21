import React, { Component } from 'react'

class PasswordInput extends Component {
  render() {
    const { password, handleChange } = this.props;
    return (
      <label>
        Senha
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          value={ password }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default PasswordInput;
