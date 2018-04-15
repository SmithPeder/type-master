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

  componentWillReceiveProps(nextProps) {
    this.setState({ lettersTyped: nextProps.lettersTyped.split('') });
  }

  render() {
    const groupedLetters = this.state.wordToMatch.map((letter, index) => (
      <Letter
        value={
          this.state.lettersTyped.length <= index
            ? null
            : this.state.lettersTyped[index] == this.state.wordToMatch[index]
        }
        letter={letter}
      />
    ));

    let correctLetters = 0;
    for (let i = 0; i < groupedLetters.length; i++) {
      if (groupedLetters[i].props.value == true) {
        correctLetters = correctLetters + 1;
      }
    }

    return (
      <div>
        <div className={styles.root}>{groupedLetters}</div>
        <div className={styles.result}>
          {correctLetters} av {groupedLetters.length}
        </div>
      </div>
    );
  }
}

export default Word;
