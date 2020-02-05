import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/drawerToggleButton';
import './Toolbar.css';

class Toolbar extends Component {
  state = {  }
  render() { 
    return ( 
      <header className="toolbar">
      <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
      <DrawerToggleButton click={this.props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><Link to="/"><p>E-services</p></Link></div>
      
      <div className="toolbar_navigation-items">
      <Link to="login"><p>LOGIN</p></Link>
      </div>
      </nav>
      </header>
     );
  }
}

export default Toolbar;