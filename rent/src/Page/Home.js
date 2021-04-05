import React, { Component } from "react";
import s1 from "../images/s1.gif";
import "./Home.css";
import {
  Card,CardDeck, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Container,Col
} from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        {/*carosel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={s1} className="d-block w-100" alt="..." />
          </div>
        </div>
        {/*carosel */}
        <section id="steps">
          <div className="container text-center pt-4">
            <h1>Rent your car in 3 just steps, without any advance payment!</h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="feature-wrap">
                  <i className="fa fa-user"></i>
                </div>
                <h3>Register/Login</h3>
                <h4>Login to your account.New user?Get Registered now!</h4>
              </div>
              <div className="col-sm-4">
                <div className="feature-wrap">
                  <i className="fa fa-calendar-alt"></i>
                </div>
                <h3>Select your Car</h3>
                <h4>Choose your prefered car, with your prefred date.</h4>
              </div>
              <div className="col-sm-4">
                <div className="feature-wrap">
                  <i className="fa fa-thumbs-up"></i>
                </div>
                <h3>Confirmation</h3>
                <h4>Recieve your confirmation, Collect your keys!</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
