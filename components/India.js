import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Statedata from './Statedata';
import axios from 'axios';
class India extends Component {
    constructor(){
        super();
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            this.setState({data:response.data});
        })
    }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <img
            src="https://media.istockphoto.com/photos/india-flag-picture-id182789856?b=1&k=6&m=182789856&s=170667a&w=0&h=fPRsNp2v15aSR_ooaY0ZZk-QwMPPA5JlUdWEIWXXyEs="
            height="50px"
            width="50px"
          />
          <h3>INDIA</h3>
        </div>
        <div className="col-md-12">
            
          <div className="row">
            <div className="col-md-3">
              <Card className="badge badge-info" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>TOTAL CASES</Card.Title>
                  <h3>{this.state.data.cases}</h3>
                  
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="badge badge-warning" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>ACTIVE CASES</Card.Title>
                  <h3>{this.state.data.active}</h3>
                  
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="badge badge-success" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>RECOVERED</Card.Title>
                  <h3>{this.state.data.recovered}</h3>
                  
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="badge badge-danger" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>TOTAL DEATHS</Card.Title>
                  <h3>{this.state.data.deaths}</h3>
                  
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-md-12">
                <Statedata/>
            </div>
      </div>
      
    );
  }
}
export default India;
