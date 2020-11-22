import React from "react";

const SearchBarComics = ({ searchComics, setSearchComics }) => {
  const handleSearch = (e) => {
    setSearchComics(e.target.value);
  };
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="What's in your mind ?"
          onChange={handleSearch}
          value={searchComics}
        />
      </div>
    </>
  );
};

export default SearchBarComics;
