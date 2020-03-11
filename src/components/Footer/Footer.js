import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="FooterHead">
            <div className="Footer container mt-2">
            <div className="layer1 layer">
            <p><a href="/about">About us</a></p>
            <p><a href="https://www.termsandconditionsgenerator.com/live.php?token=KsYgB0wi7h3PtQ8ZXNOtSfH4vPZBeUmI" target="blank">Term and Condition</a></p>
            </div>
            <div className="layer1">
            <p><a href="https://www.termsandconditionsgenerator.com/live.php?token=KsYgB0wi7h3PtQ8ZXNOtSfH4vPZBeUmI" target="blank">Privacy and Policy</a></p>
            <p><a href="/services">Services</a></p>
            <p><a href="/offers">Offers</a></p>
            </div>
            <div className="layer1">
            <p><a href="/partnerLogin">Became Partner</a></p>
            <p><a href="/contact">Contact us</a></p>
            </div>
            </div>
            <div className="cpy">
                All reserved copyright©2020.
            </div>
            </div>
         );
    }
}
 
export default Footer;