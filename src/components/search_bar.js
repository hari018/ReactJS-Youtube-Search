import React, { Component } from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            term:'Modi'
        };
    }

    render(){
        return(
            <input className="searchBox" value={this.state.term} placeholder="search video" onChange={event=>this.inputChange(event.target.value)}/>
        )
    }
    inputChange(term){
        this.setState({term});
        this.props.onSearchChange(term);
    }
}

export default SearchBar;
