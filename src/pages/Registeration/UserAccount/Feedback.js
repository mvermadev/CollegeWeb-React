import React, { useState } from 'react';
import {useHistory, Link, useParams} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios';


function Feedback()
{
    const {refNo, name, email, serviceType} = useParams();
    const history = new useHistory();

    const [form, setState] = useState({
        msg : ''
      });


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
              msg : form.msg
            }
    
            axios.post(`/userDetails/userfeedback/${refNo}/${name}/${email}/${serviceType}/${setData.msg}`)
            .then(res=>{
                console.log('user Feedback Sended')
                history.push('/userProfile')
              
                return res.data
            }).
            catch(err=>console.log(err + " from sending user feedback"))
           
          }

    return(
        <div  className="container">
        <h5>Feedback</h5>
            <Form method="POST" onSubmit={finalStep}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="3" placeholder="Write Message..."  required name="message" value={form.msg} onChange={updateField} name="msg"/>
        </Form.Group>
            <div className="text-center">
            <Button variant="info" type="submit">
            Submit
            </Button></div>
        </Form>
        </div>
    )
}

export default Feedback;