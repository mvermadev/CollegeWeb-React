import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import '../Services.css'
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PlumbServices extends Component {
    constructor()
    {
        super();
        this.state = {
            service : [
                {
                    id : 1,
                    url: 'https://cdn4.iconfinder.com/data/icons/energy-71/64/faucet-sink-water-drop-512.png',
                    alt: 'Tap, Wash Basin',
                    text: 'Tap, Wash Basin',
                    link: '/bookBegin/Plumbing/Tap, Wash Basin'
                },
                {
                    id : 2,
                    url: 'https://cdn1.iconfinder.com/data/icons/plumber/64/29_pipe_leakage_plumber_plumbing_water-512.png',
                    alt: 'Water leakage',
                    text: 'Water leakage',
                    link: '/bookBegin/Plumbing/Water leakage'
                },
                {
                  id: 3,
                  url: 'https://cdn0.iconfinder.com/data/icons/hygiene-12/64/sanitary-restroom-bathroom-toilet-512.png',
                  alt: 'Toilet, Sanitary',
                  text: 'Toilet, Sanitary',
                  link: '/bookBegin/Plumbing/Toilet, Sanitary'
                },
                {
                  id: 4,
                  url: 'https://cdn3.iconfinder.com/data/icons/fintech-color-pop-vol-2/64/know-your-client-512.png',
                  alt: 'Other',
                  text: 'Other',
                  link: '/bookBegin/Plumbing/Other'
                },
            ]
        }
    }
  
      render() { 
          return ( 
              <div className="Service">
              <p>PLUMBING SERVICES</p>
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
    
export default PlumbServices;