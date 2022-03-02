import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { desc, value, type, name, handleInput } = this.props;
    return (
      <li>
        <label htmlFor={ name }>{desc}</label>
        <input value={ value } type={ type } name={ name } onChange={ handleInput } />
      </li>
    );
  }
}

Input.propTypes = {
  desc: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  handleInput: PropTypes.func,
}.isRequired;
