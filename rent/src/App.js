import React, { Component } from "react";
import { BrowserRouter as Router, Route ,Switch,Link} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Page/Home";
import About from "./Page/About";
import SignUp from "./Page/SignUp";
import Login from "./Page/Login";
import ContactUs from "./Page/ContactUs";
import CustomerHome from "./Page/CustomerHome";

class App extends Component {
  constructor() {
    super();
  }


  
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/CustomerHome" component={CustomerHome} />      
          </div>
      </Router>
    );
  }
}

export default App;
