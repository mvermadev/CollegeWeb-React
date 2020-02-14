import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/drawerToggleButton';
import './Toolbar.css';

class Toolbar extends Component {

  render() {
    const yesUser = (
      <div className="toolbar_navigation-items">
      <p className="leftSide">Hello</p>
      </div>
      );

      const noUser = (
        <div className="toolbar_navigation-items">
        <Link to="/login"><img src="https://cdn3.iconfinder.com/data/icons/user-interface-set-7/64/iconspace_Login_54px-512.png" alt="login"/></Link>
        </div>
      ); 

      
    return ( 
      <header className="toolbar">
      <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
      <DrawerToggleButton click={this.props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><Link to="/"><p className="leftSide">E-services</p></Link></div>
      
      {localStorage.userAuth ? yesUser : noUser}
      </nav>
      </header>
     );
  }
}

export default Toolbar;