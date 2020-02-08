import React, { Component } from 'react';
import {useParams} from 'react-router-dom';


const getServiceName =()=>{
    const {serviceName} = useParams();
    return(
        <div className="container">
            <p>{serviceName}</p>
        </div>
    )
}

class BookService extends Component {
       render() {
        return (
            <div className="container">
                <getServiceName/>
               </div>
        );
    }
}


export default BookService;