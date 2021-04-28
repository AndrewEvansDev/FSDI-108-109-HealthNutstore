import React, { Component } from "react";
import "./product.css";
import ShoppingCart from "./cart";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product-wrap">
        <h5 className="product-title">
          {this.props.data.title} ${this.props.data.price}
        </h5>
        <div className="product-content-wrap">
          <img
            src={"/images/products/" + this.props.data.image}
            className="product-image"
            alt="..."
          />
          <div className="product-info">
            <ShoppingCart></ShoppingCart>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
