import React from "react";
import styles from "./FilterButtons.module.css";
import FilterButton from "../FilterButton/FilterButton";

const FilterButtons = ({ currentButton, handleClick }) => {
  return (
    <div>
      <FilterButton
        handleClick={handleClick}
        chosen={
          currentButton === "all"
            ? styles.filterButtonChosen
            : styles.filterButton
        }
        variety='All'
      />
      <FilterButton
        handleClick={handleClick}
        chosen={
          currentButton === "completed"
            ? styles.filterButtonChosen
            : styles.filterButton
        }
        variety='Completed'
      />
      <FilterButton
        handleClick={handleClick}
        chosen={
          currentButton === "uncompleted"
            ? styles.filterButtonChosen
            : styles.filterButton
        }
        variety='Uncompleted'
      />
    </div>
  );
};

export default FilterButtons;
