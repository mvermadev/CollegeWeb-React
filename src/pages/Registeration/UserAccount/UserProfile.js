import React, { useState, useEffect } from 'react';
import './userProfile.css'
import { Button } from 'react-bootstrap';
import {useHistory, Link} from 'react-router-dom'
import axios from 'axios';

function UserProfile()
{

    const history = useHistory();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userId, setUserId] = useState('');

    const userAdd = localStorage.userId;

    const getPartnerData = () =>{
        axios.get('/userDetails/fetchUser/'+userAdd)
        .then((res)=>{
            const data = res.data;
            setName(data.data[0].name);
            setPhone(data.data[0].phone);
            setUserEmail(data.data[0].email);
            setUserId(data.data[0].userId)
            console.log("state data : ", data.data[0].name)
            console.log('Data has been received :', data.data)
        })
        .catch(()=>{
            let c = window.confirm('Please register your details!');  
            if(c == true){
              history.push('/userRegistration')
            }
            // console.log('err from userProfile.js')
        })
    }


    useEffect(()=>{
        getPartnerData();
        if(!localStorage.userAuth)
        {
            alert('Login or Register First')
            history.push('/login')
        }
    })

    const editLink = {
        nameLink : '/editProfile/user/name/'+name,
        phoneLink : '/editProfile/user/phone/'+phone,
        emailLink : '/editProfile/user/email/'+userEmail
    }

    return(
        <div>
        <div className="userProfile">
        <div className="profileImg">
            <img src="https://cdn3.iconfinder.com/data/icons/universal-web-mobile-6-9/65/273-512.png" alt="profile" />
                <h5>{name}</h5>
           </div>
        <div>
        <div className="detail">
            <div>
                <p>Name</p> <hr/>
                <p>{name}</p>
            </div>
             <Link to={editLink.nameLink}> <Button variant="outline-dark">Edit</Button> </Link>
        </div>
        <div className="detail">
            <div>
                <p>Email</p> <hr/>
                <p>{userEmail}</p>
            </div>
             <Link to={editLink.emailLink}> <Button variant="outline-dark">Edit</Button> </Link>
        </div>
        <div className="detail">
            <div>
                <p>Contact</p> <hr/>
                <p>{phone}</p>
            </div>
             <Link to={editLink.phoneLink}> <Button variant="outline-dark">Edit</Button> </Link>
        </div>
        <div className="detail">
            <div>
               <h6>Your Order</h6>
            </div>
         <Link to="/myOrders"><Button variant="outline-dark">View</Button></Link>
        </div>
        </div>
        </div>
    </div>

    );
}

export default UserProfile;