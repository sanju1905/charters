import React from 'react';
import '../css/footer.css'; // Make sure to create and import a CSS file for additional styles

const Footer = () => {
  return (
    <footer className="py-3 bg-dark text-light mt-5">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-primary fw-bold">INDIA</h5>
            <br />
            <p>2nd Floor, Anjali Plaza, Jayanagar, Bengaluru, India – 560076</p>
            <p>support@myairdeal.com</p>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="text-primary fw-bold">DUBAI</h5>
            <br />
            <p>I 10, Block 1, Phase 1, Saih Shuaib 2, Dubai, UAE.</p>
            <br />
            <p>support@myairdeal.com</p>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-primary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-primary">Reviews</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-primary">Contact</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-primary">Search</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 MyAirDeal, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
