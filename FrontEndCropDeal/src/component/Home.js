import React, { Component } from "react";
import UserService from "../services/UserService";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css';
export default class Home extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        content: ""
      };
    }
  
    componentDidMount() {
      UserService.getPublicContent().then(
        response => {
          this.setState({
            content: response.data
          });
        },
        error => {
          this.setState({
            content:
              (error.response && error.response.data) ||
              error.message ||
              error.toString()
          });
        }
      );
    }
  
    render() {
      return (
        <div className="home">
        <div className="container">
          <header className="jumbotron">
            <h3>{this.state.content}</h3>
          </header>
          <div className="image" >
          <h1 style={{paddingTop:"25px"}} className="blink_me"><center>WELCOME TO AGRICULTURE CROP-DEAL WEBSITE!!!!!</center></h1>
          <h1  className="blink_me"><center>Get the Fresh crops directly from the farms through this site</center></h1>
          {/* <h1 style={{paddingTop:"50px"}} className="blink_me"><center> </center></h1> */}
        </div>
        </div>
        </div>
      );
    }
  }