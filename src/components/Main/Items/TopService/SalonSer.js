import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import './Service.css'

class SalonSer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Service">
            <p>SALON SERVICES</p>
            <div className="items">
            <img src="https://cdn3.iconfinder.com/data/icons/cosmetic-18/64/Cleansing-facial-skincare-soap-makeup-512.png" alt=""/>
            <img src="https://cdn0.iconfinder.com/data/icons/massage-and-spa-1/50/61-512.png" alt=""/>
            <img src="https://cdn0.iconfinder.com/data/icons/miss-univers/64/manicure-nail-finger-beauty-512.png" alt=""/>
            <img src="https://cdn3.iconfinder.com/data/icons/fintech-color-pop-vol-2/64/know-your-client-512.png" alt=""/>
            </div>
            </div>
            );
        }
    }
    
export default SalonSer;