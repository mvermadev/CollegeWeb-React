import React, { Component, useEffect, useState } from 'react';
import {useParams, useHistory, Link} from 'react-router-dom';
import {Form, Button, Col, Row} from 'react-bootstrap'
import {serviceAddInfo} from '../../UserFunction';
import './BookService.css'

function BookService(){
    const history = useHistory();
    const {serviceName, subService} = useParams();
    const myService = "/finalDetails/"+serviceName+'/'+subService;

    const [form, setState] = useState({
      name : '',
      email : '',
      phone : '',
      address1 : '',
      address2 : '',
      city : '',
      pincode : '',
      state : '',
      place : '',
      serviceType : '',
      subService : '',
      referenceNo: ''
    });

    const updateField=e=>{
      setState({
        ...form,
        [e.target.name]: e.target.value
      });
    };

    const finalStep = e=>{
      
      e.preventDefault();

      const refvalue = "sb"+Math.floor(Math.random() * 100000);

      const serData = {
        name : form.name,
        email : form.email,
        phone : form.phone,
        address1 : form.address1,
        address2 : form.address2,
        city : form.city,
        pincode : form.pincode,
        state : form.state,
        place : form.place,
        serviceType : serviceName,
        subService : subService,
        referenceNo: refvalue
      }
     
      serviceAddInfo(serData).then(()=>{
        localStorage.setItem("refNo", refvalue);
        history.push(myService)
      })

    }


    useEffect(()=>{
      if(!(localStorage.userAuth))
      {
        alert('Login First')
        history.push('/')
      }
    })

    return(
        <div className="BookService">
            <p className="text-center">Enter Details, to get {serviceName} {subService} service.</p> <hr/>
        <Form method="POST" onSubmit={finalStep}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Contact Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name="name" value={form.name} onChange={updateField} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email (OPTIONAL)" name="email" value={form.email} onChange={updateField} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control type="tel" placeholder="Enter contact no." name="phone" value={form.phone} onChange={updateField} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" placeholder="Address 1" name="address1" value={form.address1} onChange={updateField} />
        <Form.Control className="mt-2" type="text" placeholder="Address 2" name="address2" value={form.address2} onChange={updateField} />
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
        id="formHorizontalRadios1" value="home" onChange={updateField}
      />
      <Form.Check className="ml-2"
        type="radio"
        label="OFFICE"
        name="place"
        id="formHorizontalRadios2" value="office" onChange={updateField}
      />
      <Form.Check className="ml-2"
        type="radio"
        label="OTHER"
        name="place"
        id="formHorizontalRadios3" value="other" onChange={updateField}
      />
    </Row>
  </Form.Group>
    <Form.Text className="text-muted">
    We'll never share your info with anyone else.
    </Form.Text>
    <div className="text-center">
    <Button variant="success" className="btn-block rounded mt-2" type="submit">BOOK</Button> 
    </div>
        </Form>
        </div>
    )
}


export default BookService;