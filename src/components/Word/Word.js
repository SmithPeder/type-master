import React, { Component } from 'react';
import Letter from '../Letter';
import styles from './Word.css';

class Word extends Component {
  constructor() {
    super();
    this.state = {
      typed: [''],
      wordToMatch: ['']
    };
  }

  componentWillMount() {
    const { wordToMatch, typed } = this.props;

    this.setState({
      wordToMatch: wordToMatch.split(''),
      typed: typed.split('')
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ typed: nextProps.typed.split(''), wordToMatch: nextProps.wordToMatch.split('')});
  }

  render() {
    const { typed, wordToMatch } = this.state;

    const groupedLetters = wordToMatch.map((letter, index) => (
      <Letter
        value={
          typed.length <= index ? null : typed[index] == wordToMatch[index]
        }
        letter={letter}
      />
    ));

    return <div className={styles.root}>{groupedLetters}</div>;
  }
}

export default Word;
