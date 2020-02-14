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
            <img src="https://cdn1.iconfinder.com/data/icons/malaria-illness-dengue-1/100/all8_09_15-512.png" alt=""/>
            <img src="https://cdn1.iconfinder.com/data/icons/bugs-with-many-insect-inside-it-and-color-version/100/bugs_color-09-512.png" alt=""/>
            <img src="https://cdn1.iconfinder.com/data/icons/insect-and-pest-control/500/Pest-insect-ban_6-512.png" alt=""/>
            <img src="https://cdn3.iconfinder.com/data/icons/fintech-color-pop-vol-2/64/know-your-client-512.png" alt=""/>
            </div>
            <div className="container mt-2">
            <Link to="/services"><Button variant="success" className="center btn-block">MORE SERVICES</Button></Link>
            </div>
            </div>
            );
        }
    }
    
export default PestSer;