import React, { Component } from 'react';

import VideoCard from './video_card';

class SearchResults extends Component {
  render() {
    return (
      <div className="search-results">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    );
  }
}

export default SearchResults;
