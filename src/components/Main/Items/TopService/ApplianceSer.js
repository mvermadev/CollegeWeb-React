import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import './Service.css'

class ApplianceSer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Service">
            <p>APPLIANCE SERVICES</p>
            <div className="items">
            <img src="https://cdn3.iconfinder.com/data/icons/real-estate-v-1/64/Real_estate-40-512.png" alt=""/>
            <img src="https://cdn1.iconfinder.com/data/icons/electricity-stuff/512/19_Electrical_Wiring-512.png" alt=""/>
            <img src="https://cdn3.iconfinder.com/data/icons/shoppy-outline-vol-1/512/1_fan_ceiling-fan_cooler-512.png" alt=""/>
            <img src="https://cdn1.iconfinder.com/data/icons/electronic-filled-outline/64/ELECTRONICS_filled_outline-01-512.png" alt=""/>
            </div>
            </div>
            );
        }
    }
    
export default ApplianceSer;