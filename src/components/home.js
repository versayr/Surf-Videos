import React from 'react';
import SearchBar     from './search_bar';
import SearchResults from './search_results';

const Home = (props) => {
  return (
    <div>
      <SearchBar search={props.search} />
      <SearchResults 
        videos={props.videos} 
        videoSelect={props.videoSelect}
      />
    </div>
  );
};

export default Home;
