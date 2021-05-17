import React, { Component } from 'react';
import "./cartItem.css"

class CartItem extends Component {
    state = {  }
    render() { 
        return (  
            <div className="invoice-item">
                <div className="cart-img-title-wrap">
                    <div>{this.props.info.title}</div>
                    <img className="cart-item-thumb" 
                    src={`../images/products/${this.props.info.image}`}
                    alt={this.props.info.title}></img>
                </div>
                <div className="cart-item-info-wrap">
                    <div>Amount: {this.props.info.quantity}
                    </div>
                    <div>Price: ${this.props.info.price*this.props.info.quantity}
                    </div>
                    <button onClick={this.props.deleteCartItem} className="remove-cart-item"><i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>
        );
    }

}
 
export default CartItem;