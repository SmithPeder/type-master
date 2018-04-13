import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header title="Type Master" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
