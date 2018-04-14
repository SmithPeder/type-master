import React, { Component } from 'react';
import styles from './Letter.css';

class Letter extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h1 className={styles.text}>{this.props.letter}</h1>
      </div>
    );
  }
}

export default Letter;
