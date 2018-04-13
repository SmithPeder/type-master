import React, { Component } from 'react';
import styles from './Main.css';

class Main extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h1 className={styles.text}>Main</h1>
      </div>
    );
  }
}

export default Main;
