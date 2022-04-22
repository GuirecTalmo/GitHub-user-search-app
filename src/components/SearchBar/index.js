import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ username, setUsername, getAllDatas, }) {
  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getAllDatas();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 icon-search"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        className="inputSearch"
        type="text"
        name="search"
        placeholder="Search Github username..."
        onChange={handleChange}
        value={username}
      />
      <button type="submit">Search</button>
    </form>
  );
}



export default SearchBar;
