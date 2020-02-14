import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import './Service.css'

class Happiness extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Service">
            <p>HAPPINESS GURANTEED</p>
            <div className="items">
            <img src="https://cdn3.iconfinder.com/data/icons/cleaning-kinetic-vol-2/256/Satisfaction_Guarantee-512.png" alt=""/>
            <img src="https://cdn1.iconfinder.com/data/icons/outline-webi-con/128/Competitive_Price_Best_Price_Dollar_MoneyExcellent-512.png" alt=""/>
            </div>
            </div>
            );
        }
    }
    
export default Happiness;