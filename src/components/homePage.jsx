import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { clearGroceryList } from '../store/actions';
import { clearCart } from '../store/actions';
import "./homePage.css";


class HomePage extends Component {
    render() {
        return ( 
            <div className="homePage">
                <button className="catalog-home"><Link to="/catalog">Catalog</Link></button>
                <button className="grocery-list-home"><Link to="/grocerylist">Shopping List</Link></button>
                <button onClick={()=> this.props.clearGroceryList()} className="clear-gl-home">Clear Grocery List</button>
                <button onClick={()=> this.props.clearCart()} className="clear-gl-home">Clear Cart</button>
            </div>
        );
    }
}

export default connect(null, {clearGroceryList,clearCart}) (HomePage);