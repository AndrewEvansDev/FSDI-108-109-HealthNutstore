import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import QuantityPicker from "./quantityPicker";

class ShoppingCart extends Component {
  state = {
    price: 0,
  };
  render() {
    return (
      <div>
        <QuantityPicker
          onValueChange={this.handleQuantityChange}
        ></QuantityPicker>
        <FontAwesomeIcon icon={faCartPlus} className="cart-icon" size="3x" />
      </div>
    );
  }
  handleQuantityChange = (qty) => {
    this.setState({ total: qty });
  };
}

export default ShoppingCart;
