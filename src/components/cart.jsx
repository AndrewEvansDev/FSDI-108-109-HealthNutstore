import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="cart-wrap">
                <h3>Ready to purchase?</h3>
                <ul>
                    {this.props.cart.map(
                        x => <li>{x.title}</li>
                    )}
            </ul>
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