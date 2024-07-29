import React from "react";
import { Link } from 'react-router-dom';
import "../css/styles.css";

const Navabar = () => {
  return (
    <div className="container-fluid px-md-5 bg-white shadow-lg">
      <header className="container-fluid d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <h3 className="fw-bold">
          My<span className="text-primary">Air</span>Deal
        </h3>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to='/' className="nav-link link-secondary px-2 category__link1 fw-bold text-dark fs-5">
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className="nav-link link-secondary px-2 category__link1 fw-bold text-dark fs-5">
              About
            </Link>
          </li>
          <li>
            <Link to='/contact' className="nav-link link-secondary px-2 category__link1 fw-bold text-dark fs-5">
              Contact
            </Link>
          </li>
        </ul>
        <div className="col-md-4 text-end">
          <form action="" method="POST">
            <input
              type="search"
              className="form-control"
              name="searchTerm"
              placeholder="Searching.."
              aria-label="Search"
            />
          </form>
        </div>
      </header>
    </div>
  );
};

export default Navabar;
