import React from 'react';
import '../css/Form.css';
import '../css/Super.css';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() {
    const {
      hasTrunfo,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <ul className="form">
        <li className="linha">
          <label htmlFor="nome">
            <input
              maxLength="15"
              data-testid="name-input"
              placeholder="Nome:"
              name="nome"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </li>
        <li className="linha">
          <label htmlFor="descricao">
            <textarea
              data-testid="description-input"
              className="textArea"
              name="descricao"
              onChange={ onInputChange }
              placeholder="Descrição da carta"
              value={ cardDescription }
            />
          </label>
        </li>
        <div className="form-atributos">
          <label htmlFor="attr01">
            Ataque
            <input
              data-testid="attr1-input"
              name="attr01"
              type="Number"
              max="90"
              min="0"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr02">
            Defesa
            <input
              max="90"
              min="0"
              data-testid="attr2-input"
              name="attr02"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr03">
            Vida
            <input
              max="90"
              min="0"
              data-testid="attr3-input"
              name="attr03"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <p className="pontos">
          OverAll =
          <span>
            {
              Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
            }
          </span>
        </p>
        <li className="linha">
          <label htmlFor="imagem">
            <input
              placeholder="Url Imagem:"
              data-testid="image-input"
              name="imagem"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </li>
        <div className="select">
          <label htmlFor="raridade" className="selectLabel">
            Raridade:
            <select
              id="raridade"
              type="select"
              data-testid="rare-input"
              name="raridade"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="Normal">Normal</option>
              <option value="Raro">Raro</option>
              <option value="Muito Raro">Muito Raro</option>
            </select>
          </label>
          {
            !hasTrunfo ? (
              <div className="checkSuper">
                <label htmlFor="superT">
                  <input
                    className="quadrado"
                    checked={ cardTrunfo }
                    data-testid="trunfo-input"
                    name="superT"
                    id="super"
                    type="checkbox"
                    value={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                  Super Trunfo
                </label>
              </div>
            ) : <p className="super">Você já tem um Super Trunfo em seu baralho</p>
          }
        </div>
        <button
          className="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          type="submit"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </ul>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
