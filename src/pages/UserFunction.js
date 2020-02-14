import axios from 'axios';
import {useHistory} from 'react-router-dom';

export const register = newUser=>{
    return axios
    .post('users/sendOtp',  {
        email : newUser.email
    })
    .then(res=>{
        console.log('Registered');
        console.log('Register res.data : ', res.data);
        return res.data;
    })
    .catch(err=>console.log(err + " from axios register"))
}

export const OtpAuth = user=>{
    return axios
    .post('users/otpAuth', {
        otp : user.otp
    })
    .then(res=>{
        console.log('Genuine OTP')
        console.log('userToken : ', user.otp);
        localStorage.setItem('userToken', user.otp);
        console.log('res data : ', res.data);
        return res.data;
    }).
    catch(err=>{
        console.log(err+" from verifiying OTP");

    })
}

export const contactInfo = user => {
    return axios
    .post('ask/query', {
        name: user.name,
        email : user.email,
        phone : user.phone,
        message : user.message
    })
    .then(res=>{
        console.log('Contact Info Sended')
        return res.data
    }).
    catch(err=>console.log(err + " from sending contact info"))
}

export const partnerRegisInfo = user => {
    return axios
    .post('newPartner/partnerRegisteration', {
        name : user.name,
        phone : user.phone,
        email : user.email,
        city : user.city,
        pincode : user.pincode,
        state : user.state,
        service : user.service
    })
    .then(res=>{
        console.log('Partner regis Info Sended')
        return res.data
    }).
    catch(err=>console.log(err + " from sending partner regis info"))
}

export const serviceAddInfo = user => {
    return axios
    .post('/getDetail/serviceAddress', {
        name : user.name,
        email : user.email,
        phone : user.phone,
        address1 : user.address1,
        address2 : user.address2,
        city : user.city,
        pincode : user.pincode,
        state : user.state,
        place : user.place,
        serviceType : user.serviceType,
        referenceNo : user.referenceNo,
    })
    .then(res=>{
        console.log('book service Info Sended')
        return res.data
    }).
    catch(err=>console.log(err + " from sending book service info"))
}

export const userRegisInfo = user => {
    return axios
    .post(`/userDetails/addUser/${user.userId}/${user.name}/${user.email}/${user.phone}`, {
    })
    .then((res)=>{
        console.log('user regis Info Sended')
        return res.data
    }).
    catch((err)=>{
        console.log(err + " from sending user regis info")
    })
}