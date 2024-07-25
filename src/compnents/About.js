import React from 'react'
import flight from '../assets/fav.png';
import '../css/about.css'
const About = () => {
    return (
      <div className="container my-4">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-4">
          <div className="col-12 col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
            <img
              src={flight}
              width="607"
              height="510"
              className="img-fluid"
              loading="lazy"
              alt="MyAirDeal"
            />
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="mb-3">EmptyLegs</h2>
            <p className="lead">
              An empty leg, also known as a one-way charter, occurs when a private jet flies without passengers to reposition for its next booked flight or return to its home base. These flights are often available at significantly reduced rates, providing a cost-effective option for luxury travel.
            </p>
          </div>
        </div>
      </div>
    );
  }

export default About
