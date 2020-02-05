import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/drawerToggleButton';
import './Toolbar.css';

class Toolbar extends Component {

  render() {
    const yesUser = (
      <div className="toolbar_navigation-items">
      <p>Hello</p>
      </div>
      );

      const noUser = (
        <div className="toolbar_navigation-items">
        <Link to="/login"><p>LOGIN</p></Link>
        </div>
      ); 
    return ( 
      <header className="toolbar">
      <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
      <DrawerToggleButton click={this.props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><Link to="/"><p>E-services</p></Link></div>
      
      {localStorage.userToken ? yesUser : noUser}
      </nav>
      </header>
     );
  }
}

export default Toolbar;