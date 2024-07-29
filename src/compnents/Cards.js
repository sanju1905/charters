import React, { useEffect, useState } from "react";
import image1 from "../assets/jet.jpg";
import axios from "axios";


const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/admin/getallcategories");
        setData(res.data.data.slice(-4)); // Get only the last 4 entries
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching category data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
    <h4 className="text-center text-primary fw-bold my-4"><u>AVAILABLE CHARTERS</u></h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {data.map((category) => (
          <div className="col" key={category._id}>
            <div className="card h-100 bg-white shadow-lg">
              <img
                src={category.image || image1} // Fallback image
                className="card-img-top"
                loading="lazy"
                alt={category.type}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
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
        <a href="/charters" className="btn btn-outline-success border-radius-2">
          Explore More
        </a>
      </div>
      <hr className="mb-3" />
    </div>
  );
};

export default Cards;
