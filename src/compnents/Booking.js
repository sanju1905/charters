import React from 'react'



    const Booking = () => {
      return (
        <div className="card w-90 bg-white shadow-lg mt-5 mb-5">
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h3 className="card-title">Flight Search</h3>
        <hr/>
        <form className="w-100">
          <div className="row g-3 justify-content-center">
            <div className="col-md-2">
              <label htmlFor="from" className="form-label">From</label>
              <input type="text" className="form-control" id="from" placeholder="Enter departure location" />
            </div>
            <div className="col-md-2">
              <label htmlFor="to" className="form-label">To</label>
              <input type="text" className="form-control" id="to" placeholder="Enter destination" />
            </div>
            <div className="col-md-2">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="col-md-2">
              <label htmlFor="category" className="form-label">Category</label>
              <select className="form-select" id="category">
                <option value="">Select category</option>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </select>
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <button type="submit" className="btn btn-primary">Search Flights</button>
            </div>
          </div>
        </form>
      </div>
    </div>
      );
    };
    
    export default Booking;
    


