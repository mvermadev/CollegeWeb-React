import React from 'react';
import {Link} from 'react-router-dom';
import Login from '../../pages/Registeration/Login';

import DrawerToggleButton from '../SideDrawer/drawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">E-services</a></div>
        
        <div className="toolbar_navigation-items">
            <p><Link to={Login}>LOGIN</Link></p>
        </div>
    </nav>
  </header>
);

export default toolbar;