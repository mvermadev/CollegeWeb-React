import React, { Component } from 'react';
import './Services.css'
import '../../desktop.css'

class Services extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            services : [
                {
                    id: 1,
                    url: 'https://cdn3.iconfinder.com/data/icons/real-estate-v-1/64/Real_estate-40-512.png',
                    text: 'Appliances Service'
                },
                {
                    id: 2,
                    url: 'https://cdn0.iconfinder.com/data/icons/tourism-and-outdoor-recreation-6/512/429_hotel__building_service_home-512.png',
                    text: 'Home Service'
                },
                {
                    id: 3,
                    url: 'https://cdn1.iconfinder.com/data/icons/online-teaching-and-school/512/Painting-512.png',
                    text: 'Painting Service'
                },
                {
                    id: 4,
                    url: 'https://cdn3.iconfinder.com/data/icons/real-estate-v-1/64/Real_estate-19-512.png',
                    text: 'Plumbing Service'
                },
                {
                    id: 5,
                    url: 'https://cdn4.iconfinder.com/data/icons/health-beauty-spa-salon-and-fashion/49/29-512.png',
                    text: 'Salon Service'
                },
                {
                    id: 6,
                    url: 'https://cdn4.iconfinder.com/data/icons/alarm-system-true-line-color/32/disinsection-disinsectization-pest-control-512.png',
                    text: 'Pest Control'
                },
            ]
        }
    }
    render() {
        return (
            <div className="Services">
                {
                    this.state.services.map((ser)=>{
                        return(
                            <div className="items" key={ser.id}>
                                <img src={ser.url}/>
                                <p>{ser.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Services;