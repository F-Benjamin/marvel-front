import React from "react";

const SearchBarCharacters = ({ searchCharacter, setSearchCharacter }) => {
  const handleSearch = (e) => {
    setSearchCharacter(e.target.value);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="What's in your mind ?"
          onChange={handleSearch}
          value={searchCharacter}
        />
      </div>
    </>
  );
};

export default SearchBarCharacters;
