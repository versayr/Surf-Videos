import React from 'react';

const VideoCard = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="video-card">
      <h2>{video.snippet.title}</h2>
      <img src={imageUrl} alt="" />
      <span>{video.snippet.description}</span>
    </li>
  );
};

export default VideoCard;
