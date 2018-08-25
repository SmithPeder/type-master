import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Word from './components/Word';
import Sentence from './components/Sentence';
import Typefelt from './components/Typefelt';
import Container from './components/Container';
import Button from './components/Button';
import data from './sentences.js';

class App extends Component {
  constructor() {
    super();
    this.state={
      index: 0,
      typed: '',
      sentence: data[1].sentence
    };
    console.log(data);
  }

  onNewLetter(letters) {
    this.setState({ typed: letters.join('') });
  }

  next() {
    this.setState({ index: this.state.index+1, typed: ''});
  }

  render() {
    return (
      <div>
        <Header title="Type Master" />
        <Container>
          <Sentence sentence={this.state.sentence} typed={this.state.typed} />
          <Typefelt onNewLetter={this.onNewLetter.bind(this)} typed={this.state.typed} />
          <Button text="Neste" onClick={this.next.bind(this)} />
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
