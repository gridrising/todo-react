import React, { Component } from "react";
import "./filterButtons.css";
import FilterButton from "./FilterButton";

export class FilterButtons extends Component {
  state = {
    currentButton: "all",
  };
  handleClick = (e) => {
    switch (e.target.textContent) {
      case "All":
        this.setState({
          currentButton: "all",
        });
        break;
      case "Completed":
        this.setState({
          currentButton: "completed",
        });
        break;
      case "Uncompleted":
        this.setState({
          currentButton: "uncompleted",
        });
        break;
      default:
        break;
    }
  };
  render() {
    const styleForChosen = " filter-button--chosen";
    return (
      <div>
        <FilterButton
          handleClick={this.handleClick}
          chosen={this.state.currentButton === "all" ? styleForChosen : ""}
          variety='All'
        />
        <FilterButton
          handleClick={this.handleClick}
          chosen={
            this.state.currentButton === "completed" ? styleForChosen : ""
          }
          variety='Completed'
        />
        <FilterButton
          handleClick={this.handleClick}
          chosen={
            this.state.currentButton === "uncompleted" ? styleForChosen : ""
          }
          variety='Uncompleted'
        />
      </div>
    );
  }
}

export default FilterButtons;
