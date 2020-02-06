import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import './Service.css'
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PestSer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Service">
            <p>PEST CONTROL</p>
            <div className="items">
            <img src="https://5.imimg.com/data5/BM/AK/MY-6420141/solid-color-aluminium-composite-panel-209-refreshing-green-500x500.jpg" alt=""/>
            <img src="https://5.imimg.com/data5/BM/AK/MY-6420141/solid-color-aluminium-composite-panel-209-refreshing-green-500x500.jpg" alt=""/>
            <img src="https://5.imimg.com/data5/BM/AK/MY-6420141/solid-color-aluminium-composite-panel-209-refreshing-green-500x500.jpg" alt=""/>
            <img src="https://5.imimg.com/data5/BM/AK/MY-6420141/solid-color-aluminium-composite-panel-209-refreshing-green-500x500.jpg" alt=""/>
            </div>
            <div className="container mt-2">
            <Link to="/services"><Button variant="success" className="center btn-block">MORE SERVICES</Button></Link>
            </div>
            </div>
            );
        }
    }
    
export default PestSer;