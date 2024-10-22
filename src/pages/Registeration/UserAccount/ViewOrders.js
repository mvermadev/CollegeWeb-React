import React, { useState, useEffect, Component } from 'react';
import {useHistory, Link, useParams} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import axios from 'axios';
import './userProfile.css'

// Task: To fetch data from json file "allData"

function ViewOrders()
{

    const {serviceValue} = useParams();
    const history = useHistory();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
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
                setEmail(data[0].email);
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
   
    const fbUrl = `/feedback/${refNo}/${name}/${email}/${service}`
    return(
        <div>
            <div className="container ViewOrder">
            <div className="order">
                <h5>{service}</h5> <hr/>
                <p>Ref No: {refNo}</p>
                <p>Placed On: {created.slice(0,10)}</p>
                <p>City: {city}</p>
                <p>Contact Name: {name}</p>
                <div class="text-right">
              <Link to={fbUrl}>  <Button variant="outline-info">Feedback</Button></Link>
                </div>
            </div>
         </div>
        </div>
    );
}




export default ViewOrders;