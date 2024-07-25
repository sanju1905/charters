import React, { useEffect, useState } from "react";
import image1 from "../assets/jet.jpg";
import axios from "axios";


const Explore = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/admin/getallcategories"
        );
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <hr></hr>
      <h4>Explore Our Categories</h4>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((category) => (
          <div className="col" key={category._id}>
            <div className="card h-100 bg-white shadow-lg">
              <img
                src={category.image || image1} // Fallback image
                className="card-img-top"
                lazy="loading"
                alt={category.type}
              />
              <div className="card-body">
                <h5 className="card-title">{category.type}</h5>
                <p className="card-text">Speed: {category.speed}</p>
                <p className="card-text">Price: {category.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-5">
        <a
          href="/explore-more"
          className="btn btn-outline-success border-radius-2"
        >
          Explore More
        </a>
        <br />
      </div>
      <hr className="mb-3"></hr>
    </div>
  );
};

export default Explore;
