import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="FooterHead">
            <div className="Footer container mt-2">
            <div className="layer1 layer">
            <p><a href="#">About us</a></p>
            <p><a href="#">Term and Condition</a></p>
            </div>
            <div className="layer1">
            <p><a href="#">Privacy and Policy</a></p>
            <p><a href="#">Services</a></p>
            <p><a href="#">Offers</a></p>
            </div>
            <div className="layer1">
            <p><a href="#">Became Partner</a></p>
            <p><a href="#">Contact us</a></p>
            </div>
            </div>
            <div className="cpy">
                All reserved copyright©2020
            </div>
            </div>
         );
    }
}
 
export default Footer;