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
        <span className="plus" onClick={this.increase}>
          +
        </span>

        <span className="qnt">{this.state.quantity}</span>
        <span className="minus" onClick={this.decrease}>
          -
        </span>
      </div>
    );
  }
  increase = () => {
    var newQnty = this.state.quantity + 1;
    this.setState({ quantity: newQnty });
    this.props.onValueChange(newQnty);
  };
  decrease = () => {
    var Qnty = this.state.quantity;
    if (Qnty > 0) {
      var newQnty = this.state.quantity - 1;
      this.setState({ quantity: newQnty });
      this.props.onValueChange(newQnty);
    }
  };
}

export default QuantityPicker;
