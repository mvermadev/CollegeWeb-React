import axios from 'axios';

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
        localStorage.setItem('userToken', user.otp);
        console.log('userToken : ', user.otp);
        return res.data;
    }).
    catch(err=>console.log(err+" from verifiying OTP"))
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