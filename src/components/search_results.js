import React from 'react';

import VideoCard from './video_card';

const SearchResults = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoCard
      key={video.etag}
      video={video} 
      videoSelect={props.videoSelect}
      />;
  });

  return (
    <ul className="search-results">
      {videoItems}
    </ul>
  );
}

export default SearchResults;
