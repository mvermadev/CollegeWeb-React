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
        partnerId : ''
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
  
      const refvalue = "pi"+Math.floor(Math.random() * 100000);

      const partnerData = {
        name : this.state.name,
        phone : this.state.phone,
        email : this.state.email,
        city : this.state.city,
        pincode : this.state.pincode,
        state : this.state.state,
        service : this.state.service,
        partnerId: refvalue
      }
      
      console.log(refvalue)

      partnerRegisInfo(partnerData).then(res=>{
        this.props.history.push('/partnerProfile')
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
           
            <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Your Service</Form.Label>
            <Form.Control as="select" value={this.state.service} onChange={this.onChange} name="service" required>
              <option value="">Choose...</option>
              <option Value="Electrical">Electrical/Appliances</option>
              <option Value="Home Cleaning">Home Cleaning</option>
              <option Value="Painting">Painting</option>
              <option Value="Plumbing">Plumbing</option>
              <option Value="Salon">Salon</option>
              <option value="Pest Control">Pest Control</option>
            </Form.Control>
            <Form.Text className="text-muted">
            Note: <Link to="contact">Contact us</Link>, if your service is different.
            </Form.Text>
           
          </Form.Group>

            </Form.Group>
          
            <Button variant="warning btn btn-block" type="submit">REGISTER</Button>
            </Form>
            <Link to="/partnerLogin"><Button variant="info btn btn-block" className="mt-2">Partner Login</Button></Link>
            <Form.Text className="text-muted">
            We'll never share your information with anyone else.
            </Form.Text>
            </div>
            </div>
            );
        }
    }
    
export default Partner;