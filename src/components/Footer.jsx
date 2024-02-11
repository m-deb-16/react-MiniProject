import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="row-foot">
          <div className="col4 col4_align">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="">Buy us coffee</Link>
              </li>
            </ul>
          </div>
          <div className="col4">
            <img src="https://svgshare.com/i/109x.svg" alt="" />
          </div>
          <div className="col4">
            <h3>Address</h3>
            <p>1 MG Road, Kolkata 700 001 </p>
            <p>+919876543210</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
