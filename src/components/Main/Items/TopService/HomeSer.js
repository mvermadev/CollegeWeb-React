import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Container, Row, Col, Image} from 'react-bootstrap'
import './Service.css'

class HomeSer extends Component {
    constructor()
    {
        super();
        this.state = {
            service : [
                {
                    id : 1,
                    url: 'https://cdn2.iconfinder.com/data/icons/maids-and-cleaning-1/64/Party_help-cleaning-512.png',
                    alt: 'House Cleaning',
                    text: 'House Cleaning',
                    link: '/bookBegin/Home Cleaning/House cleaning'
                },
                {
                    id : 2,
                    url: 'https://cdn2.iconfinder.com/data/icons/cleaning-flat/64/bucket-wash-cleaning-512.png',
                    alt: 'Bathroom Cleaning',
                    text: 'Bathroom Cleaning',
                    link: '/bookBegin/Home Cleaning/Washroom cleaning'
                },
                {
                  id: 3,
                  url: 'https://cdn2.iconfinder.com/data/icons/farm-filled-outline/64/mop-bucket-cleaning-512.png',
                  alt: 'Floor Cleaning',
                  text: 'Floor Cleaning',
                  link: '/bookBegin/Home Cleaning/Floor cleaning'
                },
                {
                  id: 4,
                  url: 'https://cdn1.iconfinder.com/data/icons/cleaning-contempo-volume-1/256/Furniture_Cleaning-512.png',
                  alt: 'Furniture Cleaning',
                  text: 'Furniture Cleaning',
                  link: '/bookBegin/Home Cleaning/Furniture cleaning'
                },
            ]
        }
    }
      render() { 
          return ( 
              <div className="Service">
              <p>Home Services</p>
              <div className="items">
              {
                  this.state.service.map((ser)=>{
                      return (
                        <div key={ser.id}>
                        <Link to={ser.link}> <img src={ser.url} alt={ser.alt}/></Link>
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
    
export default HomeSer;