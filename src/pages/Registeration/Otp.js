import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Login.css'

class Otp extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container Login">
            <div className="loginForm">
            <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Control type="number" placeholder="Enter OTP" required />
            </Form.Group>
            <Link to='/'> <Button variant="success btn btn-block" type="submit"> Get In! </Button> </Link>
            </Form>
            </div>
            </div>
            );
        }
    }
    
export default Otp;