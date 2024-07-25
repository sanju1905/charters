import React from 'react';
import '../css/bookingcards.css'; // Ensure you have this CSS file or adjust according to your structure


const bookings = [
  {
    from: 'New York',
    to: 'Los Angeles',
    date: '2024-08-01',
    category: 'Business',
    price: '$1200'
  },
  {
    from: 'San Francisco',
    to: 'Chicago',
    date: '2024-08-05',
    category: 'Economy',
    price: '$800'
  },
  {
    from: 'Miami',
    to: 'Dallas',
    date: '2024-08-10',
    category: 'First Class',
    price: '$1500'
  },
  {
    from: 'Boston',
    to: 'Seattle',
    date: '2024-08-15',
    category: 'Economy',
    price: '$900'
  },
  // Add more bookings if needed
];

const BookingCards = () => {
  return (
    <div>
      <hr />
      <h4 className="text-center my-4">Available Bookings</h4>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {bookings.map((booking, index) => (
          <div className="col" key={index}>
            <div className="card h-100 bg-light shadow-sm border-0 bg-white shadow-lg">
              <div className="card-body">
                <h5 className="card-title">From: {booking.from}</h5><br />
                <h6 className="card-subtitle text-muted">To: {booking.to}</h6><br />
                <p className="card-text">
                  <strong>Date:</strong> {booking.date}<br /><br />
                  <strong>Category:</strong> {booking.category}<br /><br />
                  <strong>Price:</strong> {booking.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <a href="/explore-more" className="btn btn-outline-primary">More Options</a>
      </div>
    </div>
  );
};

export default BookingCards;
