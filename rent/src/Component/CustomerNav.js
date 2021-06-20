import React, { Component } from "react";
import { Link } from "react-router-dom";


class CustomerNav extends Component {

  dologout(){
    localStorage.clear()
    window.location='/login'
   }

    render() { 
        return (
        <div>
        <header className="d-flex flex-column flex-md-row align-items-center p-3 bg-white border-bottom shadow-sm">
        <p className="h5 my-0 me-md-auto fw-normal">Rent a Car</p>
        <nav className="my-2 my-md-0 me-md-3">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/CustomerHome">
                Home
              </Link>
            </li>
        
              <Link className="btn btn-outline-primary" to="/profile">
               Profile
              </Link>
            
            <Link className="btn btn-outline-primary" to="/Bookings">
             Make the Booking
            </Link>
          </ul>
        </nav>
              <Link className="nav-link" to="/Home">
              Logout
              </Link>
        
        
      </header>
    </div>);
    }
}
 
export default CustomerNav;