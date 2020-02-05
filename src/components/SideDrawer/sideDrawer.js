import React from 'react';
import {Link} from 'react-router-dom'

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/login">LOGIN</a>
        </li>
        <a href="/services"><li>Services</li></a>
        <a href="/offers"><li>Offers</li></a>
        <a href="/happinessGuranteed"><li>happiness Guranteed</li></a>
        <a href="/about"><li>About us</li></a>
        <a href="partner"><li>Become Partner</li></a>
        <a href="/contact"><li>Contact us</li></a>
      </ul>
    </nav>
  );
};

export default sideDrawer;