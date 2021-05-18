import React, { Component } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-custom navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand nav-custom" to="/">
          <img src="../../images/001-health.svg" alt=""></img> Health Nut Store
        </Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/grocerylist">
                  Grocery List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Shopping Cart
                </Link>
              </li>

            </ul>
          </div>
          <div className="nav-cart-wrap"><Link className="nav-cart-btn" to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true" ></i>  View Cart<span className="cart-nav-qty">{this.props.cart}</span></Link></div>
          
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.length,
  };
};

export default connect(mapStateToProps, null)(NavBar);
