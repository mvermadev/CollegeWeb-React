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
import ElectService from '../../pages/Services/AllSer/ElectService';
import PlumbServices from '../../pages/Services/AllSer/PlumbServices';
import SalonServices from '../../pages/Services/AllSer/SalonServices';
import PestServices from '../../pages/Services/AllSer/PestServices';
import HomeServices from '../../pages/Services/AllSer/HomeServices';
import BookService from '../../pages/Services/Book/BookService';
import BookBegin from '../../pages/Services/Book/BookBegin';
import ConfirmService from '../../pages/Services/Book/ConfirmService';
import FinalDetails from '../../pages/Services/Book/FinalDetails';
import PartLogin from '../../pages/Registeration/Partner/PartLogin';
import PartOtp from '../../pages/Registeration/Partner/PartOtp';
import PartProfile from '../../pages/Registeration/Partner/PartProfile';
import EditProfile from '../../pages/Registeration/Partner/EditProfile';
import userProfile from '../../pages/Registeration/UserAccount/UserProfile';
import UserRegis from '../../pages/Registeration/UserAccount/UserRegis';
import ViewOrders from '../../pages/Registeration/UserAccount/ViewOrders';

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
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '60px'}}>
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
        <Route path="/electricalServices" component={ElectService}/>
        <Route path="/bookBegin/:serviceVal/:subService" component={BookBegin}/>
        <Route path="/bookService/:serviceName/:subService" component={BookService}/>
        <Route path="/confirmService/:serviceType/:subService" component={ConfirmService}/>
        <Route path="/finalDetails/:serviceValue/:subService" component={FinalDetails}/>
        <Route path="/partnerLogin" component={PartLogin}/>
        <Route path="/partnerOtp" component={PartOtp}/>
        <Route path="/partnerProfile" component={PartProfile}/>
        <Route path="/editProfile/:fromWhere/:field/:oldValue" component={EditProfile}/>
        <Route path="/userProfile" component={userProfile}/>
        <Route path="/userRegistration" component={UserRegis}/>
        <Route path="/myOrders" component={ViewOrders}/>
        <Route path="/homeServices" component={HomeServices}/>
        <Route path="/plumbServices" component={PlumbServices}/>
        <Route path="/salonServices" component={SalonServices}/>
        <Route path="/pestServices" component={PestServices}/>
        </Switch>
        </main>
        </div>
        <Footer/>
        </Router>
        );
      }
}
 

 
export default Main;