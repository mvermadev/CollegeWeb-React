import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Happiness.css';

class HappinessGur extends Component {
    constructor(props)
    {   super(props)
        this.state = {
            cardImg : [
                {
                    id: 1,
                    url: 'https://rukminim1.flixcart.com/flap/500/500/image/a73713.jpg?q=50',
                    text: 'This is a Great Offers from usThis is a Great Offers from usThis is a Great Offers from usThis is a Great Offers from usThis is a Great Offers from us.'
                },
                {
                    id: 2,
                    url: 'https://rukminim1.flixcart.com/flap/500/500/image/14d80f.jpg?q=50',
                    text: 'This is a Great Offers from us.This is a Great Offers from usThis is a Great Offers from usThis is a Great Offers from us'
                },
                {
                    id: 3,
                    url: 'https://rukminim1.flixcart.com/flap/500/500/image/c3a4cc.jpg?q=50',
                    text: 'This is a Great Offers from us.This is a Great Offers from usThis is a Great Offers from usThis is a Great Offers from us'
                }
            ]
        }
    }
    render() { 
        return ( 
            <div className="Happiness">
            <h4>happiness Guranteed</h4>
            {
                this.state.cardImg.map((img)=>{
                   return(
                   <div className='items' key={img.id}>
                   <Link to='/'> <img src={img.url} alt="card"/>
                    <p>{img.text}</p> </Link>
                    </div> 
                   )
                })
            }  
          
            </div>
         );
    }
}
 
export default HappinessGur;