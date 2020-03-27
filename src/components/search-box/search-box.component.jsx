import React from 'react';

import './search-box.style.css';

export const SearchBox = ({placeholder, handleChange}) => (
  <input
    className='search'
    placeholder={placeholder}
    type='search'
    onChange={handleChange}
  />
);