import React, { Component, useState } from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import '../Services.css'
import { Link, withRouter } from 'react-router-dom';

class ElectService extends Component {
  constructor()
  {
      super();
      this.state = {
          service : [
              {
                  id : 1,
                  url: 'https://cdn3.iconfinder.com/data/icons/real-estate-v-1/64/Real_estate-40-512.png',
                  alt: 'Air Conditioner',
                  link: '/BookElectService'
              },
              {
                  id : 2,
                  url: 'https://cdn1.iconfinder.com/data/icons/electricity-stuff/512/19_Electrical_Wiring-512.png',
                  alt: 'Wiring',
                  link: '/Wiring'
              },
              {
                id: 3,
                url: 'https://cdn1.iconfinder.com/data/icons/online-teaching-and-school/512/Painting-512.png',
                alt: 'Painting Service',
                link: '/electricalServices'
              },
              {
                id: 4,
                url: 'https://cdn3.iconfinder.com/data/icons/real-estate-v-1/64/Real_estate-19-512.png',
                alt: 'Plumbing Service',
                link: '/electricalServices'
              },
              {
                id: 5,
                url: 'https://cdn4.iconfinder.com/data/icons/health-beauty-spa-salon-and-fashion/49/29-512.png',
                alt: 'Salon Service',
                link: '/electricalServices'
              },
              {
                id: 6,
                url: 'https://cdn4.iconfinder.com/data/icons/alarm-system-true-line-color/32/disinsection-disinsectization-pest-control-512.png',
                alt: 'Pest Control',
                link: '/electricalServices'
              },
          ]
      }
  }
    render() { 
        return ( 
            <div className="Service">
            <p>Appliances Services</p>
            <div className="items">
            {
                this.state.service.map((ser)=>{
                    return (
                      <div key={ser.id}>
                      <Link to={ser.link}> <img src={ser.url} alt={ser.alt}/></Link>
                      </div>
                      )
                        })
                    }
                    </div>
            </div>
            );
        }
    }

    

export default ElectService;