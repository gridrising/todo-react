import React from "react";

const FilterButton = ({ handleClick, chosen, variety }) => {
  return (
    <button onClick={handleClick} className={chosen}>
      {variety}
    </button>
  );
};

export default FilterButton;
