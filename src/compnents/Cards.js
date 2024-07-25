import React from 'react';
import image2 from '../assets/flight.jpg'
import image1 from '../assets/jet.jpg'
const categories = [
  {
    image: image1,
    title: 'Card Title 1',
    text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    image: image2,
    title: 'Card Title 2',
    text: 'This is a short card.'
  },
  {
    image: image1,
    title: 'Card Title 3',
    text: 'This is a longer card with supporting text below as a natural lead-in to additional content.'
  },
  {
    image: image2,
    title: 'Card Title 4',
    text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  // Add more categories if needed
];

const Cards = () => {
  return (
    <div>
        <hr></hr>
      <h4>Explore Our Categories</h4>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {categories.map((category, index) => (
          <div className="col" key={index}>
            <div className="card h-100 bg-white shadow-lg">
              <img src={category.image} className="card-img-top" alt={category.title} />
              <div className="card-body">
                <h5 className="card-title">{category.title}</h5>
                <p className="card-text">{category.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <a href="/explore-more" className="btn btn-outline-success border-radius-2">Explore More</a><br/>
      </div>
      <hr className='mb-3'></hr>
    </div>
  );
};

export default Cards;
