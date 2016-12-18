/**
 * Created by Harry on 12/11/2016.
 */
import React,{Component} from 'react';

const VideoDetails=({video})=>{
    if (!video) {
        return <div>Loading...</div>;
    }
   const videoId=video.id.videoId;
    const videoDescription=video.snippet.description;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    const videoTitle = video.snippet.title;
    return(
        <div>
            <div><h3>{videoTitle}</h3></div>
            <div><iframe className="videoiFrameDesc" src={videoUrl}></iframe></div>
            <div>{videoDescription}</div>
        </div>
    )
}


export default VideoDetails;