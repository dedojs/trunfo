import React from 'react';
import '../css/Card.css';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    const {
      id,
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="border">
        <p className="id">{ id }</p>
        <h1 data-testid="name-card" className="nome">{ cardName }</h1>
        <div className="img-container">
          <img
            data-testid="image-card"
            className="img"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <div className="dados">
          <p data-testid="description-card" className="desc">{ cardDescription }</p>
          <div className="atributos">
            <p>
              Ataque:
              <input
                className="range"
                type="range"
                value={ cardAttr1 }
                disabled="true"
                data-testid="attr1-card"
              />
              {cardAttr1}
            </p>
            <p>
              Defesa:
              <input
                className="range"
                type="range"
                value={ cardAttr2 }
                disabled="true"
                data-testid="attr1-card"
              />
              {cardAttr2}
            </p>
            <p>
              Vida:
              <input
                className="range"
                type="range"
                value={ cardAttr3 }
                disabled="true"
                data-testid="attr1-card"
              />
              {cardAttr3}
            </p>
          </div>
          <p data-testid="rare-card" className="raridade">
            Raridade:
            <span>{ cardRare }</span>
          </p>
          {cardTrunfo && (
            <div data-testid="trunfo-card" className="trunfo">
              { cardTrunfo }
              {
                cardTrunfo ? <p>Super Trunfo</p> : console.log(false)
              }
            </div>
          )}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;
