import React, { Component } from 'react';
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
import './Banner.css'


const mainCompo = ()=>{
    return(
        <div id="main" >
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

function main(){
    return (
        <Router>
        <div>
        <Switch>
            <Route path="/" exact component={mainCompo}/>
            <Route path="/login" exact component={Login}/>
        </Switch>
        <Footer/>
        </div>
        </Router>
    )
}
 
export default main;