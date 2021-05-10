import React, { Component } from "react";
import ProductService from "../services/product-service";
import "./grocerylist.css";
import {connect} from "react-redux";
import { addGroceryItem } from '../store/actions';
import {removeGroceryItem} from '../store/actions';

class GroceryList extends Component {
  state = {
    inventory: [],
    food:"",
  };
  render() {
    return (
      <div className="listWrap">
        <h3>Shopping List</h3>
        <select value={this.state.food} onChange={this.handleSelect} id="food-select">
          {this.state.inventory.map(option => (
            <option value={option.id} key={option.id}>{option.title}</option>
          ))}
        </select>
        <button onClick={this.addFood}>Add</button>


        <ul className="food-list">
        {this.props.food.map((food,index) => (
            <li className="groceryList-li" key={index}>{food.title} {food.price}<button onClick={(index)=>{this.removeItem(index)}}><i className="fa fa-trash-o" aria-hidden="true"></i></button></li>
          ))}
        </ul>
      </div>
    );
  }
  createKey = () => {
    return parseInt(parseInt(Math.random()*10000)/parseInt(Math.random()*235)*parseInt(Math.random()*53));
  }
  handleSelect = (e) => {
    var food = e.target.value;
    this.setState({food:food});
  }
  
  addFood = () => {
    var food = parseInt(this.state.food);
    var pushItem;
    console.log(food);
    var compare = [...this.state.inventory];
    for(let i = 0;i<compare.length;i++){
      if(compare[i].id === food){
        var newid = this.createKey();
        pushItem = compare[i];
        pushItem.id = newid;
        this.props.addGroceryItem(pushItem); 
      }   
    }
  }

  removeItem = (food) => {
    this.props.removeGroceryItem(food);
  }

  async componentDidMount() {
    var service = new ProductService();
    var catalog = await service.getCatalog();
    this.setState({ inventory: catalog,food:parseInt(catalog[0].id)});
  }

  
}

const mapStateToProps = (state) => {
  return {
  food:state.groceryList,
  }
}
export default connect(mapStateToProps,{addGroceryItem,removeGroceryItem})(GroceryList);

