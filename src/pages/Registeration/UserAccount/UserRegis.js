import React, { Component, useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {Form, Link, Button } from 'react-bootstrap';
import {userRegisInfo} from '../../UserFunction';
import './userProfile.css';

function UserRegis()
{
    const history = useHistory();

    const [form, setState] = useState({
      name : '',
      email : '',
      phone : '',
      userId: ''
    });

    const updateField=e=>{
      setState({
        ...form,
        [e.target.name]: e.target.value
      });
    };

    const finalStep = e=>{
      
      e.preventDefault();

      const userIdVal = "sb"+Math.floor(Math.random() * 100000);

      const serData = {
        name : form.name,
        email : form.email,
        phone : form.phone,
        userId: userIdVal
      }
     
      userRegisInfo(serData).then((res)=>{
            
        if(res.err){
            alert('User exists')
        }
        else{
            history.push('/userProfile')
        }
        }).
    catch(err=>{
        console.log("err by me");
    })

    }


    useEffect(()=>{
        if(localStorage.partId)
        {
            localStorage.removeItem('partId');      
        }
    })

    return(
        <div className="UserRegis">
            <p className="text-center">Enter Details, to register.</p> <hr/>
        <Form method="POST" onSubmit={finalStep}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Contact Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" autoFocus name="name" value={form.name} onChange={updateField} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email (OPTIONAL)" name="email" value={form.email} onChange={updateField} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control type="tel" placeholder="Enter contact no." name="phone" value={form.phone} onChange={updateField} />
        </Form.Group>

    <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
        <Button variant="success" className="btn mt-2 text-center" type="submit">
            SUBMIT
        </Button> 
        </Form>
        </div>
    )
}

export default UserRegis;