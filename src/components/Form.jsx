import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <section>
        <input type="text" data-testid="name-input" name="" id="" />
        <input type="textarea" data-testid="description-input" />
        <input type="number" data-testid="attr1-input" name="" id="" />
        <input type="number" data-testid="attr2-input" name="" id="" />
        <input type="number" data-testid="attr3-input" name="" id="" />
        <input type="text" data-testid="image-input" name="" id="" />
        <label htmlFor="Rarity">
          Raridade:
          <select data-testid="rare-input" id="Rarity">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <input type="checkbox" data-testid="trunfo-input" name="" id="" />
        <button type="submit" data-testid="save-button">Salvar</button>
      </section>
    );
  }
}

export default Form;
