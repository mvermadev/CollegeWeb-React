import React, { Component, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import {Route, Redirect, Link, useHistory, useLocation} from 'react-router-dom';
import {register} from '../../UserFunction';
import '../Login.css'

// Must Add Validation.
class PartLogin extends Component {
    constructor()
    {
        super()
        this.state={
            email: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e)
    {
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit(e)
    {
        e.preventDefault()

        const user = {
            email : this.state.email
        }

        
        register(user).then(res=>{
            if(res)
            {
                // Redirect.push('/auth');
                // window.location.replace('/auth');
                // this.props.useHistory.push('/auth');
                // useLocation.push('/auth');
                // useHistory.push('/auth');
                console.log("successfully registered.")
                localStorage.setItem('partId', user.email);
            }
            else{
                localStorage.setItem('partId', user.email);
                this.props.history.push('/partnerOtp');
                console.log('Err to register');
            }
        })
    }

    componentDidMount(){
            localStorage.removeItem('userAuth')
            localStorage.removeItem('userId')
            localStorage.removeItem('partAuth')
            localStorage.removeItem('partId')
    }


    render() { 
        return ( 
            <div className="Login">
            <div className="loginForm">
            <h5 className="text-center" style={{color: '#028f7c', position: 'relative', bottom: '10px'}}>Partner Login</h5>
            <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" autoFocus required name="email" onChange={this.onChange} value={this.state.email}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>
            <Button variant="warning btn btn-block" type="submit">Get OTP</Button> 
            </Form>
            </div>
            </div>
            );
        }
    }


export default PartLogin;