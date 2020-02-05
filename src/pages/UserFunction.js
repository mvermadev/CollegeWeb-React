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