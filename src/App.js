import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      image: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      rarity: 'normal',
      trunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
      hasTrunfo: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      const {
        name, description, attr1, attr2, attr3, image,
      } = this.state;
      const maxAttr = 90;
      const attrTotal = 210;
      const newButtonDisabledState = name.length === 0
      || description.length === 0
      || image.length === 0
      || (attr1 > maxAttr || attr1 < 0)
      || (attr2 > maxAttr || attr2 < 0)
      || (attr3 > maxAttr || attr3 < 0)
      || (parseInt(attr1, 10) + parseInt(attr2, 10) + parseInt(attr3, 10) > attrTotal);

      this.setState({
        isSaveButtonDisabled: newButtonDisabledState,
      });
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      name, description, attr1, attr2, attr3,
      image = '', rarity = 'normal', trunfo, hasTrunfo, imgUrl,
    } = this.state;
    this.setState((previousState) => ({
      deck: [...previousState.deck, {
        name,
        description,
        attr1,
        attr2,
        attr3,
        image,
        rarity,
        trunfo,
        imgUrl,
      }],
    }), () => {
      this.setState({
        name: '',
        description: '',
        attr1: 0,
        attr2: 0,
        attr3: 0,
        image: '',
        rarity: 'normal',
        hasTrunfo: trunfo || hasTrunfo,
        trunfo: false,
        isSaveButtonDisabled: true,
        imgUrl: '',
      });
    });
  };

  handleDelete = (name, trunfo) => {
    const { deck } = this.state;
    const newDeck = deck.filter((card) => card.name !== name);
    this.setState({ deck: newDeck });
    if (trunfo) {
      this.setState({ hasTrunfo: false });
    }
  };

  render() {
    const {
      name, description, attr1, attr2, attr3, image,
      rarity, trunfo, isSaveButtonDisabled, hasTrunfo, deck,
    } = this.state;

    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.handleSubmit }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
        />
        <Deck deck={ deck } handleDelete={ this.handleDelete } />
      </>
    );
  }
}

export default App;
