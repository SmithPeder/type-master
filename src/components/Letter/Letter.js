import React, { Component } from 'react';
import styles from './Letter.css';

class Letter extends Component {
  render() {
    const { value, letter } = this.props;

    return (
      <div>
        {value == true && (
          <div className={styles.green}>
            <p className={styles.text}>{letter}</p>
          </div>
        )}
        {value == false && (
          <div className={styles.red}>
            <p className={styles.text}>{letter}</p>
          </div>
        )}
        {value == null && (
          <div className={styles.grey}>
            <p className={styles.text}>{letter}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Letter;
