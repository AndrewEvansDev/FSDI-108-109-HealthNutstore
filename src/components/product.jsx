import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <img
          src={"/images/products/" + this.props.data.image}
          class="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.data.title}</h5>
          <p className="card-text">
            A bunch of stuff written a bout the product!.
          </p>
          <QuantityPicker></QuantityPicker>
          <a href="#" className="cart-btn"></a>
          <FontAwesomeIcon icon="facartplus"></FontAwesomeIcon>
        </div>
      </div>
    );
  }
}
export default Product;
