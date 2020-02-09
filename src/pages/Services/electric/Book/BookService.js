import React, { Component, useEffect, useState } from 'react';
import {useParams, useHistory, Link} from 'react-router-dom';
import {Form, Button, Col, Row} from 'react-bootstrap'
import {serviceAddInfo} from '../../../UserFunction';
import './BookService.css'

function BookService(){
    const history = useHistory();
    const {serviceName} = useParams();
    const myService = "/finalDetails/"+serviceName;

    const [form, setState] = useState({
      name : '',
      email : '',
      phone : '',
      address : '',
      city : '',
      pincode : '',
      state : '',
      place : '',
      serviceType : ''
    });

    const updateField=e=>{
      setState({
        ...form,
        [e.target.name]: e.target.value
      });
    };

    const finalStep = e=>{
      
      e.preventDefault();

      const serData = {
        name : form.name,
        email : form.email,
        phone : form.pincode,
        address : form.address,
        city : form.city,
        pincode : form.pincode,
        state : form.state,
        place : form.place,
        serviceType : serviceName
      }
     
      serviceAddInfo(serData).then(()=>{
        history.push(myService)
      })

    }


    useEffect(()=>{
      if(!localStorage.userToken)
      {
        alert('Login First')
        history.push('/')
      }
    })

    return(
        <div className="BookService">
            <p className="text-center">Enter Details, to get {serviceName} service.</p> <hr/>
        <Form method="POST" onSubmit={finalStep}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Contact Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name="name" value={form.name} onChange={updateField} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={form.email} onChange={updateField} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control type="tel" placeholder="Enter contact no." name="phone" value={form.phone} onChange={updateField} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control as="textarea" rows="3" value={form.address} name="address" onChange={updateField} />
      </Form.Group>
      
      <Form.Group controlId="formBasicEmail">
      <Form.Label>City.</Form.Label>
      <Form.Control type="text" placeholder="Enter Cty" name="city" value={form.city} onChange={updateField} />
    </Form.Group>
      
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Pincode.</Form.Label>
      <Form.Control type="text" placeholder="Enter Area Pincode" name="pincode" value={form.pincode} onChange={updateField} />
    </Form.Group>
      
    <Form.Group controlId="formGridState">
    <Form.Label>State</Form.Label>
    <Form.Control as="select" value={form.state} name="state" onChange={updateField}>
      <option>Choose...</option>
      <option>Andra Pradesh</option>
      <option>Arunachal Pradesh</option>
      <option>Assam</option>
      <option>Bihar</option>
      <option>Chhattisgarh</option>
      <option>Goa</option>
      <option>Gujarat</option>
      <option>Haryana</option>
      <option>Himachal Pradesh</option>
      <option>Jammu and Kashmir</option>
      <option>Jharkhand</option>
      <option>Karnataka</option>
      <option>Kerala</option>
      <option>Madya Pradesh</option>
      <option>Maharashtra</option>
      <option>Manipur</option>
      <option>Meghalaya</option>
      <option>Mizoram</option>
      <option>Nagaland</option>
      <option>Orissa</option>
      <option>Punjab</option>
      <option>Rajasthan</option>
      <option>Sikkim</option>
      <option>Tamil Nadu</option>
      <option>Telagana</option>
      <option>Uttaranchal</option>
      <option>Uttar Pradesh</option>
      <option>West Bengal</option>
    </Form.Control>
  </Form.Group>

  <Form.Group as={Col}>
    <Row sm={10}>
      <Form.Check className="ml-2"
        type="radio"
        label="HOME"
        name="place"
        id="formHorizontalRadios1" value={form.place} onChange={updateField}
      />
      <Form.Check className="ml-2"
        type="radio"
        label="OFFICE"
        name="place"
        id="formHorizontalRadios2" value={form.place} onChange={updateField}
      />
      <Form.Check className="ml-2"
        type="radio"
        label="OTHER"
        name="place"
        id="formHorizontalRadios3" value={form.place} onChange={updateField}
      />
    </Row>
  </Form.Group>
    <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
        <Button variant="success" className="btn mt-2 text-center" type="submit">
            BOOK
        </Button> 
        </Form>
        </div>
    )
}


export default BookService;