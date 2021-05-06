import React, { Component } from "react";
import ProductService from "../services/product-service";
import "./grocerylist.css";
import {connect} from "react-redux";
import { addGroceryItem } from '../store/actions';
import {removeGroceryItem} from '../store/actions';

class GroceryList extends Component {
  state = {
    food:"",
    // list: [],
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
          {this.props.food.map((food) => (
            <li className="groceryList-li" key={parseInt(parseInt(Math.random()*10000)/parseInt(Math.random()*235)*parseInt(Math.random()*53))}>{food.title}  {food.price}<button onClick={()=>{this.removeItem(food)}}>Del</button></li>
            
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
    // var listCopy = [...this.state.list];
    var food = this.state.food;
    var catalogCopy = [...this.state.inventory];
    catalogCopy = catalogCopy.filter(f=>f.title ===food)[0];
    // listCopy.push(catalogCopy);    
    // this.setState({list:listCopy});
    this.props.addGroceryItem(food);
  };
  removeItem = (food) =>{
    // var copy = [...this.props.groceryList];
    // copy = copy.splice(index,1);
    // this.setState({list:copy});
    this.props.removeGroceryItem(food);
  }
  async componentDidMount() {
    var service = new ProductService();
    var catalog = await service.getCatalog();
    this.setState({ inventory: catalog });
  }
}

const mapStateToProps = (state)=>{
  return {
  food:state
  }
}
export default connect(mapStateToProps,{addGroceryItem,removeGroceryItem})(GroceryList);

