import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Word from './components/Word';
import Sentence from './components/Sentence';
import Typefelt from './components/Typefelt';
import sortBy from 'lodash/sortBy';
import Container from './components/Container';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      typed: '',
      sentence: 'The sole advantage of power is that you can do more good'
    };
  }

  onNewLetter(letters) {
    this.setState({ typed: letters.join('') });

    console.log('TYPED: ' + letters.join(''));
    console.log('SENTENCE: ' + this.state.sentence);
  }


  render() {
    return (
      <div>
        <Header title="Type Master" />
        <Container>
          <Sentence sentence={this.state.sentence} typed={this.state.typed} />
          <Typefelt onNewLetter={this.onNewLetter.bind(this)} />
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
