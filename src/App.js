import React, { Component }             from 'react';
import YTSearch                         from 'youtube-api-search';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import Watch from './components/watch';

const API_KEY = 'AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
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
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/"      
              render={
                (props) => 
                  <Home search={this.search} videos={this.state.videos} />
              }
            />
            <Route path="/watch" component={Watch} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
