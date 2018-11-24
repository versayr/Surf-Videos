import React from 'react';

// if selectedVideo = null, redirect to "/"
// add back button

const Watch = ({video}) => {
  const url = `https://www.youtube.com/embed/{video.id.videoId}`;
  return (
    <div>
      <h2>
        {video.snippet.title}
    </h2>
    <iframe title={video.snippet.title} src={url}></iframe>
    <p>{video.snippet.description}</p>
    </div>
  );
};

export default Watch;
