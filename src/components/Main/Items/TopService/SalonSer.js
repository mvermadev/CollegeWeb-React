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
            <img src="https://5.imimg.com/data5/BM/AK/MY-6420141/solid-color-aluminium-composite-panel-209-refreshing-green-500x500.jpg" alt=""/>
            <img src="https://5.imimg.com/data5/BM/AK/MY-6420141/solid-color-aluminium-composite-panel-209-refreshing-green-500x500.jpg" alt=""/>
            <img src="https://5.imimg.com/data5/BM/AK/MY-6420141/solid-color-aluminium-composite-panel-209-refreshing-green-500x500.jpg" alt=""/>
            <img src="https://5.imimg.com/data5/BM/AK/MY-6420141/solid-color-aluminium-composite-panel-209-refreshing-green-500x500.jpg" alt=""/>
            </div>
            </div>
            );
        }
    }
    
export default SalonSer;