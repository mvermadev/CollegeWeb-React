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
    this.props.history.push('/')
  }

  render() 
  {  
    let drawerClasses = 'side-drawer';
    if (this.props.show) {
      drawerClasses = 'side-drawer open';
    }

    const yesUser = (
      <div className="dynamicUser">
      <a><li>Hello</li></a>
      <a><li onClick={this.logout}>Logout</li></a>
      </div>
      );

      const noUser = (
        <div className="dynamicUser">
          <a href="/login"><li>Login</li></a>
         </div>
      );
      
    return (  
      <nav className={drawerClasses}>
      <ul>{localStorage.userToken ? yesUser : noUser}
        <a href="/services"><li>Services</li></a>
        <a href="/offers"><li>Offers</li></a>
        <a href="/happinessGuranteed"><li>happiness Guranteed</li></a>
        <a href="/about"><li>About us</li></a>
        <a href="partner"><li>Become Partner</li></a>
        <a href="/contact"><li>Contact us</li></a>
      </ul>
    </nav> 
    );
  }
}
 

export default withRouter(sideDrawer);