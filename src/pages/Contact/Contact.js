import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import { contactInfo } from '../UserFunction';

class Contact extends Component {
  constructor()
  {
    super()
    this.state = {
      name : '',
      email : '',
      phone : '',
      message : ''
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

    const contactData = {
      name : this.state.name,
      email : this.state.email,
      phone : this.state.phone,
      message: this.state.message
    }

    contactInfo(contactData).then(res=>{
      this.props.history.push('/')
    })

  }
    render() {
        return (
            <div className="container">
            <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" required name="name" value={this.state.name} onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  required name="email" value={this.state.email} onChange={this.onChange} />
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control type="tel" placeholder="Enter Phone No." required name="phone" value={this.state.phone} onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Write Message..."  required name="message" value={this.state.message} onChange={this.onChange} />
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