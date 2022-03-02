/* eslint-disable max-lines */
/*
import React from 'react';
import Header from './components/Header';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';
import personagens from './components/data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterSuperT: false,
      renderCard: personagens,
      filter: '',
      nome: '',
      descricao: '',
      attr01: 0,
      attr02: 0,
      attr03: 0,
      imagem: '',
      raridade: 'normal',
      superT: false,
      isSaveButtonDisabled: true,
      banco: personagens,
      hasTrunfo: false,
      filterSelect: '',
      filterSelectDisable: false,
      filterTextDisable: false,
    };
  }
  // if (superT) this.setState({ hasTrunfo: true });

  onInputChange= ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.verifySaveButton);
    if (name === 'filter') this.searchCard();
    if (name === 'filterSelect') this.searchCardSelect();
    if (name === 'filterSuperT') this.searchCheck();
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const data = this.state;
    this.setState((prevState) => ({
      banco: [...prevState.banco, data],
      renderCard: [...prevState.renderCard, data],
    }));
    this.setState({ nome: '',
      descricao: '',
      attr01: 0,
      attr02: 0,
      attr03: 0,
      imagem: '',
      raridade: 'normal',
      superT: false,
      isSaveButtonDisabled: true,
    });
  };

  searchCard = () => {
    const { filter, banco } = this.state;
    if (filter.length > 0) {
      this.setState({ renderCard: banco.filter((card) => card.nome.includes(filter)) });
    }
  }

  searchAll = () => {
    const { banco } = this.state;
    this.setState({ renderCard: banco });
  }

  searchCardSelect = () => {
    const { banco, filterSelect } = this.state;
    if (filterSelect === 'todas') {
      this.setState({
        renderCard: banco });
    }
    this.setState((prev) => ({
      renderCard: banco
        .filter((card) => card.raridade === prev.filterSelect || !prev.filterSelect) }));
  };

  searchCheck = () => {
    const { banco, filterSuperT } = this.state;
    if (!filterSuperT) {
      this.setState({ renderCard: banco.filter((card) => card.superT === true),
        filterSelectDisable: true,
        filterTextDisable: true,
        filterSelect: '' });
    } else {
      this.setState({ renderCard: banco,
        filterSelectDisable: false,
        filterTextDisable: false,
        filterSelect: '' });
    }
  }

  removeCard = (item) => {
    const { banco } = this.state;
    this.setState({
      banco: banco.filter((element) => element.nome !== item.nome),
      renderCard: banco.filter((element) => element.nome !== item.nome),
    }); this.verifyTrunfo();
  }

  verifySaveButton = () => {
    const max = 90;
    const sumMax = 210;
    const { nome, descricao, imagem, raridade, attr01, attr02, attr03,
      superT } = this.state;
    const sum = Number(attr01) + Number(attr02) + Number(attr03);
    if (nome === '' || descricao === '' || imagem === '' || raridade === '') {
      this.setState({ isSaveButtonDisabled: true });
    } else if (attr01 > max || attr01 < 0
      || attr02 > max || attr02 < 0 || attr03 > max || attr03 < 0) {
      this.setState({ isSaveButtonDisabled: true });
    } else if (sum > sumMax) this.setState({ isSaveButtonDisabled: true });
    else this.setState({ isSaveButtonDisabled: false });
    if (superT) this.setState({ hasTrunfo: true });
  }

  verifyTrunfo = () => {
    this.setState((prevState) => ({
      hasTrunfo: prevState.banco.some((item) => item.superT === true),
    }));
  }

  render() {
    const { filter, renderCard, banco, hasTrunfo, nome, descricao, attr01, attr02, attr03,
      imagem, raridade, superT, isSaveButtonDisabled, filterSelect,
      filterSuperT, filterSelectDisable, filterTextDisable } = this.state;
    return (
      <div className="app">
        <Header />
        <section className="main">
          <article className="main-form">
            <h2>Adicionar nova carta</h2>
            <Form
              cardName={ nome }
              cardDescription={ descricao }
              cardAttr1={ attr01 }
              cardAttr2={ attr02 }
              cardAttr3={ attr03 }
              cardImage={ imagem }
              cardRare={ raridade }
              cardTrunfo={ superT }
              hasTrunfo={ hasTrunfo }
              onInputChange={ this.onInputChange }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </article>
          <article className="main-card">
            <h2>Pré-visualização</h2>
            <Card
              cardName={ nome }
              cardDescription={ descricao }
              cardAttr1={ attr01 }
              cardAttr2={ attr02 }
              cardAttr3={ attr03 }
              cardImage={ imagem }
              cardRare={ raridade }
              cardTrunfo={ superT }
            />
          </article>
        </section>
        <div className="div-cards">
          {banco.length > 0 ? (
            <section className="secCardsRender">
              <h2 className="dock">Cartas Salvas</h2>
              <div className="card-render">
                { renderCard
                  .map((item) => (
                    <div className="mini-cards" key={ item.id }>
                      <Card
                        key={ item.nome }
                        cardName={ item.nome }
                        cardDescription={ item.descricao }
                        cardAttr1={ item.attr01 }
                        cardAttr2={ item.attr02 }
                        cardAttr3={ item.attr03 }
                        cardImage={ item.imagem }
                        cardRare={ item.raridade }
                        cardTrunfo={ item.superT }
                      />
                      <button
                        className="button"
                        data-testid="delete-button"
                        type="button"
                        onClick={ () => this.removeCard(item) }
                      >
                        Excluir
                      </button>
                    </div>
                  ))}
              </div>
            </section>
          ) : <p />}
          <section className="filtro">
            <h2>Filtros de Busca</h2>
            <label htmlFor="filter">
              <input
                disabled={ filterTextDisable }
                data-testid="name-filter"
                name="filter"
                placeholder="Digite o nome da carta"
                type="text"
                value={ filter }
                onChange={ this.onInputChange }
              />
            </label>
            <select
              className="selectLabel"
              disabled={ filterSelectDisable }
              type="select"
              data-testid="rare-filter"
              name="filterSelect"
              value={ filterSelect }
              onChange={ this.onInputChange }
            >
              <option value="">todas</option>
              <option value="Normal">Normal</option>
              <option value="Raro">Raro</option>
              <option value="Muito Raro">Muito Raro</option>
            </select>
            <label htmlFor="filterSuperT">
              Super Trunfo
              <input
                checked={ filterSuperT }
                data-testid="trunfo-filter"
                name="filterSuperT"
                type="checkbox"
                value={ filterSuperT }
                onChange={ this.onInputChange }
              />
            </label>
            <button
              className="button"
              type="submit"
              onClick={ this.searchAll }
            >
              Show All
            </button>
          </section>
        </div>
      </div>
    );
  }
}
export default App;
*/
