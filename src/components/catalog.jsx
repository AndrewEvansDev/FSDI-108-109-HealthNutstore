import React, { Component } from "react";
import ProductService from "../services/product-service";
import Product from "./product";
import "./catalog.css";

class Catalog extends Component {
  state = {
    catalog: [],
    category: [],
    selectedCategory: ""
  };
  render() {
    let itemsToDisplay = this.state.catalog;


    if (this.state.selectedCategory !== "") {
      itemsToDisplay = itemsToDisplay.filter(prod => prod.category === this.state.selectedCategory);
      // itemsToDisplay = itemsToDisplay.filter(prod => {
      //   if (prod.category === this.state.selectedCategory) {
      //     return true;
      //   } else
      //     return false;
      // });
    }



    return (
      <div className="catalog-wrap">
        <div className="categories">
          <button onClick={this.clearFilter} className="catalog-categories-btn">See All</button>
          {this.state.category.map((c, index) => <button key={index} onClick={() => { this.catClick(c) }} className="catalog-categories-btn">{c}</button>)}
        </div>
        <div className="catalog-page">
          {itemsToDisplay.map((item) => (
            <Product key={item.id} data={item}></Product>
          ))}
        </div></div>
    );
  }
  clearFilter = () => {
    this.setState({ selectedCategory: "" })
  }
  async componentDidMount() {
    var service = new ProductService();
    var catalog = await service.getCatalog();
    
    var cats = [];
    for (let i = 0; i < catalog.length; i++) {
      let product = catalog[i];
      if (!cats.includes(product.category)) {
        cats.push(product.category)
        this.setState({ category: cats })
      }
    }
    this.setState({ catalog: catalog });

  }
  catClick = (catName) => {
    this.setState({ selectedCategory: catName })
  };
}

export default Catalog;
