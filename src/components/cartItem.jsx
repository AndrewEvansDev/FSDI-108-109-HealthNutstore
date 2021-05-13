import React, { Component } from 'react';

class CartItem extends Component {
    state = {  }
    render() { 
        return (  
            <tr className="invoice-item">
                <td>{this.props.info.title}</td><td>{this.props.info.quantity}</td><td>${this.props.info.price*this.props.info.quantity}</td>
            </tr>
        );
    }
}
 
export default CartItem;