/**
 * Created by Harry on 12/11/2016.
 */
import React, {Component} from "react";

import VideoItem from './video_item';

const VideoList=({videos})=>{

    const videoItems=videos.map((video)=>{
       return <VideoItem
           key={video.etag}
           video={video}
           onVideoSelect={videos.onVideoSelect} />
    });
    return(
        <div>
            <ul>{videoItems}
            </ul>
        </div>
    );


}

export default VideoList;