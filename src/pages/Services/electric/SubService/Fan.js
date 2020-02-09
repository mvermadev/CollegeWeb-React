import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './SubService.css'

class Fan extends Component {
  constructor()
  {
    super();
    this.state = {
      contents : [
        {
        id: 1,
        img : 'https://cdn3.iconfinder.com/data/icons/shoppy-outline-vol-1/512/1_fan_ceiling-fan_cooler-512.png',
        text: 'Fan Service',
        Desc : "Our service provider is highly competent personality to do your work properly."
      }
    ]
    }
  }
  render() { 
    return ( 
      <div className="container SubService text-center">
      {
        this.state.contents.map((content)=>{
          return(
            <div className="product" key={content.id}>
                <img src={content.img} alt={content.text} /> <hr/>
                <h4 className="text-left">{content.text}</h4>
                <p className="caution">Inspection charges will be adjusted against the final bill.</p>
                <div className="price">
                  <p>SUB TOTAL:</p>  
                <h5>Rs. 150 + On Inspection</h5>
                </div>
              <Link to="/confirmService/Fan">  <Button className="btn btn-success mt-3 btn">BOOK NOW!</Button></Link> <hr/>
                <p>{content.Desc}</p>
                </div>
              )
            })
          }
      </div>
     );
  }
  }
   
export default Fan