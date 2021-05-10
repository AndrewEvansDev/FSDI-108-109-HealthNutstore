import React, { Component } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-custom navbar navbar-expand-lg">
        <Link className="navbar-brand nav-custom" to="/">
          <img src="../../images/001-health.svg" alt=""></img> Health Nut Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/about">
              About <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-link" to="/catalog">
              Catalog
            </Link>
            <Link className="nav-link" to="/grocerylist">
              GroceryList
            </Link>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </div>
        </div>
        <div className="form-inline my-2 my-lg-0"><Link to="/cart" className="btn btn-outline-info my-2 my-sm-0" to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true" ></i>View Cart<span className="badge badge-primary cart-badge">{this.props.cart}</span></Link></div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.length,
  }
}

export default connect(mapStateToProps,null)(NavBar);
