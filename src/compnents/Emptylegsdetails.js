import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Emptylegsdetails = () => {
  const { id } = useParams();
  const [emptyLeg, setEmptyLeg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/admin/getemptylegsbyid/${id}`);
        setEmptyLeg(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.error("Error fetching data:", error);
        setError('Error fetching empty leg details');
      } finally {
        setLoading(false);
      }
    };

    fetchDataById();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  if (!emptyLeg) {
    return <div>No data found.</div>;
  }

  return (
    <div className="container mt-5 mb-5">
      <h1 className="fw-bold">Empty Leg Details</h1>
      <nav aria-label="breadcrumb ">
        <ol className="breadcrumb mt-4">
          <li className="breadcrumb-item mb-2"><Link to="/emptylegs">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{emptyLeg.type}</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-12 col-md-4">
          <img
            src={emptyLeg.image}
            className="img-fluid sticky-top"
            style={{ top: "20px", height: "100%" }}
            alt={emptyLeg.type}
            loading="lazy"
          />
        </div>
        <div className="col-12 col-md-8">
          <div className="row">
            <div className="col-12">
              <h1>{emptyLeg.type}</h1>
            </div>
            <div className="col-12 mb-4">
              <i className="bi bi-tag text-warning"></i>{emptyLeg.type}
            </div>
            <div className="col-12">
              <h4 className="text-primary">Description</h4>
              <p>{emptyLeg.description}</p>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-12">
              <h4 className="text-primary">Details:</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>From:</strong> {emptyLeg.from}</li>
                <li className="list-group-item"><strong>To:</strong> {emptyLeg.to}</li>
                <li className="list-group-item"><strong>Passengers:</strong> {emptyLeg.passengers}</li>
                <li className="list-group-item"><strong>Date:</strong> {emptyLeg.date}</li>
                <li className="list-group-item"><strong>Price:</strong> {emptyLeg.price}</li>
                <li className="list-group-item"><strong>Availability:</strong> {emptyLeg.availability}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emptylegsdetails;
