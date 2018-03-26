import React, { Component } from 'react';
import './style.css';

class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state ={
            wordValue:""
        }
    }
    handleChange(e){
        this.setState({
            wordValue:e.target.value
        },function () {
            let {handleFilter} = this.props;
            let {wordValue} = this.state;
            handleFilter(wordValue);
        });
    }
    render() {
        let {wordValue} = this.state;
        return (
            <div className="searchBox">
                <i className="searchIcon"></i>
                <input placeholder="NAME" value={wordValue} onChange={this.handleChange.bind(this)} type="text"/>
            </div>
        );
    }
}

export default SearchBox;
