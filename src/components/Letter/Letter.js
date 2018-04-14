import React, { Component } from 'react';
import styles from './Letter.css';

class Letter extends Component {
  render() {
    return (
      <div>
        {this.props.value === true && (
          <div className={styles.green}>
            <h1 className={styles.text}>{this.props.letter}</h1>
          </div>
        )}
        {this.props.value === false && (
          <div className={styles.red}>
            <h1 className={styles.text}>{this.props.letter}</h1>
          </div>
        )}
        {this.props.value === null && (
          <div className={styles.grey}>
            <h1 className={styles.text}>{this.props.letter}</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Letter;
