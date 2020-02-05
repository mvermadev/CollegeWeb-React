import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Banner from './Banner'
import TopSer from './Items/TopService/TopSer';
import HomeSer from './Items/TopService/HomeSer';
import SalonSer from './Items/TopService/SalonSer';
import ApplianceSer from './Items/TopService/ApplianceSer';
import PestSer from './Items/TopService/PestSer';
import Offers from './Items/TopService/Offers';
import Happiness from './Items/TopService/Happiness';
import Footer from '../Footer/Footer';
import Login from '../../pages/Registeration/Login';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/sideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Otp from '../../pages/Registeration/Otp';
import './Banner.css'
import Partner from '../../pages/Registeration/Partner/Partner';
import OfferPage from '../../pages/OfferPage/OfferPage'
import HappinessGur from '../../pages/HappinessGur/HappinessGur'
import About from '../../pages/About/About'
import Services from '../../pages/Services/Services';
import Contact from '../../pages/Contact/Contact';


const MainCompo = ()=>{
    return(
        <div>
        <div>
        <Banner/>
        <TopSer/> <hr/>
        <HomeSer/> <hr/>
        <SalonSer/> <hr/>
        <ApplianceSer/> <hr/>
        <PestSer/> <hr/>
        <Offers/> <hr/>
        <Happiness/>
        </div>
        </div>
    )
}

class Main extends Component {
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
        <Router>
        <div style={{height: '100%'}}  id="main" >
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
        <Switch>
        <Route path="/" exact component={MainCompo}/>
        <Route path="/login" component={Login}/>
        <Route path="/auth" component={Otp}/>
        <Route path="/partner" component={Partner}/>
        <Route path="/offers" component={OfferPage}/>
        <Route path="/happinessGuranteed" component={HappinessGur}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        <Route path="/contact" component={Contact}/>
        </Switch>
        </main>
        </div>
        <Footer/>
        </Router>
        );
      }
}
 

 
export default Main;