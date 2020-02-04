import React, {Component} from 'react';
import './App.css';
import Toolbar from './components/Toolbar/toolbar';
import SideDrawer from './components/SideDrawer/sideDrawer';
import Backdrop from './components/Backdrop/backdrop';
import Main from './components/Main/main'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
        <Main/>
        </main>

      </div>
    );
  }
}

export default App;
