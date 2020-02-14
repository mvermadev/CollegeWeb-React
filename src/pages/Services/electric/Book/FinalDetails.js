import React, { Component, useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import './BookService.css'
import { Button } from 'react-bootstrap';

function FinalDetails(){
    const {serviceValue} = useParams();
    const history = useHistory();
    
    const [name, setName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [custState, setCustState] = useState('');
    const [contact, setContact] = useState('');
    const [pincode, setPincode] = useState('');

    
    const refVal = localStorage.refNo;

    
   const getBookData = () =>{
        axios.get('/userDetails/retDetails/'+serviceValue+'/'+refVal)
        .then((res)=>{
            const data = res.data;
            setName(data.data[0].name);
            setPhone(data.data[0].phone);
            setCity(data.data[0].city);
            setPincode(data.data[0].pincode);
            setAddress1(data.data[0].address1);
            setAddress2(data.data[0].address2);
            setCustState(data.data[0].state);
            setContact(data.data[0].phone);
            console.log("state data : ", data.data[0].name)
            console.log('Data has been received :', data.data)
        })
        .catch(()=>{
            alert('Error to retrieving data')
        })
    }

    
    useEffect(()=>{
        getBookData();
        if(!localStorage.userToken)
        {
            alert('Login First')
            history.push('/')
        }
    })

    const lastStage = ()=>{
        axios.get(`/userDetails/specPartner/${name}/${address1}/${address2}/${city}/${pincode}/${custState}/${contact}/${serviceValue}`)
        .then(()=>{
            console.log('spec partner reponse')
            history.push('/');
        }).
        catch((err)=>{
            console.log('Error to retrieving spec partner data : ', err)
        })
    }
    
    return(
        <div>
        <div className="FinalDetails">
        <img src="https://www.royallife.biz/images/checkmark.gif" alt="success Order" /> <hr/>
        <p>Dear Customer, Thank you for booking an {serviceValue} service on ServiceBird365. Please find your job details below. We will send you the service provider details soon.</p>
        </div>
        <div className="userDetails">
            <div className="detail">
                <p>Reference No.</p>
                <p>{refVal}</p>
            </div>
            <div className="detail">
                <p>Name</p>
                <p>{name}</p>
            </div>
            <div className="detail">
                <p>Contact No.</p>
                <p>{phone}</p>
            </div>
            <div className="detail">
                <p>City</p>
                <p>{city}</p>
            </div>
            <div className="detail">
                <p>Pincode</p>
                <p>{pincode}</p>
            </div>
            <div className="detail">
                <p>Services Opted.</p>
                <p>Any {serviceValue} Work.</p>
            </div>
            <div className="detail">
                <p>GST</p>
                <p>Integrated GST @5%</p>
            </div>
            </div>
            <div className="container text-center">
            <Button variant="success" className="btn-block" onClick={lastStage}>Confirm Booking</Button>
            </div>

            
    </div>
    )
}

export default FinalDetails;