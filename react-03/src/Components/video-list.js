import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({videos , onVideoSelect}) => {
    if(!videos){
        return "Loading ......";
    }

    const videoListGenerator = videos.map((video) => {
        return (<VideoListItem key = {video.etag} video={video} onVideoSelect = {() => onVideoSelect(video)} />
        );
    });
    
    return (

    <div className="video-list col-md-4 list-group">
        <ul>
            {videoListGenerator}
        </ul>
    </div>

    );
};
    

export default VideoList;