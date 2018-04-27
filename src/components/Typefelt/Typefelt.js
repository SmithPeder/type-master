import React, { Component } from 'react';
import styles from './Typefelt.css';

class Typefelt extends Component {
  update() {
    let input = document.getElementById('userInput').value.split('');
    this.props.onNewLetter(input);
  }

  render() {
    return (
      <div>
        <input
          id="userInput"
          className={styles.root}
          onChange={this.update.bind(this)}
          value={this.props.typed}
        />
      </div>
    );
  }
}

export default Typefelt;
