import React from "react";

function Search(props) {
  return (
    <div className="searchbox_wrapper">
      <input
        type="text"
        onChange={props.handler}
        placeholder="Search movie"
        className="searchbox"
        onKeyPress={props.search}
      />
    </div>
  );
}

export default Search;
