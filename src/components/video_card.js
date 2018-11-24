import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = (props) => {
  const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li 
      className="video-card"
      onClick={() => props.videoSelect(video)}
    >
      <Link to="/watch">
        <img src={imageUrl} alt="" />
        <div>
          <h3>{video.snippet.title}</h3>
          <span>{video.snippet.description}</span>
    </div>
    </Link>
    </li>
  );
};

export default VideoCard;
