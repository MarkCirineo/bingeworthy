import React from 'react';

const SearchBox = (props) => {
    return (
        <div className= 'col col-sm-4'>
            <input
            className = 'form-movie-search'
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder= 'Search your movie here'
            ></input>
        </div>
    );
};

export default SearchBox;