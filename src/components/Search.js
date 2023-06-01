import React from 'react';
import { useAppContext } from '../context/app-context';

function Search() {
  const { searchText, onSearch } = useAppContext();
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchText}
        placeholder="Type a name to search..."
        onChange={e => onSearch(e)}
      />
    </div>
  );
}

export default Search;
