import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './cartItem';
import "./cart.css";

class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <div>                 
                <table className="cart-wrap">

                    <thead><tr><th>Item</th><th>Quantity</th><th>Price</th></tr></thead>
                    <tbody className="">
                        {this.props.cart.map(
                        (x,index) => <CartItem key={index} info={x}></CartItem>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    cart:state.cart
    }
}

export default connect(mapStateToProps,null) (Cart);