import React, { Component } from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import QuantityPicker from "./quantityPicker";

class Product extends Component {
  state = {
    quantity: 1,
    total: 1,
    totalPurchase: this.props.data.price,
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${`/images/products/`}${this.props.data.image
            })`,
        }}
        className="product-wrap"
      >
        <div className="top-wrap">
          <h5 className="product-title">{this.props.data.title}</h5>
          <QuantityPicker
            onValueChange={this.handleQuantityChange} minimum={this.props.data.mimimum || 1}
          ></QuantityPicker>
        </div>
        <div className="bottom-wrap">
          <h5 className="product-price">${this.props.data.price}</h5>
          <h5 className="product-price">
            ${this.state.totalPurchase.toFixed(2)}
          </h5>
          <h6>{this.getTotal()}</h6>

          <span>
            <FontAwesomeIcon
              icon={faCartPlus}
              className="cart-icon"
              size="2x"
            />
            <i className="fas fa-cart-plus"></i>
          </span>
        </div>
      </div>
    );
  }


  getTotal() {
    var total = this.state.quantity * this.props.data.price;
    return "$ " + total.toFixed(2);
  }

  handleQuantityChange = (qty) => {
    this.setState({ quantity: qty });
    this.setState({ total: qty * this.props.data.price });
    this.setState({
      totalPurchase: this.state.quantity * this.props.data.price,
    });
  };
}
export default Product;
