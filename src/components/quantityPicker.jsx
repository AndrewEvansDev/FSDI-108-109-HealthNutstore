import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: 0,
    name: "Andrew",
  };
  render() {
    return (
      <div className="quantity-picker">
        <div className="plusminus-wrap">
          <span>{this.state.quantity}</span>
          <span onClick={this.increase}>+</span>
          <span onClick={this.decrease}>-</span>
        </div>
        <div className="icon-cart-wrap"></div>
      </div>
    );
  }
  increase = () => {
    var newQnty = this.state.quantity + 1;
    this.setState({ quantity: newQnty + 1 });
    this.props.onValueChange();
  };
  decrease = () => {
    var newQnty = this.state.quantity;
    if (newQnty > 0) {
      this.setState({ quantity: newQnty - 1 });
      this.props.onValueChange();
    }
  };
}

export default QuantityPicker;
