/**
 * Created by Harry on 12/11/2016.
 */
import React, {Component} from "react";

import VideoItem from './video_item';

const VideoList=({videos,onVideoSelect})=>{

    const videoItems=videos.map((video)=>{
       return <VideoItem
           onVideoSelect={videoObj=>onVideoSelect(videoObj)}
           key={video.etag}
           video={video}
            />
    });
    return(
        <div className="videolList">
            <ul className="ul-list">{videoItems}
            </ul>
        </div>
    );


}

export default VideoList;