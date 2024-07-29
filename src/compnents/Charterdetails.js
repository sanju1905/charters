import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Charterdetails = () => {
  const { id } = useParams();
  const [charter, setCharter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/admin/getcharterbyid/${id}`);
        setCharter(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError('Error fetching charter details');
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

  if (!charter) {
    return <div>No data found.</div>;
  }

  return (
    <div className="container mt-5 mb-5">
      <h1 className="fw-bold">Charter Details</h1>
      <nav aria-label="breadcrumb ">
        <ol className="breadcrumb mt-4">
          <li className="breadcrumb-item mb-2"><Link to="/charters">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{charter.type}</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-12 col-md-4">
          <img
            src={charter.image}
            className="img-fluid sticky-top"
            style={{ top: "20px",height:"100%" }}
            alt={charter.type}
            loading="lazy"
          />
        </div>
        <div className="col-12 col-md-8">
          <div className="row">
            <div className="col-12">
              <h1>{charter.type}</h1>
            </div>
            <div className="col-12 mb-4">
              <i className="bi bi-tag text-warning"></i>{charter.type}
            </div>
            <div className="col-12">
              <h4 className="text-primary">Description</h4>
              <p>{charter.description}</p>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-12">
              <h4 className="text-primary">Details:</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>Passengers:</strong> {charter.passengers}</li>
                <li className="list-group-item"><strong>Speed:</strong> {charter.speed}</li>
                <li className="list-group-item"><strong>Price:</strong> {charter.price}</li>
                <li className="list-group-item"><strong>Availability:</strong> {charter.availability}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charterdetails;
