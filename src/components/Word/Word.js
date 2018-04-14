import React, { Component } from 'react';
import Letter from '../Letter';
import styles from './Word.css';

class Word extends Component {
  constructor() {
    super();
    this.state = {
      lettersTyped: [],
      wordToMatch: []
    };
  }

  componentWillMount() {
    this.setState({
      lettersTyped: this.props.lettersTyped.split(''),
      wordToMatch: this.props.wordToMatch.split('')
    });
  }

  componentWillReceiveProps() {
    this.setState({ lettersTyped: this.props.lettersTyped.split('') });
  }

  render() {
    console.log('lettersTyped: ' + this.state.lettersTyped);
    console.log('wordToMatch: ' + this.state.wordToMatch);

    const gruopedLetters = this.state.lettersTyped.map((letter, index) => (
      <Letter
        value={this.state.lettersTyped[index] == this.state.wordToMatch[index]}
        letter={letter}
      />
    ));

    const greyword = this.state.wordToMatch.map(l => (
      <Letter value={null} letter={l} />
    ));

    return (
      <div>
        <div className={styles.root}>{greyword}</div>
        <div className={styles.root}>{gruopedLetters}</div>
      </div>
    );
  }
}

export default Word;
