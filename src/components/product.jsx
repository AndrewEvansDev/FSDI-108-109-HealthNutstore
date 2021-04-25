import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <img src="https://picsum.photos/200" class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Product</h5>
          <p className="card-text">
            A bunch of stuff written a bout the product!.
          </p>
          <QuantityPicker></QuantityPicker>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    );
  }
}
export default Product;
