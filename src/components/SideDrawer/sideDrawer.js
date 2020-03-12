import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom'

import './SideDrawer.css';

class sideDrawer extends Component {
  
  constructor()
  {
    super()
    this.state = ''

    this.logout = this.logout.bind(this)
  }

  logout(e)
  {
    e.preventDefault()
    localStorage.removeItem('userToken')
    localStorage.removeItem('userAuth')
    localStorage.removeItem('partAuth')
    this.props.history.push('/')
  }

  render() 
  {  
    let drawerClasses = 'side-drawer';
    if (this.props.show) {
      drawerClasses = 'side-drawer open';
    }

    const yesUser = (

      <div className="yesUserArea">
      <img className="userImg" src="https://cdn3.iconfinder.com/data/icons/universal-web-mobile-8/65/389-512.png" alt="user"/>
      <a href="/userProfile"><p>Hello</p></a>
      <img onClick={this.logout} style={{cursor:'pointer'}} src="https://cdn4.iconfinder.com/data/icons/recreation-1/500/out-2-512.png" alt="logout"/>
      </div>

      );

      const noUser = (
         <div className="yesUserArea d-flex justify-content-start">
         <img className="userImg" src="https://cdn3.iconfinder.com/data/icons/universal-web-mobile-8/65/389-512.png" alt="user"/>
         <a href="/login" className="ml-3"><p>Login & Register</p></a>
         </div>
      );

    const yesPartner = (
      <div className="dynamicUser">
      <a href="partnerProfile"><li>Partner Profile</li></a>
      <a><li onClick={this.logout}>Partner Logout</li></a>
      </div>
      );

      const noPartner = (
        <div className="dynamicUser">
        <a href="partnerLogin"><li>Partner Login</li></a>
        <a href="partner"><li>Be Partner</li></a>
         </div>
      );
      


    return (  
      <nav className={drawerClasses}>
      {localStorage.userAuth ? yesUser : noUser}
      <ul>
        <a href="/services"><li>Services</li></a>
        <a href="/offers"><li>Offers</li></a>
        <a href="/happinessGuranteed"><li>Happiness guarantee</li></a>
        <a href="/about"><li>About us</li></a>
        {localStorage.partAuth? yesPartner : noPartner}
        <a href="/contact"><li>Contact us</li></a>
        <a href="http://localhost:5555/" target="blank"><li>ConnectBird</li></a>
      </ul>
    </nav> 
    );
  }
}
 

export default withRouter(sideDrawer);