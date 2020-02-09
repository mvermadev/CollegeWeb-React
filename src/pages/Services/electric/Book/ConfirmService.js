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

    const {serviceType} = useParams();
    const detailsClick = "/bookService/"+serviceType;

    const infoClick = (props)=>{
      {localStorage.userToken? history.push(detailsClick) : history.push('/login')}
      
    }

    return(
        <div className="ConfirmService container">
        <p className="instruction text-center">Please, Book your {serviceType} service. then we will shortly give you confirmation.</p> <hr/>

        <div className="serviceDetails">
          
        <div className="serviceName mt-2">
            <h5>{serviceType}</h5>
            <p>Any {serviceType} work.</p> <hr/>
            <p><i>Inspection charges will be adjusted against the final bill.</i></p>
        </div>

        <Button variant="danger" onClick={deleteClick}>Delete</Button>

        </div>

        <div className="payDetails mt-3">

            <div className="payInfo mt-2">
                <h6>Total Amount:</h6>
                <h6>On Inspection</h6>
            </div>
            <hr/>
            <Form  onSubmit={infoClick} id="myForm" className="checkForm text-center">
            {['checkbox'].map(type => (
              <div key={`custom-${type}`} className="mb-3">
                <Form.Check 
                  custom
                  type={type}
                  id={`custom-${type}`}
                  label={`I agree to pay after ${serviceType} service.`} required
                />
              </div>
            ))}

            
            </Form>
            
            </div>
          <Button type="submit" form="myForm" variant="success" className="btn-block mt-2">Book Now!</Button>

        </div>
    )
}

export default ConfirmService;