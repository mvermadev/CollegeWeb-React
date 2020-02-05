import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <div>
            <div className="container About">
                <h4>About E-services</h4> <hr/>
                <p>
                Housejoy is a one-stop solution to sort all your home needs ranging from construction to maintenance, professionally and conveniently.
                <br/><br/>
                Our goal is to become India’s largest managed marketplace for construction and renovation. We will do this through a strong in-house team of architects, designers, project managers and relationship managers with over 35 years of combined experience in the construction industry and our strong technological foundation which will digitize the entire workflow from booking experience, design phase, documentation, project execution, quality checks, payment flow and final handover .
                <br/><br/>
                We serve over 7 major cities, with home construction projects covering Bangalore and Hyderabad. We promise highest standard quality, on-time project delivery, extended warranty and a hassle-free experience from plan approval to handover on all our construction projects to all our customers.
                </p>

                <h4>Mission</h4> <hr/> <br/>
                <p>
                To become the largest tech-enabled platform for construction and renovation in India.
                </p>   
                
                <h4>Our Promise</h4> <hr/>
            </div>
            <div className="promise">
                <img src="https://cdn2.iconfinder.com/data/icons/web-store-crayons-volume-2/256/Satisfaction_Guaranteed-512.png" alt="happiness guaranteed"/>
                    <p>HAPPINESS GUARANTEED!</p>
                </div>
            </div>
        );
    }
}

export default About;