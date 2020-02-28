import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {OtpAuth} from '../../UserFunction';
import '../Login'

class Otp extends Component {
    constructor()
    {
        super()
        this.state = {
            otp : ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e)
    {
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit(e)
    {
        e.preventDefault()
        const authCode = {
            otp : this.state.otp
        }

        OtpAuth(authCode).then(()=>{
            if(localStorage.userToken == authCode.otp)
            {
                localStorage.setItem('partAuth', authCode.otp);
                window.location.replace('/partnerProfile')
            }
            else
            {
                alert("Enter correct OTP.")
                
            }
        })
    }

    render() { 
        return ( 
            <div className="Login">
            <div className="loginForm">
            <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" name="otp" value={this.state.otp} placeholder="Enter OTP" autoFocus required onChange={this.onChange} />
            </Form.Group>
            <Button variant="success btn btn-block" type="submit"> Get In! </Button>
            </Form>
            </div>
            </div>
            );
        }
    }
    
export default Otp;