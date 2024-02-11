import React from "react";
import { Link } from "react-router-dom";
const PageHeader = () => {
  return (
    <>
      <header className="page-header">
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/">
              <img
                className="logo"
                src="https://svgshare.com/i/109x.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="nav-links">
            <nav>
              <ul type="none">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="search">
            <input type="search" placeholder="Search.." />
          </div>
        </div>
      </header>
    </>
  );
};

export default PageHeader;
