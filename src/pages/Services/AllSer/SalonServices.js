import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Container, Row, Col, Image} from 'react-bootstrap'
import '../Services.css'


class SalonServices extends Component {
    constructor()
    {
        super();
        this.state = {
            service : [
                {
                    id : 1,
                    url: 'https://cdn3.iconfinder.com/data/icons/cosmetic-18/64/Cleansing-facial-skincare-soap-makeup-512.png',
                    alt: 'Facials',
                    text: 'Facials',
                    link: '/bookBegin/Salon/Facials'
                },
                {
                    id : 2,
                    url: 'https://cdn0.iconfinder.com/data/icons/massage-and-spa-1/50/61-512.png',
                    alt: 'Hair Care',
                    text: 'Hair Care',
                    link: '/bookBegin/Salon/Hair Care'
                },
                {
                  id: 3,
                  url: 'https://cdn0.iconfinder.com/data/icons/miss-univers/64/manicure-nail-finger-beauty-512.png',
                  alt: 'Manicure/pedicure',
                  text: 'Manicure/Pedicure',
                  link: '/bookBegin/Salon/ManiPediCure'
                },
                {
                  id: 4,
                  url: 'https://cdn3.iconfinder.com/data/icons/fintech-color-pop-vol-2/64/know-your-client-512.png',
                  alt: 'Other Service',
                  text: 'Other',
                  link: '/bookBegin/Salon/Other'
                },
            ]
        }
    }
      render() { 
          return ( 
              <div className="Service">
              <p>SALON SERVICES</p>
              <div className="items">
              {
                  this.state.service.map((ser)=>{
                      return (
                        <div key={ser.id}>
                          <Link to={ser.link} key={ser.id}> <img src={ser.url} alt={ser.alt}/></Link>
                          <p>{ser.text}</p>
                        </div>
                        )
                          })
                      }
                      </div>
              
              </div>
              );
          }
      }
    
export default SalonServices;