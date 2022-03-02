import React from 'react';
import '../css/Header.css';
import PropTypes from 'prop-types';
import logo from '../images/Genshin-Impact-Logo.png';

export default class Header extends React.Component {
  render() {
    const { isFormVisible, isFormSearchVisible, isCardsVisible } = this.props;
    return (
      <header className="header">
        <img className="logo" src={ logo } alt="imagem logo" />
        <h1>Super Trunfo</h1>
        <div className="menu-buttons">
          <button
            type="submit"
            className="button"
            onClick={ isFormVisible }
          >
            Criar Cartas
          </button>
          <button
            type="submit"
            className="button"
            onClick={ isFormSearchVisible }
          >
            Pesquisar
          </button>
          <button
            type="submit"
            className="button"
            onClick={ isCardsVisible }
          >
            Cards
          </button>
          <button type="submit" className="button">Jogar</button>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isFormVisible: PropTypes.func,
  isFormSearchVisible: PropTypes.func,
  isCardsVisible: PropTypes.func,
}.isRequired;
