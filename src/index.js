import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Word from './components/Word';
import Typefelt from './components/Typefelt';
import sortBy from 'lodash/sortBy';
let data = require('./sentences.json');

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataIndex: 0
    };
  }

  nextSentence() {
    this.setState({ dataIndex: this.state.dataIndex++ });
  }

  render() {
    return (
      <div>
        <Header title="Type Master" />
        <Typefelt wordToMatch="APEKATT" />
        <button onClick={this.nextSentence.bind(this)}>Next</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
