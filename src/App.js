import React, { Component } from 'react';
import './App.css';

import SearchBar     from './components/search_bar';
import SearchResults from './components/search_results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}

export default App;
