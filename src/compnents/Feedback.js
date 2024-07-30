import React, { useState } from 'react';
import flight from '../assets/fav.png';

import axios from 'axios';

const Feedback = () => {
  const [feedback, setFeedback] = useState({});
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const clickHandler = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/admin/addfeedback', feedback);
      console.log(response.data);
      setResponseMessage('Feedback submitted successfully!');
      setErrorMessage('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setErrorMessage('The email account that you tried to reach does not exist.');
      setResponseMessage('');
    }
  };

  return (
    <div className="container my-5 text-white">
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
        <div className="col-12 col-lg-6">
          <h2 className="text-center mb-4">CONTACT US</h2>
          <form onSubmit={submitHandler}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={clickHandler}
                  name="name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={clickHandler}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="service" className="form-label">Service</label>
              <input
                type="text"
                className="form-control"
                onChange={clickHandler}
                name="service"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="feedback" className="form-label">Feedback</label>
              <textarea
                className="form-control"
                onChange={clickHandler}
                name="feedback"
                id="feedback"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
          {responseMessage && <p className="text-success mt-3">{responseMessage}</p>}
          {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
