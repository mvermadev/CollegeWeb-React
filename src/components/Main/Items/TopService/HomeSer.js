import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import './Service.css'

class HomeSer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Service">
            <p>HOME SERVICES</p>
            <div className="items">
            <img src="https://cdn2.iconfinder.com/data/icons/maids-and-cleaning-1/64/Party_help-cleaning-512.png" alt=""/>
            <img src="https://cdn2.iconfinder.com/data/icons/cleaning-flat/64/bucket-wash-cleaning-512.png" alt=""/>
            <img src="https://cdn2.iconfinder.com/data/icons/farm-filled-outline/64/mop-bucket-cleaning-512.png" alt=""/>
            <img src="https://cdn1.iconfinder.com/data/icons/cleaning-contempo-volume-1/256/Furniture_Cleaning-512.png" alt=""/>
            </div>
            </div>
            );
        }
    }
    
export default HomeSer;