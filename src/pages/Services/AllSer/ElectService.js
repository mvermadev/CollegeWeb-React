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
                  text: 'Air Conditioner',
                  link: '/bookBegin/Electrical/Air Conditioner'
              },
              {
                  id : 2,
                  url: 'https://cdn1.iconfinder.com/data/icons/electricity-stuff/512/19_Electrical_Wiring-512.png',
                  alt: 'Wiring',
                  text: 'Wiring',
                  link: '/bookBegin/Electrical/Wiring'
              },
              {
                id: 3,
                url: 'https://cdn3.iconfinder.com/data/icons/shoppy-outline-vol-1/512/1_fan_ceiling-fan_cooler-512.png',
                alt: 'Fans',
                text: 'Fans',
                link: '/bookBegin/Electrical/Fans'
              },
              {
                id: 4,
                url: 'https://cdn1.iconfinder.com/data/icons/electronic-filled-outline/64/ELECTRONICS_filled_outline-01-512.png',
                alt: 'Refrigerator',
                text: 'Refrigerator',
                link: '/bookBegin/Electrical/Refrigerator'
              },
              {
                id: 5,
                url: 'https://cdn2.iconfinder.com/data/icons/education-part-5/33/light-512.png',
                alt: 'Light',
                text: 'Light',
                link: '/bookBegin/Electrical/Light'
              },
              {
                id: 6,
                url: 'https://cdn3.iconfinder.com/data/icons/emoticon-emoji-1/50/Confused-512.png',
                alt: 'Other',
                text: 'Other',
                link: '/bookBegin/Electrical/Other'
              },
          ]
      }
  }

    render() { 
        return ( 
            <div className="Service">
            <p>APPLIANCE SERVICES</p>
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


    

export default ElectService;