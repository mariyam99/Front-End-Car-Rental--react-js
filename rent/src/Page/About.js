import React, { Component } from "react";
import "./About.css";
import a1 from "../images/verfiy.jpg";
import a2 from "../images/carrent.png";
import a3 from "../images/blacklist.jpg";
import a4 from "../images/time.jpg";
import a5 from "../images/repeat.jpg";
import a6 from "../images/no.png";
import Navbar from "../Component/Navbar";



class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-4">
              <div class="card p-3">
                <div class="d-flex flex-row mb-3">
                  <img src={a1} width="70" />
                  <div class="d-flex flex-column ml-2">
                    <span className="text-center">
                      {" "}
                      <dt>How to Verify yourself?</dt>
                    </span>
                  </div>
                </div>
                <h6>
                  As you Register to your account, you are required to give your
                  photocard driving liscence, along with a another form identity
                  from either a recent utility bill (within 3 months) or council
                  tax statement.
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card p-3">
                <div class="d-flex flex-row mb-3">
                  <img src={a2} width="70" />
                  <div class="d-flex flex-column ml-2">
                    <span className="text-center">
                      {" "}
                      <dt>How to rent your Car</dt>
                    </span>
                  </div>
                </div>
                <h6>
                  You could book your vehicle,without any adavance payment made.
                  And make the payment when you come to collect your vehicle.
                  Vehicles can be rented for a minimum of 5 hours (half a day’s
                  rental) and a maximum of 2 weeks.
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card p-3">
                <div class="d-flex flex-row mb-3">
                  <img src={a4} width="70" />
                  <div class="d-flex flex-column ml-2">
                    <span className="text-center">
                      {" "}
                      <dt>What time you could collect/return?</dt>
                    </span>
                  </div>
                </div>
                <h6>
                  The garage opens at 8:00am and closes at 6pm therefore any
                  booking must be collected and returned during this time. Any
                  booking can be extended up to 4pm on the day of return if the
                  vehicle has not been booked for rental on the following day.
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card p-3">
                <div class="d-flex flex-row mb-3">
                  <img src={a3} width="70" />
                  <div class="d-flex flex-column ml-2">
                    <span className="text-center">
                      {" "}
                      <dt>Why will you be blacklisted?</dt>
                    </span>
                  </div>
                </div>
                <h6>
                  If someone has previously booked a vehicle and failed to
                  collect it, that customer is blacklisted and may not book a
                  vehicle again from us again. We dont wanna loose you all!
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card p-3">
                <div class="d-flex flex-row mb-3">
                  <img src={a5} width="70" />
                  <div class="d-flex flex-column ml-2">
                    <span className="text-center">
                      {" "}
                      <dt>How valuable you are to us?</dt>
                    </span>
                  </div>
                </div>
                <h6>
                  A late return in which case you can return the vehicle and
                  drop the keys through office letterbox. Only repeat customers
                  will be allowed to do this!! Keep touch with us.
                </h6>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card p-3">
                <div class="d-flex flex-row mb-3">
                  <img src={a6} width="70" />
                  <div class="d-flex flex-column ml-2">
                    <span className="text-center">
                      {" "}
                      <dt>Whom we say NO,but a YES too!</dt>
                    </span>
                  </div>
                </div>
                <h6>
                  We are not insured for drivers under the age of 25 for any
                  vehicles other than the small town cars.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
