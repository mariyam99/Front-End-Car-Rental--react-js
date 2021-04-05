import React, { Component } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import e from "cors";
import axios from "axios";


class Login extends React.Component {

  
 constructor(props) {
  super(props);    
  this.state = {
    errormessage:false
  };
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
  }

  let {
    username,
    password,
    user
  }=this.state

  let object={
    username: this.state.username,
    password: this.state.password
  };

  axios.post('http://localhost:8080/authenticate',object,username).then((response) =>
  {
   if(response.data === "SUCCESS")
   {
     axios.post('http://localhost:8080/signup/'+ {username}).then(response =>
     {
       sessionStorage.setItem("loggedInUser",JSON.stringify(response.data));
       this.setState({user:response.data});
       let loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
       window.location= '/About'
     });

   }
   else 
   {
    this.setState({errormessage:true});

   }
  });

}

handleAlert = () => {
  this.setState({ errorMessage: false });
};

  
  
  render() {
    return (
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
    );
  }
}

export default Login;
