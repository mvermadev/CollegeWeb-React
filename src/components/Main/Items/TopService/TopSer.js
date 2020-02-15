import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import './Service.css'
import { Link } from 'react-router-dom';

class TopSer extends Component {
  constructor()
  {
      super();
      this.state = {
          service : [
              {
                  id : 1,
                  url: 'https://cdn3.iconfinder.com/data/icons/real-estate-v-1/64/Real_estate-40-512.png',
                  alt: 'Electrical Appliances',
                  link: '/electricalServices'
              },
              {
                  id : 2,
                  url: 'https://cdn0.iconfinder.com/data/icons/tourism-and-outdoor-recreation-6/512/429_hotel__building_service_home-512.png',
                  alt: 'Electrical Appliances',
                  link: '/electricalServices'
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
            <p>TOP SERVICES</p>
            <div className="items">
            {
                this.state.service.map((ser)=>{
                    return (
                           <Link to={ser.link} key={ser.id}> <img src={ser.url} alt={ser.alt}/></Link>
                            )
                        })
                    }
                    </div>
            
            </div>
            );
        }
    }
    
export default TopSer;