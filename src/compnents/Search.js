import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image1 from '../assets/jet.jpg';

const Search = () => {
  const initialState = { searchTerm: "" };
  const [search, setSearch] = useState(initialState);
  const [error, setError] = useState("");
  const [result, setResult] = useState([]);

  const changeHandler = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/admin/search", search);
      console.log("Response data:", response.data);
      setResult(response.data.result);
      setSearch(initialState);
      setError("");
    } catch (error) {
      console.log("Error occurred:", error);
      setError("Error occurred while searching");
    }
  };

  return (
    <div className="search-container">
      <div className="col-md-3 float-end m-2">
        <form onSubmit={submitHandler}>
          <input
            type="search"
            className="form-control"
            name="searchTerm"
            value={search.searchTerm}
            onChange={changeHandler}
            placeholder="Searching.."
            aria-label="Search"
          />
          <span>
            <button type="submit" className="btn btn-primary mt-3">Search</button>
          </span>
        </form>
        {error && <p className="text-danger">{error}</p>}
      </div>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mt-4">
          <li className="breadcrumb-item mb-2"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Search</li>
        </ol>
      </nav>

      {result.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {result.map((category) => (
            <div className="col" key={category._id}>
              <Link to={`/getcharterbyid/${category._id}`} className="text-decoration-none">
                <div className="card h-100 bg-white shadow-lg">
                  <img
                    src={category.image || image1} // Fallback image
                    className="card-img-top"
                    lazy="loading"
                    alt={category.type}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
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
      ) : (
        <div className="text-center mt-5">
          <p>No Data Available</p>
        </div>
      )}
    </div>
  );
};

export default Search;
