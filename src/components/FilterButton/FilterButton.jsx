import React from "react";
import { connect } from "react-redux";
import { changeFilter } from "../redux/actions/actions";

export const FilterButton = ({ chosen, variety, changeFilter }) => {
  return (
    <button onClick={() => changeFilter(variety)} className={chosen}>
      {variety}
    </button>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
