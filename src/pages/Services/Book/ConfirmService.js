import React, { Component } from 'react';
import {useParams, useHistory, Link, Redirect, withRouter} from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './BookService.css';

function ConfirmService(){

    const history = useHistory();
    const deleteClick = (props)=>{
        let c = window.confirm('are you sure?');  
        if(c == true){
          history.push('/')
        }
        }

    const {serviceType, subService} = useParams();
    const detailsClick = "/bookService/"+serviceType+'/'+subService;

    const infoClick = (props)=>{
      {localStorage.userToken? history.push(detailsClick) : history.push('/login')}
      
    }

    return(
        <div className="ConfirmService container">
        <p className="instruction text-center">Please, Book your {subService} service. then we will shortly give you confirmation.</p> <hr/>

        <div className="deskView">
        <div className="serviceDetails">
          
        <div className="serviceName mt-2">
            <h5>{subService}</h5>
            <p>Any {subService} work.</p> <hr/>
            <p><i>Inspection charges will be adjusted against the final bill.</i></p>
        </div>

        <Button variant="danger" onClick={deleteClick}>Delete</Button>

        </div>

        <div className="rightView text-center">
        <div className="payDetails mt-3 ">
        
        <div className="payInfo mt-2">
        <h7>Total Amount:</h7>
        <h6>150 + On Inspection</h6>
        </div>
        <hr/>
        <Form  onSubmit={infoClick} id="myForm" className="checkForm text-center">
        {['checkbox'].map(type => (
          <div key={`custom-${type}`} className="mb-3">
          <Form.Check 
          custom
          type={type}
          id={`custom-${type}`}
          label={`I agree to pay after ${subService} service.`} required
          />
          </div>
          ))}
          </Form>
          <hr/>
          <div className="satisfyImg">
            <img src="https://dweyg64kwaplt.cloudfront.net/assets/0c21f5c713d74b5bdbf560d49383e01f.svg" alt="Satisfaction Guaranteed" />
            <p>Satisfaction Guaranteed or FREE Rework on the {subService} service</p>
           </div>
          
           </div>
          <Button type="submit" form="myForm" variant="info" className="btn-block mt-2 rounded-pill">CONTINUE</Button>
          </div>
          </div>
        </div>
    )
}

export default ConfirmService;