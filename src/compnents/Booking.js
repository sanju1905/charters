import React, { useState } from 'react';
import { allCities } from '../utils/Cities'; // Adjust the import path
import { Categories } from '../utils/Categories'; // Adjust the import path
import axios from 'axios';

const Booking = () => {
  const initialState = {
    email: '',
    phone: '',
    from: '',
    to: '',
    date: '',
    passengers: '',
    type: ''
  };

  const [enquiry, setEnquiry] = useState(initialState);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    setEnquiry({
      ...enquiry,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!enquiry.email || !enquiry.phone || !enquiry.from || !enquiry.to || !enquiry.date || !enquiry.passengers || !enquiry.type) {
      setError("Please fill all the required fields.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/admin/addbooking', enquiry);
      console.log(response);
      setMessage("Enquiry done! We will contact you shortly.");
      setEnquiry(initialState); // Reset form fields to initial state
      setError(''); // Clear previous error message
    } catch (error) {
      console.log(error);
      setError("Error while submitting the query.");
      setMessage(''); // Clear previous success message
    }
  };

  return (
    <div className="card bg-light text-dark container mb-5 shadow-lg">
      <div className="card-body d-flex flex-column justify-content-center ">
        <h3 className="card-title text-primary fw-bold"><u>BOOK YOUR FLIGHT WE WILL CONTACT YOU</u></h3>
        <hr />
        <form className="d-absolute" onSubmit={submitHandler}>
          <div className="row g-3 justify-content-center">
            <div className="col-md-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" value={enquiry.email} onChange={onChange} className="form-control" name="email" placeholder="Enter your email" />
            </div>
            <div className="col-md-4">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" value={enquiry.phone} onChange={onChange} className="form-control" name="phone" placeholder="Enter your phone number" />
            </div>
            <div className="col-md-4">
              <label htmlFor="from" className="form-label">From</label>
              <select className="form-select" name="from" value={enquiry.from} onChange={onChange}>
                <option value="">Select departure location</option>
                {allCities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="to" className="form-label">To</label>
              <select className="form-select" name="to" value={enquiry.to} onChange={onChange}>
                <option value="">Select destination</option>
                {allCities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="date" value={enquiry.date} onChange={onChange} className="form-control" name="date" />
            </div>
            <div className="col-md-4">
              <label htmlFor="passengers" className="form-label">Passengers</label>
              <input type="number" value={enquiry.passengers} onChange={onChange} className="form-control" name="passengers" placeholder="Passengers Count" />
            </div>
            <div className="col-md-4">
              <label htmlFor="type" className="form-label">Category</label>
              <select className="form-select" name="type" value={enquiry.type} onChange={onChange}>
                <option value=''>Select the Category</option>
                {Categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="col-md-4 mt-5 d-flex align-items-end">
              <button type="submit" className="btn btn-primary w-100">Search Flights</button>
            </div>
          </div>
          {error && <p className="text-danger text-center mt-3">{error}</p>}
          {message && <p className="text-success text-center mt-3">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Booking;
