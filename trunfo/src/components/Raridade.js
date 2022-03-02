import React from 'react';
import PropTypes from 'prop-types';

export default class Raridade extends React.Component {
  render() {
    const { value, handleInput } = this.props;
    return (
      <div className="select">
        <p className="selectLabel">Raridade</p>
        <select
          className="selectOptions"
          value={ value }
          name="raridade"
          onChange={ handleInput }
          placeholder="Defina a Raridade"
        >
          <option>-Estrelas-</option>
          <option value="3 estrelas">3 estrelas</option>
          <option value="4 estrelas">4 estrelas</option>
          <option value="5 estrelas">5 estrelas</option>
        </select>
      </div>
    );
  }
}

Raridade.propTypes = {
  value: PropTypes.string,
  handleInput: PropTypes.func,
}.isRequired;
