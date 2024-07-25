import React from 'react';
import flight from '../assets/fav.png';
import '../css/about.css';

const Feedback = () => {
  return (
    <div className="container my-5 ">
        <hr></hr>
      <div className="row mb-5 align-items-center p-3">
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
        <div className="col-12 col-lg-6 border-5">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
