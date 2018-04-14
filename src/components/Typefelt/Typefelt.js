import React, { Component } from 'react';
import Word from '../Word';
import styles from './Typefelt.css';

class Typefelt extends Component {
  constructor() {
    super();
    this.state = {
      lettersTyped: []
    };
  }

  update() {
    let input = document.getElementById('userInput').value.split('');
    this.setState({ lettersTyped: input });
  }

  render() {
    return (
      <div>
        <Word
          wordToMatch={this.props.wordToMatch.toUpperCase()}
          lettersTyped={this.state.lettersTyped
            .join()
            .replace(/,/g, '')
            .toUpperCase()}
        />
        <input
          id="userInput"
          className={styles.root}
          onChange={this.update.bind(this)}
        />
      </div>
    );
  }
}

export default Typefelt;