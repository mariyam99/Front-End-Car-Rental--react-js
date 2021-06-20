import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminNav extends Component {
   
  
  render() { 
        return (  
                <div>
                <header className="d-flex flex-column flex-md-row align-items-center p-3 bg-white border-bottom shadow-sm">
                <p className="h5 my-0 me-md-auto fw-normal">Rent a Car</p>
                <nav className="my-2 my-md-0 me-md-3">
                  <ul className="nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Rent
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/AdminUserDetails">
                      USERS
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/AddVehicle">
                      VEHICLE
                      </Link>
                    </li>
                    <Link className="btn btn-outline-primary" to="/adminBookingDetails">
                    REQUESTS
                   </Link>
                   <li className="nav-item">
                      <Link className="nav-link" to="/allBookingsadmin">
                      BOOKINGS
                      </Link>
                    </li>
                  </ul>
                </nav>
                <Link className="btn btn-outline-primary" to="/Home">
                   Logout
                </Link>
              </header>
            </div>);
    }
}
 
export default AdminNav;