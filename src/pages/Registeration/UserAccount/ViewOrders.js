import React, { useState, useEffect, Component } from 'react';
import {useHistory, Link, useParams} from 'react-router-dom'
import axios from 'axios';
import allData from './orderData.json';
import './userProfile.css'

// Task: To fetch data from json file "allData"

function ViewOrders()
{

    const {serviceValue} = useParams();
    const history = useHistory();
    
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [refNo, setRefNo] = useState('');
    const [created, setCreated] = useState('');
    const [service, setService] = useState('');

    const userId = localStorage.userId;

   const getBookData = () =>{
        axios.get('/userDetails/userOrders/'+userId)
        .then((res)=>{
            const data = res.data;
                setName(data[0].name);
                setCity(data[0].city);
                setService(data[0].serviceType);
                setRefNo(data[0].referenceNo);
                setCreated(data[0].created);
            //     console.log("state data from ViewOrder.js : ", data)
            console.log('ViewOrder.js data Lenght :', data.length)
            console.log('Data has been received :', data)
        })
        .catch((err)=>{
            // alert('You doesnt have any past order.');
            // history.push('/userProfile')
            console.log('Err from ViewOrder.js ', err)
        })
    }

    
    useEffect(()=>{
        getBookData();
        if(!localStorage.userAuth)
        {
            alert('Login First')
            history.push('/')
        }
    })
   
    
    return(
        <div>
            <div className="container ViewOrder">
            <div className="order">
                <h5>{service}</h5> <hr/>
                <p>Ref No: {refNo}</p>
                <p>Placed On: {created}</p>
                <p>City: {city}</p>
                <p>Contact Name: {name}</p>
            </div>
            </div>
        </div>
    );
}




export default ViewOrders;