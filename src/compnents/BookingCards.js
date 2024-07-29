import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/bookingcards.css'; 

const BookingCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const fetched = await axios.get('http://localhost:8000/api/admin/getallemptylegs');
        setData(fetched.data.data.slice(-4)); // Get only the last 4 entries
      } catch (error) {
        console.log(error);
        setError("Error fetching booking data.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <hr />
      <h4 className="text-center text-primary fw-bold my-4"><u>AVAILABLE EMPTYLEGS</u></h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {data.map((booking, index) => (
          <div className="col" key={index}>
            <div className="card h-100 bg-dark text-light shadow-sm border-0">
              <img
                src={booking.image}
                className="card-img-top"
                alt={booking.type}
                loading="lazy"
                style={{width: "100%", height: "200px", objectFit: "cover"}}
              />
              <div className="card-body">
                <h5 className="card-title">From: {booking.from}</h5>
                <h6 className="card-subtitle text-muted">To: {booking.to}</h6>
                <p className="card-text">
                  <strong>Date:</strong> {booking.date}<br />
                  <strong>Category:</strong> {booking.category}<br />
                  <strong>Price:</strong> {booking.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <a href="/emptylegs" className="btn btn-outline-primary">More Empty Legs</a>
      </div>
    </div>
  );
};

export default BookingCards;
