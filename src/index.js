import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Word from './components/Word';
import Sentence from './components/Sentence';
import Typefelt from './components/Typefelt';
import Container from './components/Container';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      typed: '',
      sentence: 'The sole advantage of power is that you can do more good',
    };
  }

  onNewLetter(letters) {
    this.setState({ typed: letters.join('') });
  }

  next() {
    this.setState({sentence: 'Neste setning er', typed: ''});
  }

  render() {
    return (
      <div>
        <Header title="Type Master" />
        <Container>
          <Sentence sentence={this.state.sentence} typed={this.state.typed} />
          <Typefelt onNewLetter={this.onNewLetter.bind(this)} />
          <Button text="Neste" onClick={this.next.bind(this)} />
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
