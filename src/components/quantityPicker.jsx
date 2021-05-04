import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: this.props.minimum,
    name: "Andrew",
  };
  render() {
    return (
      <div className="quantity-picker">
        <button className="plus" onClick={this.increase}>
          +
        </button>

        <label className="qnt">{this.state.quantity}</label>
        <button className="minus" disabled={this.state.quantity === this.props.minimum} onClick={this.decrease}>
          -
        </button>
      </div>
    );
  }
  increase = () => {
    var newQnty = this.state.quantity + 1;
    this.setState({ quantity: newQnty });
    this.props.onValueChange(newQnty);
  };
  decrease = () => {
    var qnty = this.state.quantity;
    if (qnty >= this.props.minimum) {
      var newQnty = this.state.quantity - 1;
      this.setState({ quantity: newQnty });
      this.props.onValueChange(newQnty);
    }
  };
}

export default QuantityPicker;
