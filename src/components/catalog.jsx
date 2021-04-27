import React, { Component } from "react";
import ProductService from "../services/product-service";
import Product from "./product";
import "./catalog.css";

class Catalog extends Component {
  state = {
    catalog: [],
  };
  render() {
    return (
      <div className="catalog-page">
        {this.state.catalog.map((item) => (
          <Product key={item.id} data={item}></Product>
        ))}
      </div>
    );
  }
  componentDidMount() {
    var service = new ProductService();
    var catalog = service.getCatalog();
    this.setState({ catalog: catalog });
  }
}

export default Catalog;
