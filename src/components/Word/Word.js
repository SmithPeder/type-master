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
    const gruopedLetters = this.state.wordToMatch.map((letter, index) => (
      <Letter
        value={
          this.state.lettersTyped.length <= index
            ? null
            : this.state.lettersTyped[index] == this.state.wordToMatch[index]
        }
        letter={letter}
      />
    ));

    return (
      <div>
        <div className={styles.root}>{gruopedLetters}</div>
        <p>{this.props.lettersTyped}</p>
        <p>{this.state.lettersTyped}</p>
      </div>
    );
  }
}

export default Word;
