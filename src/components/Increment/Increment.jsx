import React from "react";
import { connect } from "react-redux";
import { increment } from "../redux/actions/actions";

const Increment = (props) => {
  return (
    <div style={{ color: "#fff" }}>
      <p>{props.number}</p>
      <button
        onClick={() => {
          props.increment();
        }}
      >
        Increment
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    number: state.number,
  };
};

const mapDispathToProps = {
  increment,
};

export default connect(mapStateToProps, mapDispathToProps)(Increment);
