import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import '../Services.css'
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PestServices extends Component {
    constructor()
    {
        super();
        this.state = {
            service : [
                {
                    id : 1,
                    url: 'https://cdn1.iconfinder.com/data/icons/malaria-illness-dengue-1/100/all8_09_15-512.png',
                    alt: 'Dengue',
                    text: 'Dengue',
                    link: '/bookBegin/Pest Control/Dengue'
                },
                {
                    id : 2,
                    url: 'https://cdn1.iconfinder.com/data/icons/bugs-with-many-insect-inside-it-and-color-version/100/bugs_color-09-512.png',
                    alt: 'Bed Bugs',
                    text: 'Bed Bugs',
                    link: '/bookBegin/Pest Control/Bed Bugs'
                },
                {
                  id: 3,
                  url: 'https://cdn1.iconfinder.com/data/icons/insect-and-pest-control/500/Pest-insect-ban_6-512.png',
                  alt: 'Mosquito',
                  text: 'Mosquito',
                  link: '/bookBegin/Pest Control/Mosquito'
                },
                {
                  id: 4,
                  url: 'https://cdn3.iconfinder.com/data/icons/fintech-color-pop-vol-2/64/know-your-client-512.png',
                  alt: 'Other',
                  text: 'Other',
                  link: '/bookBegin/Pest Control/Other'
                },
            ]
        }
    }
  
      render() { 
          return ( 
              <div className="Service">
              <p>PEST CONTROL</p>
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
    
export default PestServices;