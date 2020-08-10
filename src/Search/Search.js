import React from "react";
import styles from "./Search.module.css";

function Search({ searchText, handleChange }) {
  return (
    <div>
      <input
        className={styles.searchInput}
        type='search'
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}

export default Search;
