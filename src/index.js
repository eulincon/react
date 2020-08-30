import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

// COMPONENTS
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component{
  state = {
    news:JSON
  }
  render(){
    return(
      <>
        <Header/>
        <NewsList news={this.state.news} donkey="Me">
          Hello dudes
        </NewsList>
      </>

    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));