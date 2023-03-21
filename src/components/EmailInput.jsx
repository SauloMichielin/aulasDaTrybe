import React, { Component } from 'react'

class EmailInput extends Component {
  render() {
    const { email, handleChange } = this.props;
    return (
      <label>
        Email
        <input
          type="text"
          name="email"
          placeholder="Digite seu email"
          value={ email }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default EmailInput;
