import React, { Component } from 'react';
import styles from './Container.css';

class Container extends Component {
  render() {
    const { children } = this.props;

    return <div className={styles.root}>{children}</div>;
  }
}

export default Container;
