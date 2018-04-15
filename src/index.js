import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Word from './components/Word';
import Typefelt from './components/Typefelt';
import sortBy from 'lodash/sortBy';
import Container from './components/Container';
import Button from './components/Button';
let data = require('./sentences.json');

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataIndex: 0
    };
  }

  nextSentence() {
    this.setState({ dataIndex: this.state.dataIndex + 1 });
  }

  render() {
    console.log(this.state.dataIndex);
    return (
      <div>
        <Header title="Type Master" />
        <Container>
          <Typefelt wordToMatch="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
          <Button onClick={this.nextSentence.bind(this)} text={'Neste'} />
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
