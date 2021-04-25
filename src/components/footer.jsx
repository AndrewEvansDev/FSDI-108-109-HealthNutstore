import React, { Component } from 'react';
import "./footer.css";

class Footer extends Component {
    state = {  }
    render() { 
        return ( 

            <footer className="footer-wrap">
                <div className="footer-item">Left Comp</div><div className="footer-item">Right Comp</div>
            </footer>

        );
    }
}

export default Footer;