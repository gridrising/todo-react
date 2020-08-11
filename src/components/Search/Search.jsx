import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { connect } from "react-redux";
import { searchByText } from "../redux/actions/actions";

export const Search = ({ searchByText }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    searchByText(text);
  }, [text]);
  return (
    <>
      <input
        className={styles.searchInput}
        type='search'
        onChange={handleChange}
        value={text}
      />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  searchByText,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
