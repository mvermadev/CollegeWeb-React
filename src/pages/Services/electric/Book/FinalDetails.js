import React, { Component, useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import './BookService.css'

function FinalDetails(){
    const {serviceValue} = useParams();
    const history = useHistory();
    
    useEffect(()=>{
        if(!localStorage.userToken)
        {
          alert('Login First')
          history.push('/')
        }
      })

    return(
        <div>
        <div className="FinalDetails">
        <img src="https://www.royallife.biz/images/checkmark.gif" alt="success Order" /> <hr/>
        <p>Dear Customer, Thank you for booking an {serviceValue} service on ServiceBird365. Please find your job details below. We will send you the service provider details soon.</p>
        </div>
        <div className="userDetails">
            <div className="detail">
                <p>Reference No.</p>
                <p>123456789</p>
            </div>
            <div className="detail">
                <p>Name.</p>
                <p>123456789</p>
            </div>
            <div className="detail"> 
                <p>Address.</p>
                <p>123456789</p>
            </div>
            <div className="detail">
                <p>City.</p>
                <p>123456789</p>
            </div>
            <div className="detail">
                <p>Service Type.</p>
                <p>123456789</p>
            </div>
            <div className="detail">
                <p>Services Opted.</p>
                <p>123456789</p>
            </div>
            <div className="detail">
                <p>GST</p>
                <p>123456789</p>
            </div>
        </div>
    </div>
    )
}

export default FinalDetails;