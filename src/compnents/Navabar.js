import React from "react";
import { Link } from 'react-router-dom';
import "../css/styles.css";
import Search from "./Search";

const Navabar = () => {
  return (
    <div className="container-fluid px-md-5 bg-dark text-light sticky-top">
      <header className="container-fluid d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  border-bottom">
        <h3 className="fw-bold">
          My<span className="text-primary">Air</span>Deal
        </h3>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to='/' className="nav-link link-secondary px-2 category__link1 fw-bold text-light fs-5">
              Home
            </Link>
          </li>
          <li>
            <Link to='/feedback' className="nav-link link-secondary px-2 category__link1 fw-bold text-light fs-5">
              Reviews
            </Link>
          </li>
          <li>
            <Link to='/contact' className="nav-link link-secondary px-2 category__link1 fw-bold text-light fs-5">
              Contact
            </Link>
          </li>
        </ul>
        <div className="col-md-4 text-end">
         
          <Link to='/search' className="text-decoration-none text-success fw-bold  fs-5">
             Search
            </Link> 
         
        </div>
      </header>
    </div>
  );
};

export default Navabar;
