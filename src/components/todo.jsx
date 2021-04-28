import React, { Component } from "react";

class GroceryList extends Component {
  state = {
    food: "",
    list: [],
  };
  render() {
    return (
      <div className="listWrap">
        <select value={this.state.food} onChange={this.ontextChange}>
          <option disabled value="">
            Select
          </option>
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="pear">Pear</option>
        </select>

        <button onClick={this.addFood}>Add</button>

        <ul className="food-list">
          {this.state.list.map((food) => (
            <li>{food}</li>
          ))}
        </ul>
      </div>
    );
  }

  ontextChange = (e) => {
    this.setState({ food: e.target.value });
  };
  addFood = () => {
    var copy = this.state.list;
    copy.push(this.state.food.value);
    this.setState({ food: copy, food: "" });
  };
}

export default GroceryList;

/*
 * create an array on the state
 * push the text to the array on click
 * display the list of foods
 *
 */
