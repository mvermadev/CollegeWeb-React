import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import './Service.css'

class Offers extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Service">
            <p>OFFERS</p>
            <div className="items">
            <img src="https://cdn4.iconfinder.com/data/icons/online-store-10/32/43_offer_badge_star_label_offers_discount_shopping-512.png" alt=""/>
            <img src="https://cdn2.iconfinder.com/data/icons/shopping-ii/110/Stickers-32-512.png" alt=""/>
            </div>
            </div>
            );
        }
    }
    
export default Offers;