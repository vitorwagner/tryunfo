import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends Component {
  state = {
    nameQuery: '',
    rarityQuery: '',
    trunfoQuery: '',
  };

  handleNameFilter = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  rarityCheck = (query, card) => {
    switch (query) {
    case 'normal':
      return card.rarity === 'normal';
    case 'raro':
      return card.rarity === 'raro';
    case 'muito raro':
      return card.rarity === 'muito raro';
    default:
      return true;
    }
  };

  render() {
    const { deck, handleDelete } = this.props;

    const { nameQuery, rarityQuery, trunfoQuery } = this.state;

    const deckFiltered = deck.filter((card) => card.name.includes(nameQuery))
      .filter((card) => this.rarityCheck(rarityQuery, card));
      // .filter((card) => card.trunfo.includes(trunfoQuery));

    return (
      <>
        <input
          value={ nameQuery }
          name="nameQuery"
          type="text"
          onChange={ this.handleNameFilter }
          data-testid="name-filter"
        />
        <select
          data-testid="rare-filter"
          name="rarityQuery"
          value={ rarityQuery }
          onChange={ this.handleNameFilter }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <div>
          {deckFiltered.map((card) => (
            <div key={ card.name }>
              <div>
                <Card
                  cardName={ card.name }
                  cardDescription={ card.description }
                  cardAttr1={ card.attr1 }
                  cardAttr2={ card.attr2 }
                  cardAttr3={ card.attr3 }
                  cardImage={ card.image }
                  cardRare={ card.rarity }
                  cardTrunfo={ card.trunfo }
                />
              </div>
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => handleDelete(card.name, card.trunfo) }
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

Deck.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
    attr1: PropTypes.string,
    attr2: PropTypes.string,
    attr3: PropTypes.string,
    rare: PropTypes.string,
    trunfo: PropTypes.bool,
  })).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Deck;
