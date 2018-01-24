import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video-list';
import VideoDetail from './Components/video-detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyAAKc2wpNrtgvnahA3JTOisGJfCNnhdwa8';

// Create the component to generate the HTML



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo : null,
            seacrhTerm : ""
        };
        YTSearch({ key: API_KEY, term: this.state.searchTerm }, (videos) => {
            this.setState({videos : videos,
            selectedVideo : videos[0]
            });
            console.log(videos);
        });
        

        this.searchVideos = this.searchVideos.bind(this);

    }

    searchVideos(term){
        //let term = event.target.parentElement.children[1].value; 
         
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({videos : videos,
            selectedVideo : videos[0]
            });
            console.log(videos);
        }); 

        
    }


    render() {
        const videoSearch = _.debounce((term) => {this.searchVideos(term)}, 500)
        return (
            <div>
                <SearchBar searchVideos = {videoSearch}/>
                <VideoDetail selectedVideo = {this.state.selectedVideo} />
                <VideoList videos = {this.state.videos} onVideoSelect = {selectedVideo => this.setState({selectedVideo})}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
// document.qureySelector('#root');