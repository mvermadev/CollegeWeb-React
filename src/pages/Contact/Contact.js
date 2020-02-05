import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'

class Contact extends Component {
    render() {
        return (
            <div className="container">
            <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  required/>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control type="tel" placeholder="Enter Phone No."  required/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Write Message..."  required/>
          </Form.Group>
            <Button variant="info btn-block" type="submit">
              Submit
            </Button>
          </Form>
            </div>
        );
    }
}

export default Contact;