import React, { Component } from 'react';
import "./footer.css";

class Footer extends Component {
    state = {  }
    render() { 
        return ( 

            <footer className="footer-wrap">
                <div className="footer-item"><small>&#169; Andrew Evans 2021</small></div><div className="footer-item">Health-Nut-Store</div>
            </footer>

        );
    }
}

export default Footer;