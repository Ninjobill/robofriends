import React from 'react';
import '../containers/App.css';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                aria-label='Search Robots' 
                className='pa3 bqa b--green bg-lightest-blue search'
                type='search' 
                placeholder='Search Robots' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;