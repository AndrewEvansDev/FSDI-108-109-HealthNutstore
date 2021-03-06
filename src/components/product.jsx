import React, { Component } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import {addToCart} from "../store/actions";
import {connect} from "react-redux";

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
          <h6>{this.getTotal()}</h6>

          <span onClick={this.handleAddToCart}>
          <i className="cart-icon fa fa-cart-plus" aria-hidden="true"></i>

          </span>
        </div>
      </div>
    );
  }
handleAddToCart = (food) =>{
  food = {...this.props.data};
  food.quantity = this.state.quantity;
  this.props.addToCart(food);
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
export default connect(null,{addToCart})(Product);
