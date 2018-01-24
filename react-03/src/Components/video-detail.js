import React from 'react';

// Receive single video and show it on Screen
const VideoDetail = ({selectedVideo}) => {
    if(!selectedVideo){
        return "Loading......."
    }
    const videoId = selectedVideo.id.videoId;
    const url = "https://www.youtube.com/embed/" + videoId;

    return(
        <div className = "video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} title = "video"></iframe>
            </div>

            <div className="details">
                <div>{selectedVideo.snippet.title}</div>
                <div>{selectedVideo.snippet.description}</div>
            </div>
        </div>
        
    );
};

export default VideoDetail;