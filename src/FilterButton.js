import React from "react";

const FilterButton = ({ handleClick, chosen, variety }) => {
  return (
    <button onClick={handleClick} className={"filter-button" + chosen}>
      {variety}
    </button>
  );
};

export default FilterButton;
