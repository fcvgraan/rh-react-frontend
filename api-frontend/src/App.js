import React, { Component } from 'react';
import Types from './components/types';
import Verbs from './components/verbs';

class App extends Component {

  state = {
    types: [],
    verbs: []
  }
  
  componentDidMount() {
    fetch('https://europe-west2-runninghill.cloudfunctions.net/nodejs-mongodb-atlas-api',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({database: 'data',collection: 'types',method: 'get'},
        )
      })
      .then(res => res.json())
      .then((data) => {
        this.setState({ types: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <Types types={this.state.types} />
    );
  }

}

export default App;