import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {Route, Link, Redirect} from 'react-router-dom';
import './Partner.css'

// Must Add Validation.
class Partner extends Component {
    
    render() { 
        return ( 
            <div className="Partner">
            <div className="partnerForm">
            <p className="text-center">Register, as our Service Partner.</p>
            <Form method="POST">
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" required />
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter Contact No." required />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" required />
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter State" required />
            <Form.Label>Your Service</Form.Label>
            <Form.Control type="text" placeholder="Which service you provide?" required />
            <Form.Text className="text-muted">
            We'll never share your information with anyone else.
            </Form.Text>
            </Form.Group>
            <Link to='/'><Button variant="warning btn btn-block" type="submit">REGISTER</Button></Link> 
            </Form>
            </div>
            </div>
            );
        }
    }
    
export default Partner;