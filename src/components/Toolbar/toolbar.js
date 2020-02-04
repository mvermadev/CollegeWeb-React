import React from 'react';

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
            <a href="#">LOGIN</a>
        </div>
    </nav>
  </header>
);

export default toolbar;