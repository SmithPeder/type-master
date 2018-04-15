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
    console.log(input);
    this.setState({ lettersTyped: input });
  }

  render() {
    return (
      <div>
        <Word
          wordToMatch={this.props.wordToMatch}
          lettersTyped={this.state.lettersTyped.join('')}
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
