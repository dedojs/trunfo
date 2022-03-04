import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../css/Game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    const { baralho } = this.props
    this.state = {
      click: 0,
      click2: baralho.length -1,
      p2IsDisabled: true,
      p1IsDisabled: false,
      pontosp1: 0,
      pontosp2: 0,
      jogada: '',
      round: '',
      resultado: '',
    }
  }

    onSelectChange = ({ target }) => {
      const { name } = target;
      const value = target.value;
      this.setState({ [name]: value })
    }

    handleCard = ({ target }) => {
      const { click } = this.state
      const { baralho } = this.props
        this.setState((prev) => ({
          click: prev.click + 1,
          click2: prev.click2 - 1,
          p1IsDisabled: !prev.p1IsDisabled,
          p2IsDisabled: !prev.p2IsDisabled,
        }))
      if (click === baralho.length -1) {
        this.setState((prev) => ({
          click: 0,
          click2: baralho.length -1,
        }))
        this.letResultado()
      }
      this.handlePlay()
    }

    
    handlePlay = () => {
      const { baralho, baralho2 } = this.props
      const { jogada, click, click2 } = this.state
      
      if (jogada === 'ataque') {
        if (baralho[click].attr01 > baralho2[click2].attr01) {
          this.setState((prev) => ({
            pontosp1: prev.pontosp1 +1,
          }))
        } else if (baralho[click].attr01 < baralho2[click2].attr01) {
          this.setState((prev) => ({
            pontosp2: prev.pontosp2 +1,
          }))
        } 
        this.setState(() => ({
          round: `Round ${ click +1 } => Ataque => Player 1 = ${baralho[click].attr01} X ${baralho2[click2].attr01} = Player 2`
        }))
      }
      else if (jogada === 'defesa') {
        if (baralho[click].attr02 > baralho2[click2].attr02) {
          this.setState((prev) => ({
            pontosp1: prev.pontosp1 +1,
          }))
        } else if (baralho[click].attr02 < baralho2[click2].attr02) {
          this.setState((prev) => ({
            pontosp2: prev.pontosp2 +1,
          }))
        }
        this.setState(() => ({
          round: `Round ${ click +1 } => Defesa => Player 1 = ${baralho[click].attr02} X ${baralho2[click2].attr02} = Player 2`
        }))
      }
      else if (jogada === 'vida') {
        if (baralho[click].attr03 > baralho2[click2].attr03) {
          this.setState((prev) => ({
            pontosp1: prev.pontosp1 +1,
          }))
        } else if (baralho[click].attr03 < baralho2[click2].attr03) {
          this.setState((prev) => ({
            pontosp2: prev.pontosp2 +1,
          }))
        }
        this.setState(() => ({
          round: `Round ${ click +1 } => Vida => Player 1 = ${baralho[click].attr03} X ${baralho2[click2].attr03} = Player 2`
        }))
      }
    }

    letResultado = () => {
      const { pontosp1, pontosp2 } = this.state
      if (pontosp1 > pontosp2) {
        this.setState(() => ({
          resultado: 'O Player 1 é o vencedor',
        }))
      } else if (pontosp1 === pontosp2) {
        this.setState(() => ({
          resultado: 'Jogo Empatado',
        }))
      } else {
        this.setState(() => ({
          resultado: 'O Player 2 é o vencedor',
        }))
      }
    }

    reset = () => {
      const { baralho } = this.props
      this.setState(() => ({
        click: 0,
        click2: baralho.length -1,
        pontosp1: 0,
        pontosp2: 0,
        resultado: '',
        round: '',
      }))
    }
    
  render(){
    const { baralho, style, baralho2, } = this.props
    const { click, click2, p2IsDisabled, p1IsDisabled, pontosp1, pontosp2, round, resultado } = this.state
    const classe = p1IsDisabled ? 'verso' : 'frente';
    const classe2 = p2IsDisabled ? 'verso' : 'frente';
    const zIn = p1IsDisabled ? 1 : -1;
    return (
      <div className="principal">
        <h1>Bem Vindo ao Jogo</h1>
        <div>
            <h2>Round</h2>
            <p>{ click +1 }</p>
        </div>
        <hr></hr>
        <div className='deck-header'>
          <div className='p1'>
              <h2>Player 1</h2>
              <label>Jogada</label>
              <select type="select" disabled={ p1IsDisabled } name="jogada"  onChange={ this.onSelectChange }>
                <option value="ataque">Ataque</option>
                <option value="defesa">Defesa</option>
                <option value="vida">Vida</option>
              </select>
              <h2>Pontos</h2>
              <h2 className='pontos'>{ pontosp1 } </h2>
            </div>
          <div className='p1'>
              <h2>Player 2</h2>
              <label>Jogada</label>
              <select type="select" disabled={ p2IsDisabled } name="jogada"  onChange={ this.onSelectChange }>
                <option value="ataque">Ataque</option>
                <option value="defesa">Defesa</option>
                <option value="vida">Vida</option>
              </select>
              <h2>Pontos</h2>
              <h2 className='pontos'>{ pontosp2 } </h2>
            </div>
        </div>
        <hr></hr>
        <div className="deck">
          <div className={ classe }>
            <Card
            style = { -1 }
            cardName={ baralho[click].nome}
            cardDescription={ baralho[click].descricao }
            cardAttr1={ baralho[click].attr01 }
            cardAttr2={ baralho[click].attr02 }
            cardAttr3={ baralho[click].attr03 }
            cardImage={ baralho[click].imagem }
            cardRare={ baralho[click].raridade }
            cardTrunfo={ baralho[click].superT }
            />
            <br></br>
          </div>
            <div className= { classe2 }>
            <Card
            style= { -1 }
            cardName={ baralho2[click2].nome}
            cardDescription={ baralho2[click2].descricao }
            cardAttr1={ baralho2[click2].attr01 }
            cardAttr2={ baralho2[click2].attr02 }
            cardAttr3={ baralho2[click2].attr03 }
            cardImage={ baralho2[click2].imagem }
            cardRare={ baralho2[click2].raridade }
            cardTrunfo={ baralho2[click2].superT }
            />
            </div>
        </div>
        <hr></hr>
        {resultado
        ? (
          <div>
            <p className='resultado'>{ resultado } </p>
            <button className='button' onClick={ this.reset}>Reset</button>
          </div>
          ) 
        : <div className='div-result'>
          <div className='placar'>
            <h2>{ baralho[click].nome }</h2>
            <p> X </p>
            <h2>{ baralho2[click2].nome }</h2>
          </div>
          <p> { round } </p>
          <button type="submit" className="button" onClick={ this.handleCard }>Next Card</button>
        </div>
        }
        
      </div>
    );
  }
}

Game.propTypes = {
  baralho: PropTypes.array,
  value: PropTypes.string,
  handleInput: PropTypes.func,
}.isRequired;
