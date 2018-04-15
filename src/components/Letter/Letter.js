import React, { Component } from 'react';
import styles from './Letter.css';

class Letter extends Component {
  render() {
    return (
      <div>
        {this.props.value == true && (
          <div className={styles.green}>
            <p className={styles.text}>{this.props.letter}</p>
          </div>
        )}
        {this.props.value == false && (
          <div className={styles.red}>
            <p className={styles.text}>{this.props.letter}</p>
          </div>
        )}
        {this.props.value == null && (
          <div className={styles.grey}>
            <p className={styles.text}>{this.props.letter}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Letter;
