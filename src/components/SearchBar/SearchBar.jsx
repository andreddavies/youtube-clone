import './SearchBar.css';
import React from 'react';
import {connect} from 'react-redux';
import { searchVideos } from '../../store/actions/searchActions';

const SearchBar = props => {

    const searchAbout = e => {
        
        if(e.keyCode === 13) {
            const term = e.target.value;
            props.searchVideo(term);
        }
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search..." 
                onKeyDown={(e) => searchAbout(e)}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchVideo: (term) => dispatch(searchVideos(term))
    }
};

export default connect(null, mapDispatchToProps)(SearchBar);