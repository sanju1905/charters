import React, { useEffect, useState } from "react";
import image1 from "../assets/jet.jpg";
import axios from "axios";
import { Link } from "react-router-dom";


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
      <h4 className="text-center text-primary fw-bold my-4">EXPLORE OUR CATEGORIES</h4>
      <nav aria-label="breadcrumb ">
        <ol className="breadcrumb mt-4">
          <li className="breadcrumb-item mb-2"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Charters Categories</li>
        </ol>
      </nav>
      <div className="row row-cols-1 row-cols-md-4 g-4">
     
        {data.map((category) => (
       
           <div className="col" key={category._id}>
            <Link to={`/getcharterbyid/${category._id}`} className="text-decoration-none">
            <div className="card h-100 bg-white shadow-lg">
              <img
                src={category.image || image1} // Fallback image
                className="card-img-top"
                lazy="loading"
                alt={category.type}
                style={{width: "100%", height: "200px", objectFit: "cover"}}
              />
              <div className="card-body">
                <h5 className="card-title">{category.type}</h5>
                <p className="card-text">Speed: {category.speed}</p>
                <p className="card-text">Price: {category.price}</p>
              </div>
            </div>
            </Link>
          </div>
     
        ))}
      </div>
      <hr className="mb-3"></hr>
    </div>
  );
};

export default Explore;
