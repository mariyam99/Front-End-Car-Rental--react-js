import React, { Component } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Component/Navbar";



class Login extends React.Component {

  
 constructor(props) {
  super(props);    
  this.state = {
    errormessage:false
  };
}

passwordVisibile() {
  var x = document.getElementById("inPassword");
  if (x.type === "password") {
      x.type = "text";
  } else {
      x.type = "password";
  }
}

 
handlePasswordChange = (e) => {
  this.setState({
    password: e.target.value
  });
};

handleUserNameChange = (e) => {
  this.setState({
    username: e.target.value
  });
};


doLogin = (e) =>
{
  if(this.state.username === "")
  {
    alert("Please enter username");

  }
  else if(this.state.password === "")
  {
    alert("Please enter password");
  }
  else{
    this.setState({errormessage:false});
  

  let {
    username,
    password
  }=this.state

  let user={
    username: username,
    password: password
  };

  axios.post('http://localhost:8080/findusername',user).then((usernameResponse) =>{
    if(usernameResponse.data !== "NON-EXISTS")
    {
      axios.post('http://localhost:8080/authenticate',user).then(response =>
      {
        if(response !== 'false')
        {
          try{
          localStorage.removeItem("token")
          localStorage.setItem("token", response.data.jwt);
          
          axios.post('http://localhost:8080/checkprofile',user).then(response =>{
          sessionStorage.setItem("login",JSON.stringify(response.data));
           
          this.setState({user:response.data});
           let login=JSON.parse(sessionStorage.getItem("login"));
           if(login.role === "ADMIN")
           {
             window.location ='/AdminHome';
           }
           else if(login.role==="CUSTOMER")
           {
             window.location = '/CustomerHome';
           }
          });
          }
          catch(er){
              alert("wrong");

          }
        }
      else{
        alert("wrong password")
      }


      })
    
     
    
    }
     else if(usernameResponse.data === "NON-EXISTS")
    {
      alert('Username not found');
    }
  });
  }
  
};

handleAlert = () => {
  this.setState({ errorMessage: false });
};

  
  
  render() {
    return (
      <div>
      <Navbar />

      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img
              src="https://i.pinimg.com/originals/b2/f6/87/b2f6879d3c85e1b89fa46f16e6f0047e.png"
              alt=""
            />
            <h3>Welcome</h3>
            <p>New User? Click now to Register!</p>
            <Link className="nav-link" to="/SignUp">
              <input type="submit" name="" value="Register" />
            </Link>
            <br />
          </div>
          <div className="col-md-9 register-right">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Login</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        onChange={this.handleUserNameChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="inPassword"
                        onChange={this.handlePasswordChange}

                      />
                      <input
                        type="submit"
                        className="btnLogin"
                        value="Forgot Password?"
                      />
                      <input type="submit" className="btnLogin" value="Login" onClick={this.doLogin} />

                      {this.state.errorMessage && (
              <div className="ui negative message">
                <i className="close icon" onClick={this.handleAlert}></i>
                <div className="header">User name or password wrong</div>
              </div>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;
