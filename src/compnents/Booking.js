import React from 'react';

const Booking = () => {
  return (
    <div className="card bg-dark text-light container mt-5 mb-5 shadow-lg">
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h3 className="card-title text-primary fw-bold"><u>BOOK YOUR FLIGHT WE WILL CONTACT YOU </u></h3>
        <hr />
        <form className="w-100">
          <div className="row g-3 justify-content-center">
            <div className="col-md-4">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="col-md-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="col-md-4">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="col-md-4">
              <label htmlFor="from" className="form-label">From</label>
              <select className="form-select" id="from">
                <option value="">Select departure location</option>
                <option value="NYC">New York</option>
                <option value="LAX">Los Angeles</option>
                <option value="CHI">Chicago</option>
                <option value="HOU">Houston</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="to" className="form-label">To</label>
              <select className="form-select" id="to">
                <option value="">Select destination</option>
                <option value="NYC">New York</option>
                <option value="LAX">Los Angeles</option>
                <option value="CHI">Chicago</option>
                <option value="HOU">Houston</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="col-md-4">
              <label htmlFor="category" className="form-label">Category</label>
              <select className="form-select" id="category">
                <option value="">Select category</option>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </select>
            </div>
            <div className="col-md-4 d-flex align-items-end">
              <button type="submit" className="btn btn-primary w-100">Search Flights</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
