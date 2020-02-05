import axios from 'axios';

export const register = newUser=>{
    return axios
    .post('users/sendOtp',  {
        email : newUser.email
    })
    .then(res=>{
        console.log('Registered');
        return res.data;
    })
    .catch(err=>console.log(err + " from axios register"))
}