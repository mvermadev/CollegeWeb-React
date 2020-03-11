import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
import {Button, Form} from 'react-bootstrap'
import './Partner.css'

function EditProfile(){

    // React router.
    const history = useHistory();
    const {fromWhere, field, oldValue} = useParams();
  
    //  State properies for partner
    const [partnerId, setPartnerId] = useState('');
    const [partEmail, setPartEmail] = useState('');
    
    // State properties for user.
    const [userId, setUserId] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [form, setState] = useState({
      newValue : ''
    });

    const partID = localStorage.partId;
    const userID = localStorage.userId;
    
    const From = {fromWhere};
    console.log("FromWhere = ", fromWhere)

    // specifying operator for User OR Partner.
    const specificOperation = () =>{
      if(fromWhere === "partner")
      {
          // Retrieving Partner data.
        
            axios.get('/newPartner/partnerDetails/'+partID)
            .then((res)=>{
                const data = res.data;
                setPartEmail(data.data[0].email)
                setPartnerId(data.data[0].partnerId)
                console.log("state data : ", data.data[0].name)
                console.log('Data has been received :', data.data)
            })
            .catch(()=>{
                alert('Error to retrieving data')
            })
        
      }


      if(fromWhere === "user")
      {
          // Retrieving Partner data.
         
            axios.get('/userDetails/fetchUser/'+userID)
            .then((res)=>{
                const data = res.data;
                setUserEmail(data.data[0].email)
                setUserId(data.data[0].userId)
                console.log("state data : ", data.data[0].name)
                console.log('Data has been received :', data.data)
            })
            .catch(()=>{
                alert('Error to retrieving data')
            })
        
      }
    }

  


    useEffect(()=>{
      specificOperation();
      if(fromWhere === "partner")
      {
        if(!localStorage.partAuth )
        {
          alert('Login or Register First')
          history.push('/partnerLogin')
        }
      }
      if(fromWhere === "user")
      {
        if(!localStorage.userAuth )
        {
          alert('Login or Register First')
          history.push('/login')
        }
      }
  })

     
    //  Update the field value.
     const updateField=e=>{
        setState({
          ...form,
          [e.target.name]: e.target.value
        });
      };

      //  OnSubmit operation.
    const finalStep = e=>{
      
        e.preventDefault();
      
        const setData = {
          newValue : form.newValue
        }

        if(fromWhere === "partner")
        {
        axios.post(`/newPartner/updatePartner/${partnerId}/${partEmail}/${field}/${setData.newValue}`)
        .then(res=>{
            console.log('Partner Update Info Sended')
            if(field === "email")
            {
              localStorage.removeItem('partnerAuth')
              localStorage.removeItem('partnerId')
              history.push('/login')
            }
            else
            {
              history.push('/partnerProfile')
            }
            return res.data
        }).
        catch(err=>console.log(err + " from sending partner update info"))
         }

        if(fromWhere === "user")
        {
          axios.post(`/userDetails/updateUser/${userId}/${userEmail}/${field}/${setData.newValue}`)
          .then(res=>{
              console.log('Partner Update Info Sended')
              if(field === "email")
              {
                localStorage.removeItem('userAuth')
                localStorage.removeItem('userId')
                history.push('/login')
              }
              else
              {
                history.push('/userProfile')
              }
              return res.data
          }).
          catch(err=>console.log(err + " from sending partner update info"))
        }

      }

      const updateService = ()=>{
        
         return(
          <Form method="POST" onSubmit={finalStep}>

          <Form.Group controlId="formBasicEmail">
                  <Form.Label>Changes {field}</Form.Label>
                  <Form.Control as="select" autoFocus required value={form.newValue} onChange={updateField} name="newValue">
                  <option>Select...</option>
                  <option Value="Electrical">Electrical/Appliances</option>
                  <option Value="Home Cleaning">Home Cleaning</option>
                  <option Value="Painting">Painting</option>
                  <option Value="Plumbing">Plumbing</option>
                  <option Value="Salon">Salon</option>
                  <option value="Pest Control">Pest Control</option>
                </Form.Control>
                <Form.Text className="text-muted">
                  Default: {oldValue} Service.
            </Form.Text>
             
          </Form.Group> 
              
  
              <div className="text-center">
              <Button variant="warning" className="btn-block" type="submit">UPDATE</Button>
              </div>
              </Form>
         )
        
      }


    return(
        <div className="container EditProfile">
        
        {field === 'service'? updateService() :  
       
       <Form method="POST" onSubmit={finalStep}>

       <Form.Group controlId="formBasicEmail">
               <Form.Label>Changes {field}</Form.Label>
               <Form.Control type="text" name="newValue" autoFocus placeholder={oldValue} value={form.newValue} onChange={updateField} required/>
           </Form.Group> 

           <div className="text-center">
           <Button variant="warning" className="btn-block" type="submit">UPDATE</Button>
           </div>
           </Form>}
        </div>
    );
}

export default EditProfile;