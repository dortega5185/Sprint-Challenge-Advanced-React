import React, { useState, useEffect } from "react";
import Women from "./Women";

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = props.array.filter(
      (character) =>
        //    {console.log(character.name)
        character.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      // }
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form className="form">
        {/* this makes sure that when a user types it looks for the html that matches */}
        <label className="search" htmlFor="name">
          Search:
        </label>
        <input
          data-testid="name"
          id="name"
          type="text"
          name="textfield"
          placeholder="Filter by First Name"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      {searchResults.map((res) => {
        return <Women info={res} key={res.id} />;
      })}
    </div>
  );
};

export default SearchForm;
