import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {useHistory, Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import './Partner.css'

function PartProfile(){

    const history = useHistory();
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [partEmail, setPartEmail] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [custState, setCustState] = useState('');
    const [service, setService] = useState('');
    const [partnerId, setPartnerId] = useState('');


    const partID = localStorage.partId;

    
    const getPartnerData = () =>{
         axios.get('/newPartner/partnerDetails/'+partID)
         .then((res)=>{
             const data = res.data;
             setName(data.data[0].name);
             setPhone(data.data[0].phone);
             setPartEmail(data.data[0].email);
             setCity(data.data[0].city);
             setPincode(data.data[0].pincode);
             setCustState(data.data[0].state);
             setService(data.data[0].service);
             setPartnerId(data.data[0].partnerId)
             console.log("state data : ", data.data[0].name)
             console.log('Data has been received :', data.data)
         })
         .catch(()=>{
             let c = window.confirm('Please register your details!');  
             if(c == true){
               history.push('/partner')
             }
         })
     }

    useEffect(()=>{
        getPartnerData();
        if(!localStorage.partAuth)
        {
            alert('Login or Register First')
            history.push('/partnerLogin')
        }
    })

    
    const editLink = {
         nameLink : '/editProfile/partner/name/'+name,
         phoneLink : '/editProfile/partner/phone/'+phone,
         emailLink : '/editProfile/partner/email/'+partEmail,
         cityLink : '/editProfile/partner/city/'+city,
         pincodeLink : '/editProfile/partner/pincode/'+pincode,
         stateLink : '/editProfile/partner/state/'+custState,
         serviceLink : '/editProfile/partner/service/'+service,

     }


    return(
        <div >
        <div className="profileImg">
        <img src="https://cdn3.iconfinder.com/data/icons/business-and-employment-2/48/laptop_profile_view_computer_information-512.png" alt="partner profile"/>
        <h5 className="text-center">Partner Profile</h5>
        </div>
        <div className="partnerDetails container">
            <div className="detail">
                <p>Name</p>
                <p>{name}
               <Link to={editLink.nameLink}> <Button variant="outline-dark">Edit</Button> </Link>
                </p>

            </div>
            <div className="detail">
                <p>Contact No.</p>
                <p>{phone}
                <Link to={editLink.phoneLink}> <Button variant="outline-dark" >Edit</Button> </Link>
                </p>
            </div>
            <div className="detail">
                <p>Email.</p>
                <p>{partEmail}
                <Link to={editLink.emailLink}> <Button variant="outline-dark" >Edit</Button> </Link>
                </p>
            </div>
            <div className="detail">
                <p>City</p>
                <p>{city}
                <Link to={editLink.cityLink}> <Button variant="outline-dark" >Edit</Button> </Link>
                </p>
            </div>
            <div className="detail">
                <p>Pincode</p>
                <p>{pincode}
                <Link to={editLink.pincodeLink}> <Button variant="outline-dark" >Edit</Button> </Link>
                </p>
            </div>
            <div className="detail">
                <p>State</p>
                <p>{custState}
                <Link to={editLink.stateLink}> <Button variant="outline-dark" >Edit</Button> </Link>
                </p>
            </div>
            <div className="detail">
                <p>Services</p>
                <p>{service}
                <Link to={editLink.serviceLink}> <Button variant="outline-dark" >Edit</Button> </Link>
                </p>
            </div>
            </div>
        </div>
    );
}

export default PartProfile;