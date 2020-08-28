import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import Header from './components/header';

const App = () => {
  return (
    <Header/>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));