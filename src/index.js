import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Word from './components/Word';
import Typefelt from './components/Typefelt';

const App = () => {
  return (
    <div>
      <Header title="Type Master" />
      <Word word="HELLO" />
      <Typefelt />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
