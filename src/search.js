import React from 'react';
import "./search.css"


function SearchField({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="search-field">
      <label>
        <input className="search-input" type="text" name="country" autoComplete='off'  placeholder='Search Country here'/>
      </label>
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchField;
