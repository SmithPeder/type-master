import React, { Component } from 'react';
import Word from '../Word';
import styles from './Sentence.css';

class Sentence extends Component {
  render() {
    const typed = this.props.typed.split(' ');
    const words = this.props.sentence
      .split(' ')
      .map((word, index) => (
        <Word wordToMatch={word} typed={typed[index] ? typed[index] : ''} />
      ));

    return <div className={styles.root}>{words}</div>;
  }
}

export default Sentence;
