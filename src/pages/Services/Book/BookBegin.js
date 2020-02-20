import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'
import './BookService.css'

// import '../electric/SubService/SubService.css'

class Fan extends Component {
  constructor()
  {
    super();
    this.state = {
        serviceVal : '',
        subService : '',
    }
  }

  componentDidMount(){
    const val1 = this.props.match.params.serviceVal;
    const val2 = this.props.match.params.subService;
        this.setState({serviceVal : val1}) 
        this.setState({subService : val2}) 
        console.log("serVal : ", this.state.serviceVal);
        
    }
  render() { 
    console.log("serVal : ", this.state.serviceVal);
    const nextLink = `/confirmService/${this.state.serviceVal}/${this.state.subService}`;

    return ( 
      <div className="SubService text-center">
             <img src="https://image.freepik.com/vecteurs-libre/remettre-neuf-illustration-du-processus-accueil-dans-contour-plat-colore_1995-548.jpg" alt={this.state.serviceVal} />
            <div className="container product">
                 <hr/>
                <h5 className="text-left">{this.state.serviceVal} | {this.state.subService} Service.</h5>
                <p className="caution">Inspection charges will be adjusted against the final bill.</p>
                <div className="price">
                  <h7>SUB TOTAL:</h7>  
                <h5>₹150 + On Inspection</h5>
                </div>
              <Link to={nextLink}>  <Button className="btn btn-success mt-3 btn">BOOK NOW!</Button></Link> <hr/>
                <p>Our service provider is highly competent personality to do your work properly</p>
                </div>
           
      </div>
     );
  }
  }
   
export default Fan