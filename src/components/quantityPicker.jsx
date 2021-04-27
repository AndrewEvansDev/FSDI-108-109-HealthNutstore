import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
    name: "Andrew",
  };
  render() {
    return (
      <div className="quantity-picker">
        <button className="btn btn-sm" onClick={this.decrease}>
          -
        </button>
        <label>{this.state.quantity}</label>
        <button className="btn btn-sm" onClick={this.increase}>
          +
        </button>
      </div>
    );
  }
  increase = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  decrease = () => {
    if (this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };
}

export default QuantityPicker;
