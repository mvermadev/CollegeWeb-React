import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {Route, Link, Redirect} from 'react-router-dom';
import './Partner.css'
import {partnerRegisInfo} from '../../UserFunction';

// Must Add Validation.
class Partner extends Component {
    constructor()
    {
      super()
      this.state = {
        name : '',
        phone : '',
        email : '',
        city : '',
        pincode : '',
        state : '',
        service : '',
      }
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e)
    {
      this.setState({[e.target.name] : e.target.value})
    }
    onSubmit(e)
    {
      e.preventDefault();
  
      const partnerData = {
        name : this.state.name,
        phone : this.state.phone,
        email : this.state.email,
        city : this.state.city,
        pincode : this.state.pincode,
        state : this.state.state,
        service : this.state.service
      }
  
      partnerRegisInfo(partnerData).then(res=>{
        this.props.history.push('/')
      })
  
    }
    render() { 
        return ( 
            <div className="Partner">
            <div className="partnerForm">
            <p className="text-center">Register, as our Service Partner.</p>
            <Form method="POST" onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" required name="name" value={this.state.name} onChange={this.onChange} />
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter Contact No." required name="phone" value={this.state.phone} onChange={this.onChange}  />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required name="email" value={this.state.email} onChange={this.onChange}  />
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" required name="city" value={this.state.city} onChange={this.onChange}  />
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="text" placeholder="Enter City Pincode" required name="pincode" value={this.state.pincode} onChange={this.onChange}  />
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter State" required name="state" value={this.state.state} onChange={this.onChange}  />
            <Form.Label>Your Service</Form.Label>
            <Form.Control type="text" placeholder="Which service you provide?" required name="service" value={this.state.service} onChange={this.onChange}  />
            <Form.Text className="text-muted">
            We'll never share your information with anyone else.
            </Form.Text>
            </Form.Group>
            <Button variant="warning btn btn-block" type="submit">REGISTER</Button>
            </Form>
            </div>
            </div>
            );
        }
    }
    
export default Partner;