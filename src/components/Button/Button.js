import React, { Component } from 'react';
import styles from './Button.css';
class Button extends Component {
  render() {
    const { onClick, text } = this.props;

    return (
      <button className={styles.root} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
