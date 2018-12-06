import React from 'react';
import { Link } from 'react-router-dom';

// if selectedVideo = null, redirect to "/"

const Watch = ({video}) => {
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>
        {video.snippet.title}
      </h2>
      <iframe title={video.snippet.title} src={url}></iframe>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default Watch;
