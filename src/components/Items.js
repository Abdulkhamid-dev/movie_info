import React from "react";
import Item from "./Item";

function Items({ result, openPop }) {
  if (!result.loading) {
    <div>
      <h1>Loading...</h1>
    </div>
  }
  return (
    <div className="results">
      {result.result.map((result) => (
        <Item key={result.imdbID} result={result} openPop={openPop} />
      ))}
    </div>
  );
}

export default Items;
