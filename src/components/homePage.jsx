import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { clearGroceryList } from '../store/actions';


class HomePage extends Component {
    render() {
        return ( 
            <div className="homePage">
                <Link to="/catalog" className="catalog-home">Catalog</Link>
                <Link to="/grocerylist" className="grocery-list-home">Shopping List</Link>
                <button onClick={()=> this.props.clearGroceryList()} className="btn btn-warning">Clear Grocery List</button>
            </div>
        );
    }
}

export default connect(null, {clearGroceryList}) (HomePage);