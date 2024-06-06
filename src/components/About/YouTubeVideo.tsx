import React from 'react';

const YouTubeVideo = () => (
    <iframe
        src="https://www.youtube.com/embed/0kChM02MPOU?si=B3ZRQfOQ7dFVKsjx"
        title="YouTube video player"
        className="youTube-video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
    />
);

export default YouTubeVideo;
