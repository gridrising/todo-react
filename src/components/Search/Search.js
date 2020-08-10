import React from "react";
import styles from "./Search.module.css";

function Search({ searchText, handleChange }) {
  return (
    <input
      className={styles.searchInput}
      type='search'
      onChange={handleChange}
      value={searchText}
    />
  );
}

export default Search;
