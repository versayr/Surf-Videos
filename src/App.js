import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';

import SearchBar     from './components/search_bar';
import SearchResults from './components/search_results';

const API_KEY = 'AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };
    this.search = this.search.bind(this);
    this.search('');
  }

  search(searchTerm) {
    console.log(searchTerm);
    YTSearch({key: API_KEY, term: `surf ${searchTerm}`}, (videos) => {
      this.setState({
        videos: videos
      });
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar search={this.search} />
        <SearchResults videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
