import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import Main from './components/common/Main';

const App = () => {
  return (
    <div>
      <Header title='Type Master'/>
      <Main />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
