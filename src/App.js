import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form />
        <Card />
      </>
    );
  }
}

export default App;
