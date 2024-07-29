import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faGlobe, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Whyus = () => {
  return (
    <div className="container-fluid mt-5 mb-5">
      <center>
        <h3 className="text-primary fw-bold"><u>BOOK WITH US</u></h3>
      </center>
      <div className="row justify-content-center bg-dark text-light shadow-lg p-4 rounded">
        <div className="col-md-4 d-flex justify-content-center align-items-center mb-3 mb-md-0">
          <div className="p-3 border rounded text-center">
            <div className="mb-3">
              <FontAwesomeIcon icon={faPlane} size="3x" style={{ color: 'rgba(0, 123, 255, 0.7)' }} />
            </div>
            <h5>Why Choose Us?</h5>
            <p>We offer the best flight experiences with unmatched comfort and service.</p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center mb-3 mb-md-0">
          <div className="p-3 border rounded text-center">
            <div className="mb-3">
              <FontAwesomeIcon icon={faGlobe} size="3x" style={{ color: 'rgba(0, 123, 255, 0.7)' }} />
            </div>
            <h5>Our Services</h5>
            <p>Explore a wide range of destinations and services tailored to your needs.</p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div className="p-3 border rounded text-center">
            <div className="mb-3">
              <FontAwesomeIcon icon={faThumbsUp} size="3x" style={{ color: 'rgba(0, 123, 255, 0.7)' }} />
            </div>
            <h5>Our Benefits</h5>
            <p>Enjoy exclusive benefits and rewards with our loyalty programs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
