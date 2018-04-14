import React, { Component } from 'react';
import Word from '../Word';
import styles from './Typefelt.css';

class Typefelt extends Component {
  constructor() {
    super();
    this.state = {
      letters: []
    };
  }

  update() {
    console.log('HE');
    //this.setState({ letters: getElementById('in').value.split('') });
  }

  render() {
    return (
      <div>
        <input id="in" className={styles.root} onChange={this.update} />
      </div>
    );
  }
}

export default Typefelt;
