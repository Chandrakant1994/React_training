import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const url = video.snippet.thumbnails.default.url;

    return(
        <li className = "video-list-item list-group-item media"  onClick = {() => onVideoSelect(video)}>
            <div className="medium-left" >
                <img className="media-object" src={url} alt = "video" />
                
            </div>
            <div className="media-body">
                <div className="media-heading"></div>
                {video.snippet.title}
            </div>
        </li>
    )
}

export default VideoListItem;