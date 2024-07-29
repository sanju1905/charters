import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/about.css'; // Import the CSS file with your styles

const Showfeedback = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/admin/getallfeedback');
        setData(response.data.feedback);
      } catch (error) {
        setError("An error occurred while fetching feedbacks.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <h4 className="text-center text-primary mb-5">WHAT OUR CLIENTS SAY ABOUT US</h4>
      {error && <p className="text-danger text-center">{error}</p>}

      <div id="feedbackCarousel" className="carousel slide ">
        <div className="carousel-inner ">
          {data.length > 0 ? (
            data.map((feedback, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={feedback._id}>
                <div className="card bg-light shadow-lg border-0 shadow-sm rounded">
                  <div className="card-body text-center">
                    <h5 className="card-title d-flex align-items-center justify-content-center">
                      {feedback.name}
                      <i className="bi bi-person-circle ms-2" title="User"></i>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted d-flex align-items-center justify-content-center">
                      {feedback.service}
                      <i className="bi bi-star-fill ms-2 text-warning" title="Service Rating"></i>
                    </h6>
                    <p className="card-text">{feedback.feedback}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        <i className="bi bi-envelope ms-1" title="Email"></i> {feedback.email}
                      </small>
                    </p>
                    {/* Uncomment if you want to show star ratings */}
                    {/* <div className="d-flex justify-content-center mt-3">
                      {[1, 2, 3, 4, 5].map(star => (
                        <i key={star} className={`bi bi-star${star <= feedback.rating ? '-fill' : ''} text-warning`}></i>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No feedbacks available</p>
          )}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#feedbackCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#feedbackCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Showfeedback;
