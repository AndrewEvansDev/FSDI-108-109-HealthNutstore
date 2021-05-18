import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './cartItem';
import "./cart.css";
import { removeFromCart } from '../store/actions';

class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <div>                 
                <main className="cart-wrap">

                    <div className="cart-list">
                    <h2 className="cart-header">Shopping Cart</h2>
                        {this.props.cart.map(
                        (x,index) => <CartItem deleteCartItem={()=>this.deleteCartItem(x)} key={index} info={x}></CartItem>
                        )}
                    </div>
                </main>
            </div>
        );
    }
    deleteCartItem = (f) => {
        this.props.removeFromCart(f)
        console.log(f)
    }
    
}

const mapStateToProps = (state) => {
    return {
    cart:state.cart
    }
}

export default connect(mapStateToProps,{removeFromCart}) (Cart);