import React, { Component } from 'react'
import ReactDOM from 'react-dom';

//Create a new component. Component always produce some HTML
import YTSearch from  'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from  './components/video_details';

const API_KEY = 'AIzaSyDHGIEh1NfjdCrl9g-ahOvcyHkfdqOTCbs';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo:null
        }
        this.videoSearch('modi');
    }
    videoSearch(term){
        YTSearch({key:API_KEY,term:term},videos=>{
            this.setState({
                   videos,selectedVideo:videos[0]
            });
        });
    };

    selectedVideofrmList(selectedVideo){
        this.setState({selectedVideo});
    }
    render(){
        return(
            <div>
                <SearchBar onSearchChange={term=>this.videoSearch(term)}/>
                 <VideoList
                    onVideoSelect={selectedVideo=>this.selectedVideofrmList(selectedVideo)}
                     videos={this.state.videos}
                 />
                <VideoDetails video={this.state.selectedVideo}/>
            </div>
        )
    }
}

//Place the component on the index.html page
ReactDOM.render( <App />, document.querySelector('.container'));
