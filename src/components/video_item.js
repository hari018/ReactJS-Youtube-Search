/**
 * Created by Harry on 12/11/2016.
 */
import React,{Component} from 'react';

const VideoItem=({video,onVideoSelect})=>{
    console.log("==="+onVideoSelect);
    const imageUrl=video.snippet.thumbnails.default.url;
    return (
      <li onClick={()=> onVideoSelect(video)}>
          <img src={imageUrl}/>
      </li>
    );

}


export default VideoItem;