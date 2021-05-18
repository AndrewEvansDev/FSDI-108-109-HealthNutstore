import React, { Component } from 'react';
import "./about.css"

class AboutMe extends Component {
    state = { 
        emailBtn:"Show email",
        email:"Email hidden"
    }
    render() { 
        return ( 
            <div>
                <h2 className="about-name">Andrew Evans</h2>
                <h4 className="about-title"><em>Full Stack Developer</em></h4>
                <h4 className="about-title">{this.state.email}</h4>
                <button className="show-hide-email-btn" onClick={this.showEmail}>{this.state.emailBtn}</button>
                <p><img alt="Andrew Evans" className="about-img" src="../images/about/IMG_1991.jpeg"></img></p>
            </div>
         );
    }
showEmail = () => {
    var uiVisibleEmail = this.state.emailBtn;
    uiVisibleEmail === "Show email" ? this.setState({emailBtn:"Hide email",email:"andrewevans@email.com"}) : this.setState({emailBtn:"Show email",email:"Email hidden"});
}
}
 
export default AboutMe;

//create about me that shows/hides emails, hides data in js.
