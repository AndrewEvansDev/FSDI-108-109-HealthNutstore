import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return ( 
            <div className="homePage">
                <Link to="/catalog" className="catalog-home">Catalog</Link><Link to="/grocerylist" className="grocery-list-home">Shopping List</Link>
            </div>
        );
    }
}

export default HomePage;