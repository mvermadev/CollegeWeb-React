import React, { Component } from 'react';
import Banner from './Banner'
import TopSer from './Items/TopService/TopSer';
import HomeSer from './Items/TopService/HomeSer';
import SalonSer from './Items/TopService/SalonSer';
import ApplianceSer from './Items/TopService/ApplianceSer';
import PestSer from './Items/TopService/PestSer';
import Offers from './Items/TopService/Offers';
import Happiness from './Items/TopService/Happiness';
import Footer from '../Footer/Footer';
import './Banner.css'

class main extends Component {
    state = {  }
    render() { 
        return ( 
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
            <Footer/>
            </div>
            </div>
         );
    }
}
 
export default main;