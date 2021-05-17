import React, { Component } from 'react';
import "./about.css"

class AboutMe extends Component {
    state = { 
        email:"Show email",
    }
    render() { 
        return ( 
            <div>
                <h3>Andrew is great!</h3>
                <p onClick={this.showEmail}>{this.state.email}</p>
                <p><img alt="Andrew Evans" className="about-img" src="../images/about/IMG_1991.jpeg"></img></p>
            </div>
         );
    }
showEmail = () => {
    var uiVisibleEmail = this.state.email;
    uiVisibleEmail === "Show email" ? this.setState({email:"andrewevans@email.com"}) : this.setState({email:"Show email"});
}
}
 
export default AboutMe;

//create about me that shows/hides emails, hides data in js.
