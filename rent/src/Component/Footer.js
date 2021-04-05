import React, { Component } from "react";
import "./Footer.css";

class footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer bg-light">
          <div className="container">
            <span className="text-muted">
              Place sticky footer content here.
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default footer;
