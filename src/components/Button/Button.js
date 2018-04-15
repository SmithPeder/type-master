import React, { Component } from 'react';
import styles from './Button.css';
class Button extends Component {
  render() {
    return (
      <button className={styles.root} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
