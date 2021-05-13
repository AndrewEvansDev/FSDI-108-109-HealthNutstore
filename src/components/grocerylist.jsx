import React, { Component } from "react";
import ProductService from "../services/product-service";
import "./grocerylist.css";
import { connect } from "react-redux";
import { addGroceryItem } from "../store/actions";
import { removeGroceryItem } from "../store/actions";

class GroceryList extends Component {
  selectRef = React.createRef();
  state = {
    inventory: [],
    food: ""

  };

  render() {
    return (

      <div className="listWrap">
        <div className="top-wrap">
          <h3>Shopping List</h3>
          <div className="select-wrap">
            <select
              ref={this.selectRef}
              onChange={this.handleSelect}
              id="food-select">
              <option value={666}>Select a food</option>
              {this.state.inventory
                .filter((g) => !this.props.food.map((f) => f.id).includes(g.id))
                .map((option) => (
                  <option value={option.id} key={option.id}>
                    {option.title}
                  </option>
                ))}
            </select>
            <button className="addBtn" onClick={this.addFood}>Add</button>
          </div>
        </div>

        <div className="food-list">
          {this.props.food.map((food, index) => (
            <div className="groceryList-child" key={index}>
              <div>{food.title}</div>
              <div className="grocery-list-desc">Description of food, receipe, reminders related to it about health.
              </div>
              <button className="grocery-list-delete-button" onClick={() => { this.removeItem(food) }}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  handleSelect = (e) => {
    var food = e.target.value;
    this.setState({ food: food });
  };

  addFood = () => {
    var food = parseInt(this.state.food);
    if (food !== 666) {
      var pushItem;
      var compare = [...this.state.inventory];
      for (let i = 0; i < compare.length; i++) {
        if (compare[i].id === food) {
          pushItem = compare[i];
          this.props.addGroceryItem(pushItem);
        }
      }
    }
    this.selectRef.current.value = 666;
  };

  removeItem = (food) => {
    this.props.removeGroceryItem(food);
  };

  async componentDidMount() {
    var service = new ProductService();
    var catalog = await service.getCatalog();
    this.setState({ inventory: catalog });
  }
}


const mapStateToProps = (state) => {
  return {
    food: state.groceryList,
  };
};
export default connect(mapStateToProps, { addGroceryItem, removeGroceryItem })(
  GroceryList
);
