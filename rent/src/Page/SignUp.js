import React, { Component } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Navbar from "../Component/Navbar";
 

class SignUp extends React.Component {
 
constructor(props){
  super(props);
  this.state={
    redirect: false,
    firstName:'',
    lastName:'',
    email:'',
    age:'',
    phone:'',
    username:'',
    password:'',
    nic:'',
    role: '',
    licenseNo: '',
    isBlacklisted:false,
    userId: this.props.id,
    errors: {},
    
  };
}
  
handleChange = (input) => (event) => {
  this.setState({ [input]: event.target.value });
};


isFormValid = () => {
  const errors = {};
  let {
    username,
    password,
    firstName,
    lastName,
    email,
    phone,
    age,
    nic,
    licenseNo,
    
  } = this.state;

  if (!username) errors.username = "username is required.";
  else if(username.length>20 || username.length<5){
    errors.username="The username should not exceed 20 or less than 5 characters";
  }
  if (!password) errors.password = "password is required.";
  if (!firstName) errors.firstName = "First name is required.";
  if (!lastName) errors.lastName = "Last name is required.";
  if (!email) errors.email = "Email is required.";
  else if(!/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(email))
  {
   errors.email="Invalid email address"
  }
  
  if (!phone) errors.phone = "phone no is required.";
  else if((!/^[0-9]+$/.test(phone)))
  {
    errors.phone = "phone no is invalid.";
  }
  if (!age) errors.age = "age is required.";
  else if(!/^\d+$/.test(age))
  {
    errors.age = "Age is invalid.";
  }
  else if(age<18 || age> 70)
  {
    errors.age=("You are under aged or over age to get registered")
  }
  if (!licenseNo) errors.licenseNo="Liscence Number is required";
  else if (!/^\d+$/.test(licenseNo)) errors.licenseNo = "license no is invalid.";

  if (!nic) errors.nic="NIC Number is required";
  else if (!/^\d+$/.test(nic)) errors.nic = "NIC Number is invalid.";

  

  this.setState({
    errors: errors,
  });
  return Object.keys(errors).length === 0;
};

back(){
  window.location='/'
}


saveAndContinue = (e) => {
  e.preventDefault();
  if (!this.isFormValid()) return;

  let {
    username,
    password,
    firstName,
    lastName,
    email,
    phone,
    age,
    nic,
    licenseNo,
  } = this.state;

  let user = {
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    age: age,
    nic:nic,
    isBlacklisted:false,
    licenseNo: licenseNo,
    role:'CUSTOMER'
  };

  axios.post('http://localhost:8080/signup',user).then((response)=>{
     let { user } = this.state;
      user.push(response.data);
}
  );
  alert("You are registered sucesfully")
  window.location='/login'

};


 
  render() {
    const {
      username,
      password,
      firstName,
      lastName,
      email,
      phone,
      role,
      age,
      licenseNo,
      nic,
      errors,
   
    } = this.state;

    const values = {
      username,
      password,
      firstName,
      lastName,
      email,
      phone,
      role,
      age,
      nic,
      licenseNo,
    };



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
            <p>
              No Adavance payment! Collect your keys by just confirming your
              date
            </p>
            <Link className="nav-link" to="/Login">
              <input type="submit" name="" value="Login" />{" "}
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
                <h3 className="register-heading"> Register Now!</h3>
                <div className="row register-form">
                  <div className="col-md-6">

         
                  <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name*"
                        onChange={this.handleChange("firstName")}
                        value={values.firstName}

                      />
            {errors.firstName && (
              <div className="ui negative message">
                <div className="header">{errors.firstName}</div>
              </div>
            )}
                  </div>
                   
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name *"
                        onChange={this.handleChange("lastName")}
                        value={values.lastName}

                      />
                        {errors.lastName && (
              <div className="ui negative message">
                <div className="header">{errors.lastName}</div>
              </div>
            )}
                    </div>

                
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          onChange={this.handleChange("username")}
                          value={values.username}
                        />
                  {errors.username && (
              <div className="ui negative message">
                <div className="header">{errors.username}</div>
              </div>
            )}
                      </div>
                      <div className="form-group">

                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                        id="password"
                        onChange={this.handleChange("password")}
                        value={values.password}

                      />     
                        {errors.password && (
              <div className="ui negative message">
                <div className="header">{errors.password}</div>
              </div>
            )}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        onChange={this.handleChange("email")}
                        value={values.email}
                      />
         {errors.email && (
              <div className="ui negative message">
                <div className="header">{errors.email}</div>
              </div>
            )}
   
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        onChange={this.handleChange("phone")}
                        value={values.phone}
                      />      
                        {errors.phone && (
              <div className="ui negative message">
                <div className="header">{errors.phone}</div>
              </div>
            )}     
                    </div>
                   
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Age"
                 onChange={this.handleChange("age")}
                 value={values.age}
                      />
                        {errors.age && (
              <div className="ui negative message">
                <div className="header">{errors.age}</div>
              </div>
            )}
                 </div>

                 <div className="form-group">
                      <input
                       className="form-control"

                placeholder="Liscence Number"
                onChange={this.handleChange("licenseNo")}
                value={values.licenseNo}
                      />
                 {errors.licenseNo && (
              <div className="ui negative message">
                <div className="header">{errors.licenseNo}</div>
              </div>
            )}
                    </div>   
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="NIC"
                        id="nic"
                        onChange={this.handleChange("nic")}
                        value={values.nic}
                   />
                     {errors.nic && (
              <div className="ui negative message">
                <div className="header">{errors.nic}</div>
              </div>
            )}
         </div>
         {/* <h6>Upload Your Liscence Image / Recent Unititly Bill</h6>
                      <input
                       
                        placeholder="Liscence Image"
                        type="file"
                        className="btn btn-default"
                        onChange={this.selectFile}
                        /> */}
                    <input
                      type="submit"
                      className="btnRegister"
                      value="Register"
                      onClick={this.saveAndContinue}

                    />
                     <input
                      type="submit"
                      className="btnRegister"
                      value="Go back to Home"
                      onClick={this.back}

                    />
                    
                 

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

export default SignUp;
