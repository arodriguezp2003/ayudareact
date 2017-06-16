import React, { Component } from 'react';
import Deptos from './deptos';
import firebase from 'firebase';
import config from './config';
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Deptos/>
      </div>
    );
  }
}

export default App;
