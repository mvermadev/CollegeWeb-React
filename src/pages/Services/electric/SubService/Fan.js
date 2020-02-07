import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import './SubService.css'

class Fan extends Component {
    constructor()
    {
      super();
      this.state = {
        contents : [
          {
          id: 1,
          img : 'https://cdn3.iconfinder.com/data/icons/real-estate-v-1/64/Real_estate-40-512.png',
          text: 'Wiring Service',
          Desc : "Our service provider is highly competent personality to do your work properly."
        }
      ]
      }
    }
    render() { 
      return ( 
        <div className="container SubService">
        {
          this.state.contents.map((content)=>{
            return(
              <div className="product" key={content.id}>
                  <img src={content.img} alt={content.text} />
                  <h4>{content.text}</h4>
                  <Button className="btn btn-success">BOOK NOW!</Button>
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