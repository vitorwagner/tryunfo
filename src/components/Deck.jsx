import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends Component {
  state = {
    nameQuery: '',
  };

  handleNameFilter = (event) => {
    console.log(event.target.value);
    this.setState({ nameQuery: event.target.value });
  };

  render() {
    const { deck, handleDelete } = this.props;

    const { nameQuery } = this.state;

    const deckFiltered = deck.filter((card) => card.name.includes(nameQuery));

    return (
      <>
        <input
          value={ nameQuery }
          name="nameQuery"
          type="text"
          onChange={ this.handleNameFilter }
          data-testid="name-filter"
        />
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
                  cardImage={ card.imgUrl }
                  cardRare={ card.rare }
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
