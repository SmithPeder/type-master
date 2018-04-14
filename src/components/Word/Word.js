import React, { Component } from 'react';
import Letter from '../Letter';
import styles from './Word.css';

class Word extends Component {
  constructor() {
    super();
    this.state = {
      letters: []
    };
  }
  componentWillMount() {
    this.setState({ letters: this.props.word.split('') });
  }

  render() {
    const gruopedLetters = this.state.letters.map(l => <Letter letter={l} />);

    return <div className={styles.root}>{gruopedLetters}</div>;
  }
}

export default Word;
