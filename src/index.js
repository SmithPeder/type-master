import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import Main from './components/common/Main';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
