import './SearchBar.css';
import React from 'react';

const SearchBar = props => {

    const searchAbout = e => {
        
        if(e.keyCode === 13) {
            const about = e.target.value;
            console.log(about);
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

export default SearchBar;