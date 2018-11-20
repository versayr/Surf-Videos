import React from 'react';

const VideoCard = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="video-card">
      <img src={imageUrl} alt="" />
      <div>
        <h3>{video.snippet.title}</h3>
        <span>{video.snippet.description}</span>
      </div>
    </li>
  );
};

export default VideoCard;
