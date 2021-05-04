import React, { Component } from "react";
import ProductService from "../services/product-service";
import "./grocerylist.css";

class GroceryList extends Component {
  state = {
    food:"",
    list: [],
    inventory: []
  };
  render() {
    return (
      <div className="listWrap">
        <h3>Shopping List</h3>
        <select onChange={this.onSelectChange} id="food-select">
        <option selected disabled>Select item</option>
          {this.state.inventory.map(item => (
            <option key={item.id} value={item.title}>{item.title}</option>
          ))}
        </select>

        <button onClick={this.addFood}>Add</button>

        <ul className="food-list">
          {this.state.list.map((food) => (
            <li className="groceryList-li" key={food.id}>{food.title}</li>
            
          ))}
        </ul>
      </div>
    );
  }
  onSelectChange = (e) => {
    var food = e.target.value;
    console.log(food);
    this.setState({ food: food });
  };
  addFood = () => {
    var listCopy = this.state.list;
    var food = this.state.food;
    var catalogCopy = this.state.inventory;
    catalogCopy = catalogCopy.filter(f=>f.title ===food);
    console.log(catalogCopy);
    listCopy.push(catalogCopy);    
    this.setState({list:listCopy});
    console.log(listCopy)

    console.log(listCopy.length)
  };
  removeItem = (id) => {
    this.setState((prevState) => {
      return {
        list: prevState.list.filter((i) => i.id !== id),
      };
    });
  };
  componentDidMount() {
    var service = new ProductService();
    var catalog = service.getCatalog();
    this.setState({ inventory: catalog });
  }
}

export default GroceryList;

/*
 * create an array on the state
 * push the text to the array on click
 * display the list of foods
 *
 */
