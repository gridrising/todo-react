import React from "react";
import styles from "./FilterButtons.module.css";
import FilterButton from "../FilterButton/FilterButton";
import { connect } from "react-redux";

export const FilterButtons = ({ currentButton }) => {
  return (
    <div>
      <FilterButton
        chosen={
          currentButton === "all"
            ? styles.filterButtonChosen
            : styles.filterButton
        }
        variety='All'
      />
      <FilterButton
        chosen={
          currentButton === "completed"
            ? styles.filterButtonChosen
            : styles.filterButton
        }
        variety='Completed'
      />
      <FilterButton
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

const mapStateToProps = (state) => ({
  currentButton: state.currentButton,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButtons);
