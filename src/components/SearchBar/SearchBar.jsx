import './SearchBar.css';
import {connect} from 'react-redux';
import React, { useEffect } from 'react';
import { searchVideos } from '../../store/actions/searchActions';

const SearchBar = props => {

    const searchAbout = e => {
        
        if(e.keyCode === 13) {
            const term = e.target.value;
            props.searchVideos(term);
        }
    };

    useEffect(() => {
        return props.searchVideos('Top videos');
    }, [props]);

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
        searchVideos: (term) => dispatch(searchVideos(term))
    }
};

export default connect(null, mapDispatchToProps)(SearchBar);